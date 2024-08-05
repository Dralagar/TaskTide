import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/Home.css";
import TaskManager from "../src/assets/Taskmanager.png";
import Reminder from "../src/assets/Notification.jpeg";
import Trajectory from "../src/assets/productivity.png";

const HomeComponent = ({
  tasks,
  addTask,
  completeTask,
  abandonTask,
  editTask,
  deleteTask,
}) => {
  const [taskName, setTaskName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("08:00");
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      tasks.forEach((task) => {
        const taskDateTime = new Date(`${task.date}T${task.time}`);
        const now = new Date();
        const timeDiff = taskDateTime - now;

        if (timeDiff > 0 && timeDiff <= 5 * 60 * 1000) {
          toast.info(`Reminder: Task "${task.name}" is due in 5 minutes!`);
        } else if (timeDiff > 0 && timeDiff <= 30 * 60 * 1000) {
          toast.info(`Reminder: Task "${task.name}" is due in 30 minutes!`);
        }
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [tasks]);

  const generateTasksBasedOnHistory = () => {
    const taskFrequency = tasks.reduce((acc, task) => {
      acc[task.name] = (acc[task.name] || 0) + 1;
      return acc;
    }, {});

    const frequentTasks = Object.keys(taskFrequency).filter(
      (taskName) => taskFrequency[taskName] > 1
    );

    return frequentTasks.map((taskName, index) => ({
      id: tasks.length + 1 + index,
      name: taskName,
      date: new Date().toISOString().split("T")[0],
      time: selectedTime,
      status: "pending",
    }));
  };

  const handleGenerateTasks = () => {
    const newTasks = generateTasksBasedOnHistory();
    newTasks.forEach((task) => addTask(task));
    toast.success("Tasks generated based on history!");
  };

  const calculateSuccessRate = () => {
    if (!tasks || tasks.length === 0) return "N/A";
    const completedTasks = tasks.filter((task) => task.status === "completed");
    return ((completedTasks.length / tasks.length) * 100).toFixed(2);
  };

  const calculateAbandonedRate = () => {
    if (!tasks || tasks.length === 0) return "N/A";
    const abandonedTasks = tasks.filter((task) => task.status === "abandoned");
    return ((abandonedTasks.length / tasks.length) * 100).toFixed(2);
  };

  const calculateProductivityRate = () => {
    if (!tasks || tasks.length === 0) return "N/A";
    const completedTasks = tasks.filter((task) => task.status === "completed");
    const abandonedTasks = tasks.filter((task) => task.status === "abandoned");
    return (
      ((completedTasks.length - abandonedTasks.length) / tasks.length) *
      100
    ).toFixed(2);
  };

  const handleAddTask = () => {
    if (taskName.trim() === "") {
      setError("Task name is required.");
      toast.error("Task name is required.");
      return;
    }
    if (!selectedDate) {
      setError("Task date is required.");
      toast.error("Task date is required.");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      date: selectedDate,
      time: selectedTime,
      status: "pending",
    };
    addTask(newTask);
    setTaskName("");
    setSelectedDate("");
    setSelectedTime("08:00");
    setError("");
    toast.success("Task added successfully!");
  };

  const filteredTasks = selectedDate
    ? tasks.filter((task) => task.date === selectedDate)
    : tasks;

  const taskCategories = tasks.reduce((acc, task) => {
    acc[task.name] = acc[task.name] || [];
    acc[task.name].push(task);
    return acc;
  }, {});

  const AIReview = () => {
    tasks.forEach((task) => {
      if (task.status === "completed") {
        toast.info(`AI Review: Task "${task.name}" completed successfully!`);
      }
    });
  };

  return (
    <div className="container">
      <h2 className="header">Task List</h2>
      <div className="stats-container">
        <p>Success Rate: {calculateSuccessRate()}%</p>
        <p>Abandoned Rate: {calculateAbandonedRate()}%</p>
        <p>Productivity Rate: {calculateProductivityRate()}%</p>
      </div>
      <div className="datetime-container">
        <div>
          <label>Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div>
          <label>Select Time:</label>
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
        </div>
      </div>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className="task-item">
            {task.name} - {task.status}
            <div>
              <button
                className="task-button complete"
                onClick={() => completeTask(task.id)}
              >
                Complete
              </button>
              <button
                className="task-button abandon"
                onClick={() => abandonTask(task.id)}
              >
                Abandon
              </button>
              <button
                className="task-button edit"
                onClick={() =>
                  editTask(task.id, {
                    name: prompt("Edit task name:", task.name),
                    date: prompt("Edit task date:", task.date),
                    time: prompt("Edit task time:", task.time),
                  })
                }
              >
                Edit
              </button>
              <button
                className="task-button delete"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="add-task-container">
        <div>
          <label>Add Task:</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <button className="add-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <button className="generate-button" onClick={handleGenerateTasks}>
        Generate Tasks Based on History
      </button>
      <button className="ai-review-button" onClick={AIReview}>
        AI Review Completed Tasks
      </button>
      <div className="task-history">
        <h3>Task History</h3>
        {Object.keys(taskCategories).map((category) => (
          <div key={category}>
            <h4>{category}</h4>
            <ul>
              {taskCategories[category].map((task) => (
                <li key={task.id}>
                  {task.date} - {task.name} - {task.status}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="feature-highlights">
        <h3>App Features</h3>
        <div className="features-row">
          <div className="feature-column">
            <h4>Task Management</h4>
            <img src={TaskManager} alt="Twitter" />
            <p>
              Organize and track tasks effortlessly with our intuitive
              interface. Add, edit, complete, or abandon tasks with a few
              clicks.
            </p>
          </div>
          <div className="feature-column">
            <h4>Automated Reminders</h4>
            <img src={Reminder} alt="Notification" />
            <p>
              Stay on top of your deadlines with automated reminders. Get
              notified of upcoming tasks and avoid last-minute rushes.
            </p>
          </div>
          <div className="feature-column">
            <h4>Productivity Insights</h4>
            <img src={Trajectory} alt="Productivity" />
            <p>
              Analyze your task success and abandonment rates. Use these
              insights to improve your productivity and task management
              strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeComponent.propTypes = {
  tasks: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  abandonTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default HomeComponent;
