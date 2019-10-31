import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemName: ""
        };
    }

    handleChanges = e => {
        this.setState({
            itemName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.itemName !== "") {
            this.props.addItem(this.state.itemName);
            this.setState({
                itemName: ""
            });
        }
    };

    render() {
        console.log("rendering form...");
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                placeholder="New ToDo Item"
                onChange={this.handleChanges}
                name="item"
                value={this.state.itemName}
                />
                
                <button>Add ToDo</button>
            </form>
        )
    }


}


export default TodoForm;