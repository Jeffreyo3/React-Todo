import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';


const data = [
  {
    name: "Example Item",
    id: 1,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: data
    };
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  
  toggleCompleted(itemId) {
    console.log("togglePurchased: ", itemId);
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  }

  addItem = itemName => {
    console.log("add item: ", itemName);

    this.setState({
      todo: [
        ...this.state.todo,
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
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList 
          todo={this.state.todo}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
