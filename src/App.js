import React from 'react';
import TodoList from './Components/TodoList';

const App = () => {
  const initialItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList title="Today's Tasks" initialItems={initialItems} /> 
    </div>
  );
};

export default App;
