import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';


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

  addItem = itemName => {
    console.log("adding item: ", itemName);

    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: itemName,
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
          <TodoForm addItem={this.addItem}/>
          
        </div>

      </div>
    );
  }
}

export default App;
