import React, { useState } from 'react';
import { useAddTaskMutation } from '../app/apiSlice';
import { taskSchema } from '../utils/zodSchemas';

const TaskForm = () => {
  const [addTask] = useAddTaskMutation();
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      taskSchema.parse({ title });
      await addTask({ title, completed: false });
      setTitle('');
    } catch (err) {
      alert(err.errors?.[0]?.message || 'Invalid input');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
