import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      'di choi',
      'di ngu',
      'di ngu'
    ];
  }

  render() {
    return (
      <div className="App">
          {
            this.todoItems.map((item, index) => <TodoItem key={index} title={item}/>)
          }
      </div>
    );
  }
}

export default App;
