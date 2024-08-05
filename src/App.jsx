// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Home";
import About from "./About"; // Ensure you have an About component
import Contact from "./Contact"; // Ensure you have a Contact component
import Navbar from "./Navbar"; // Ensure you have a Navbar component
import Footer from "./Footer"; // Ensure you have a Footer component
import "react-toastify/dist/ReactToastify.css";
import "./styles/Home.css"; // Ensure your CSS paths are correct

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    toast.success("Task added successfully!");
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: "completed" } : task
      )
    );
    toast.success("Task completed successfully!");
  };

  const abandonTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: "abandoned" } : task
      )
    );
    toast.error("Task abandoned.");
  };

  const editTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
    toast.info("Task updated successfully!");
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    toast.warn("Task deleted.");
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                tasks={tasks}
                addTask={addTask}
                completeTask={completeTask}
                abandonTask={abandonTask}
                editTask={editTask}
                deleteTask={deleteTask}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
};

export default App;
