import React from 'react';
import { useGetTasksQuery } from '../app/apiSlice';
import TaskCard from './TaskCard';

const TaskList = () => {
  const { data: tasks, error, isLoading } = useGetTasksQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks.</p>;

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
