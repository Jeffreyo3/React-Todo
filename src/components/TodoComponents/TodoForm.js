import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemName: ""
        };
    }

    handleChages = e => {
        this.State({
            itemName: e.target.value
        });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        if(this.state.itemName !== "") {
            this.PaymentResponse.addItem(this.state.itemName);
            this.State({
                itemName: ""
            });
        }
    };
    
    render() {
        console.log("rendering form");
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChanges}
                    type="text"
                    name="item"
                    value={this.state.itemName}
                />
                <button>Add</button>
            </form>
            
        );
    }
}

export default TodoForm;