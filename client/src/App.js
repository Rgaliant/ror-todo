import React, { Component } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { Container, } from 'semantic-ui-react'
import axios from "axios";


class App extends Component {
  state = { todos: [], }

  componentDidMount() {
    axios.get("/api/items")
      .then( res => {
        this.setState({ todos: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }


  addItem = (name) => {
    axios.post("/api/items", { name })
    .then( res => { 
      const { todos, } = this.state
      this.setState({ todos: [...todos, res.data] })
    })
    .catch( err => {
      console.log(err)
    })
  }

  updateItem = (id) => {
    axios.put(`/api/items/${id}`)
    .then( res => {
      const todos = this.state.todos.map( t => {
        if (t.id === id)
          return res.data
        return t
      })
      this.setState({ todos, })
    })
  }

  deleteItem = (id) => {
    axios.delete(`/api/items/${id}`)
    .then( res => {
      const { todos, } = this.state
      this.setState({ todos: todos.filter( t => t.id !== id ), })
    })
  }


  render() {
    return (
      <div>
        <Container>
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
          <br />
          <br />
          <TodoList 
          todos={this.state.todos} 
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
          />
        </Container>
      </div>
    );
  }
}

export default App;
