import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize toast notifications
toast.configure();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  margin: 10px 0 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [error, setError] = useState("");

  const handleAddTask = () => {
    if (taskName.trim() === "" || !taskDate || !taskTime) {
      setError("All fields are required.");
      toast.error("All fields are required.");
      return;
    }

    const taskDateTime = new Date(`${taskDate} ${taskTime}`).getTime();
    if (isNaN(taskDateTime)) {
      setError("Invalid date and time.");
      toast.error("Invalid date and time.");
      return;
    }

    addTask({ name: taskName, date: taskDateTime });
    setTaskName("");
    setTaskDate("");
    setTaskTime("");
    setError("");
    toast.success("Task added successfully!");
  };

  return (
    <Container>
      <Label htmlFor="taskName">Task Name:</Label>
      <Input
        type="text"
        id="taskName"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Label htmlFor="taskDate">Task Date:</Label>
      <Input
        type="date"
        id="taskDate"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
      />
      <Label htmlFor="taskTime">Task Time:</Label>
      <Input
        type="time"
        id="taskTime"
        value={taskTime}
        onChange={(e) => setTaskTime(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button onClick={handleAddTask}>Add Task</Button>
    </Container>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
