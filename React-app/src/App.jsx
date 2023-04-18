import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    if (newTask != "") {
      const task = {
        id: toDoList.length == 0 ? 0 : toDoList[toDoList.length - 1].id + 1,
        taskName: newTask,
        complete: false,
      };
      setToDoList([...toDoList, task]);
    }
  };
  const deleteTask = (taskId) => {
    setToDoList(toDoList.filter((task) => task.id != taskId));
  };

  const update = (taskId) => {
    const newToDoList = toDoList.map((task) => {
      if (task.id == taskId) {
        return { ...task, complete: true };
      } else {
        return task;
      }
    });
    setToDoList(newToDoList);
  };

  return (
    <div className="container">
      <h1 className="mainHeader">To Do List</h1>
      <div className="addTask">
        <input
          className="text"
          type="text"
          name=""
          id=""
          onChange={handleChange}
        />
        <button className="addBtn" onClick={addTask}>
          Add
        </button>
      </div>
      {toDoList.length ? (
        <div className="lists">
          {toDoList.map((task) => {
            return (
              <Task
                taskName={task.taskName}
                taskId={task.id}
                complete={task.complete}
                deleteTask={deleteTask}
                update={update}
              />
            );
          })}
        </div>
      ) : (
        <h1 className="noTasks">No tasks</h1>
      )}
    </div>
  );
}

export default App;
