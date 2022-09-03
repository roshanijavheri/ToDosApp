import "./App.css";
import Header from "./MyComponents/Header";
import { AddTodo } from "./MyComponents/AddTodo";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  }from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null) {
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    // console.log("I am on delete of Todo",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  
  const addTodo=(title, desc)=>{
    let sno;
    if(todos.length===0){
      sno = 0;     //if todos are Empty Case
    }
    else{
      sno=todos[todos.length-1].sno+1;   //formula for getting unique Sno every timeē
    }

    const myTodo={
      sno: sno,
      title: title,
      desc: desc
    }
    
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    // alert("Task Added Successfully!!!");
  }
   
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
 
  return (
    <>
      <Router>    
        <Header title="Todos App" searchBar={false}/>
        <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About/>
          </Route> 
        </Switch> 
        <Footer/>
      </Router>
    </>
  );
}

export default App;
