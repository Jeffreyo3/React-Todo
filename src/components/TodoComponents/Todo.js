import React from 'react';

const Todo = props => {

    let todoClassName = "todo";
    if (props.todo.completed) {
        todoClassName = todoClassName + " completed!";
    }



    return(
        <div className={todoClassName}>
            <p>{props.todo.name}</p>
        </div>
    );
};

export default Todo;
