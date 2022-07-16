import React, { useLayoutEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Tasks from 'react';
import Task from 'react';


function DeleteTask({task, tasks, setTasks}) {
    const handleDelete = (task) => {
        if (tasks && tasks.length > 0) {
            const nTasks = [...tasks]
            const index = nTasks.findIndex((t) => t.id === task.id)
            if(index < 0){
                return
            }
            nTasks.splice(index, 1)
            console.log(nTasks);
            setTasks(nTasks)
        }
    }
    return (
        <div className="card text-center">
            <button className="button-red" onClick={() => handleDelete(task)}> Delete Task</button>
        </div>
    )
    };

export default DeleteTask;