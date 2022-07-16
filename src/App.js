import './App.css';
import React from 'react';
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import EditTask from './EditTask';
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [tasks, setTasks] = useState([
    { desc: "Practice front end programming", id: '0', date: "Date can be plain text or a date format", status: "Complete", remarks: "This is a default task" },
  ]);
const index = tasks.length;

  const onTglStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };

  const onShowTaskEdit = (task) => {
      setTasks(
          tasks.map((open) => {
              open.done = task.id === open.id ? !open.done : open.done;
              return open;
          })
      );
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);
  const [showTaskAdd, setShowTaskAdd] = useState(false);


  const onSaveTask = ({ desc, date, remarks }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: tasks.length, complete: false, remarks: remarks },
      ...tasks,
    ]);
    setShowTaskAdd(!showTaskAdd)
   
  };

  
  
  const onDeleteAll = () => {
    setTasks([]);
  }

  return (
    // <Task task={task} onTglStatus={onTglStatus} />;
    <div className="App">
      <Header></Header>
      <div className="container">
    
        <Tasks tasks={tasks} setTasks={setTasks} index={index} onTglStatus={onTglStatus} setShowTaskEdit={setShowTaskEdit} showTaskEdit={showTaskEdit} onSaveTask={onSaveTask} onShowTaskEdit={onShowTaskEdit} />
        <div className="col-12 text-left">
          <button
            className="button-blue"
            onClick={() => setShowTaskAdd(!showTaskAdd)}>
            {!showTaskAdd && "Create New Task"}
            {showTaskAdd && "➖"}
          </button>
          <button 
          className="button-blue" 
          onClick={() => onDeleteAll()}>
            Delete All
          </button>
        </div>
        {showTaskAdd && <AddTask task={{}} onSaveTask={onSaveTask} />}

      </div>
    </div>

  );
}
export default App;
