import React from 'react';
import Task from './Task';
import App from './App';
import { useState } from "react";
import { useEffect } from "react";
function Tasks({ tasks, setTasks, onTglStatus, showTaskEdit, setShowTaskEdit, onSaveTask, onHandleSubmit, onShowTaskEdit, id }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onHandleChangeInput = (e) => {
    setSearchTerm(e.target.value);
  };


  useEffect(() => {
    const results = tasks.filter(taskSearch =>
      taskSearch.toString().toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="row">
      <div className="col-12 text-left">

      </div>
      <div>
        {tasks.map((task, index) => (
          task.desc.toLowerCase().includes(searchTerm) && <Task task={task} setTasks={setTasks} key={task.id} index={index} onTglStatus={onTglStatus} setShowTaskEdit={setShowTaskEdit} showTaskEdit={showTaskEdit} onSaveTask={onSaveTask} onHandleChangeInput={onHandleChangeInput} onHandleSubmit={onHandleSubmit} onShowTaskEdit={onShowTaskEdit} tasks={tasks} id={id} />
        ))}
        <div className="col-12"></div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={onHandleChangeInput}
        />


      </div>


    </div>
  );
}

export default Tasks;

