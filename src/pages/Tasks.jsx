import React, { useState, useEffect } from "react";
import todolist1 from "../assets/todolist1.jpg";

import AddTask from "../components/tasks/AddTask";
import TaskList from "../components/tasks/TaskList";

export default function Tasks() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completed = tasks.filter((task) => task.completed).length;

  return (
    <div className="container py-4">

      {/* Hero Banner */}

      <div className="card shadow rounded-4 border-0 overflow-hidden mb-4">

        <div className="row align-items-center">

          <div className="col-md-7 p-5">

            <h1 className="fw-bold">
              ✅ Today's Tasks
            </h1>

            <p className="text-muted">
              Complete your daily goals and stay productive.
            </p>

          </div>

          <div className="col-md-5">

            <img
              src={todolist1}
              alt="To Do"
              className="img-fluid w-100"
              style={{
                height: "320px",
                objectFit: "cover",
              }}
            />

          </div>

        </div>

      </div>

      {/* Add Task */}

      <AddTask addTask={addTask} />

      {/* Counter */}

      <div className="mb-3">

        <h5>
          Completed {completed} / {tasks.length}
        </h5>

      </div>

      {/* Task List */}

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

    </div>
  );
}