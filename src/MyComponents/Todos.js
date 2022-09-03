import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  let mainContainer={
    minHeight: "80vh"
  }
  return (
    <div className="container my-3" style={mainContainer}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display": 
        props.todos.map((todo)=>{
          return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>);
        })
      }
    </div>
  )
}
