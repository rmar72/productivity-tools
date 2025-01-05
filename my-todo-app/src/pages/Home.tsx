import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div className="home">
      <h1>Todo List</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
