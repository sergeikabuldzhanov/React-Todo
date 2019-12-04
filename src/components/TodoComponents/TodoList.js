import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <Todo
              task={todo.task}
              completed={todo.completed}
              key={todo.id}
              id = {todo.id}
              toggleTodo = {this.props.toggleTodo}
            />
          );
        })}
      </div>
    );
  }
}
