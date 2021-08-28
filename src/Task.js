import React from 'react';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import { useState } from 'react';

function Task({ task, setTasks, onTglStatus, showTaskEdit, setShowTaskEdit, onHandleChangeInput, onHandleSubmit, onShowTaskEdit, setDesc, setDate, onDeleteTask, handleDelete, tasks, id }) {
  const [editTask, setEditTask] = useState(undefined)
  const [deleteTask, setDeleteTask] = useState(undefined)
  {

  const onHandleEdit =(desc, date)=>{
    setEditTask(
      //      { desc: task.dec, date: task.date, id: tasks.length, complete: false },
      //      ...tasks,
      //   ]);
      // };
        //  task.map((editTask) => {
               task.desc = desc,
               task.date = date,
                // return editTask
                console.log("I am here")
           
          );
    setEditTask(undefined)

  }

  // const onDeleteTask = (task) => {
  //   setDeleteTask(tasks => {
  //     const tasky = [...tasks]; // create new array based on current tasks
  //     let index = tasky.findIndex(t => {
  //         return t.id === task.id
  //     });
  //     tasky.splice(index, 1); // remove task by inde
  //     console.log("I am here");
  //     return tasky; // return altered array
      
// });
  
  // };



  return (
    <div className="card text-left" >
      <button className="button-blue" 
      onClick={() => 
      {
        setEditTask(task); setShowTaskEdit(!showTaskEdit);}}>
        {/* {!showTaskEdit && "Edit Task"}
        {showTaskEdit && "➖"*/} Edit Task</button> 
      {editTask && showTaskEdit && <EditTask onHandleEdit={onHandleEdit} task={{}} />}
      {/* <button className="button" onClick={() => handleDelete(task)}> Delete Task </button> */}
      
     {/* deleteTask && /*}

      {/* onHandleSubmit={onHandleSubmit} */}

      <div className="row">
        <div className="col-10">
          <h4>{task.desc}</h4>
          <div className="task-meta">
            <img
              src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
              alt="calendar"
            />
            {task.date}

          </div>
        </div>

        <div className="col-2 is-center">
          {/* <button className="button icon-only clear">
            <img
              src="https://icongr.am/feather/check-circle.svg?size=24&color=11d054"
              alt="Open"
            />
          </button> */}
          <button className="button icon-only clear" onClick={() => onTglStatus(task)}>
            {task.complete && "✅"}
            {!task.complete && "⬜"}
          </button>
        </div>
        <div className="col-12">
          <p>{task.remarks}</p>
        </div>
      </div>
      <DeleteTask /*onDeleteTask={onDeleteTask}*/ tasks={tasks} id={id} task={task} setTasks={setTasks}/>
    </div>
  )};
        }  
      
export default Task;
