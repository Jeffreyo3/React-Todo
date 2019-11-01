import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

import "./components/TodoComponents/Todo.css";

const data = [{}];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: data,

    };

  }

  toggleCompleted = todoId => {
    console.log("toggleCompleted: ", todoId);

    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  }

  addTodo = todoName => {
    console.log("adding todo: ", todoName);

    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: todoName,
          id: Date.now(),
          completed: false
        }
      ]
    });


  };
  

  
  render() {
    console.log("rendering ... ");
    return (
      <div className="App">
        <div>
          <h2>ToDo List MVP!</h2>
          <TodoForm addTodo={this.addTodo}/>
          <TodoList 
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          />
          
        </div>

      </div>
    );
  }
}

export default App;
