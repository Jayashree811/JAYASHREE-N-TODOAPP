"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  addTask, 
  removeTask, 
  selectAllTasks
} from "../../src/redux/todoslice";

function Todolist() {
  const [input, setInput] = useState("");
  
  
  const tasks = useSelector(selectAllTasks);
  
  const dispatch = useDispatch();
  return (
    <div>
      <center>
      <h2>To-Do Page</h2>
      
      {/* Task input */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={input}
          placeholder="Enter activity"
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
          onClick={() => { 
            if (input.trim()) {
              dispatch(addTask(input)); 
              setInput(""); 
            }
          }} 
          style={{ 
            marginLeft: "5px", 
            color: "white", 
            backgroundColor: "green",
            padding: "5px 10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Add
        </button>
      </div>

      {/* Todo list items */}
      <div>
        {tasks.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {tasks.map((task, index) => (
              <li key={index} style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                padding: "10px", 
                margin: "5px 0", 
                backgroundColor: "#f5f5f5", 
                borderRadius: "4px",
                width: "300px"
              }}>
                <span>{task}</span>
                <button 
                  onClick={() => dispatch(removeTask(index))}
                  style={{ 
                    backgroundColor: "#ff4d4d", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "4px", 
                    padding: "5px 10px", 
                    cursor: "pointer" 
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks yet. Add a task to get started!</p>
        )}
      </div>
      </center>
    </div>
  );
}

export default Todolist;