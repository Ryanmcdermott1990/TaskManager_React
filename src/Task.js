import React from 'react';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import { useState } from 'react';

function Task({ task, setTasks, onTglStatus, showTaskEdit, setShowTaskEdit, onHandleChangeInput, onHandleSubmit, onShowTaskEdit, setDesc, setDate, onDeleteTask, handleDelete, tasks, id }) {
  const [editTask, setEditTask] = useState(undefined)
  const [deleteTask, setDeleteTask] = useState(undefined)
  {

    const onHandleEdit = (desc, date, remarks) => {
      setEditTask(
        task.desc = desc,
        task.date = date,
        task.remarks = remarks,
        console.log("I am here")

      );
      setEditTask(undefined)

    }

    return (

      <div className="card text-left" >
        <div className="row">
          <div className="col-7">
            <h4>{task.desc}</h4>
            <div className="task-meta">
              <img
                src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
                alt="calendar"
              />
              {task.date}

            </div>
          </div>

          <div>

            <button className="button icon-only clear" onClick={() => onTglStatus(task)}>
              {task.complete && "✅"}
              {!task.complete && "⬜"}
            </button>
            <button className="button-blue"
              onClick={() => {
                setEditTask(task); setShowTaskEdit(!showTaskEdit);
              }}>
              Edit Task</button>
            {editTask && showTaskEdit && <EditTask onHandleEdit={onHandleEdit} task={{}} />}
          </div>

        </div>



        <div>
          <p>{task.remarks}</p>
        </div>

        <DeleteTask tasks={tasks} id={id} task={task} setTasks={setTasks} />
      </div>
    )
  };
}

export default Task;
