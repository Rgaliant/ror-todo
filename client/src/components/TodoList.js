import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteItem, updateItem }) => (
  <div>
    { todos.map( todo => 
      <Todo 
        key={todo.id}
        { ...todo }
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    )}
  </div>
)


export default TodoList