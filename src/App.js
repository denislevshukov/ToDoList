import React from 'react';
import './App.css';
import Clock from './Components/Clock/Clock'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Store/reducers'
import ToDoListContainer from './Components/TodoList/ToDoListContainer';


const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Clock />
          <ToDoListContainer />
        </div>
      </Provider>
    );
  }
}



