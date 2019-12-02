import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      console.log(this.props.id);
      
    return (
      <div
        className="todo-item"
        style={{
          textDecoration: this.props.completed ? "line-through" : "none"
        }}
        onClick = {this.props.toggleTodo(this.props.id, this.props.completed)}
      >
        {this.props.task}
      </div>
    );
  }
}
