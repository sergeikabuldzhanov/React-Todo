import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
    }
  }

  addTodo = (newTodo) =>{
    this.setState(oldState=>({
      todos: [
        ...oldState.todos
        , {
          task: newTodo,
          id: oldState.todos.length + 1,
          completed: false,
        }
      ]
    }))
  }

  clearCompleted = () =>{
    this.setState(oldState=>
      ({
        todos: this.state.todos.filter(todo=>!todo.completed),
      })
    );
  }

  toggleTodo = (id, isComplete) => event => {
    // markTodo needs to return a function that takes an event,
    // so we can attach it to a click handler in the JSX
    console.log(id, isComplete);
    
    this.setState({
      todos: this.state.todos.map(
        todo => {
          if (todo.id !== id) return todo;
          return { id: todo.id, task: todo.task, completed: !isComplete };
    })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos = {this.state.todos} toggleTodo = {this.toggleTodo}/>
        <TodoForm addTodo = {this.addTodo} clearCompleted = {this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
