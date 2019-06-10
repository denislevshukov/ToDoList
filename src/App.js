import React from 'react';
import './App.css';
import Clock from './Components/Clock/Clock'
import ToDoList from './Components/TodoList/ToDoList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <ToDoList />
      </div>
    );
  }
}
export default App;
