import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  onValueChange = event => {
    const { name, value } = event.target;
    this.setState(oldState => ({
      newTodo: value
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.state.newTodo = '';
  };

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newTodo"
          placeholder="...todo"
          value = {this.state.newTodo}
          onChange={this.onValueChange}
        />
        <input type="submit" />
        <button type="button" onClick={this.props.clearCompleted}>
          Clear completed
        </button>
      </form>
    );
  }
}
