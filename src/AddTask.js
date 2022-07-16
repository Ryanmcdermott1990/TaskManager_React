import React from 'react';
import { useState } from "react";

function AddTask({ task, onSaveTask, setShowTaskAdd, ShowTaskAdd }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [remarks, setRemarks] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc, date: date, remarks: remarks });
  
    setDesc("");
    setDate("");
    setRemarks("");
  };
  return (
    <div className="card">
      <h3>Add Task</h3>
      <form>
        <label htmlFor="desc">Task Title</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="date">Task Due Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="remarks">Task Description</label>
        <input
          type="text"
          name="remark"
          id="remarks"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />

        <div className="text-right">
          <button className="button dark" onClick={saveTask}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;

