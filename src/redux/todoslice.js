import { createSlice, nanoid } from "@reduxjs/toolkit";

// Simple activity data for React DevTools visibility
const initialTasks = [
  "Eat",
  "Sleep",
  "Yoga"
];

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: initialTasks
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((_, index) => index !== action.payload);
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, removeTask, setTasks } = todoSlice.actions;

// Simple selector for React DevTools
export const selectAllTasks = (state) => state.todo.tasks;

export default todoSlice.reducer;