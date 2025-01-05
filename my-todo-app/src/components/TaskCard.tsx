import React from 'react';
import { useUpdateTaskMutation, useDeleteTaskMutation } from '../app/apiSlice';

const TaskCard = ({ task }) => {
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const toggleCompleted = () => {
    updateTask({ id: task.id, completed: !task.completed });
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <button onClick={toggleCompleted}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
