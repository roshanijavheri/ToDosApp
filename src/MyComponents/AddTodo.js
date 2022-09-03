import React, { useState } from 'react'

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  
  const submit=(e)=>{
    e.preventDefault();  //prevents Page Reloading
    if(!title||!desc){
      alert("Title or description cannot be blank");
    }
    else
     { props.addTodo(title, desc);
      setTitle("");   //for clearing the Title textBox
      setdesc("");   //for clearing the Desc textBox
     }
    }

  return (
    <div className="container my-4">
    <h4>Add a Todo</h4>
    <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text"value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/>
        </div>  
        <div className="mb-3">
            <label htmlFor="desc" className="form-label">Todo Description</label>
            <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
        </div>
        <button type="submit" className="btn btn-primary">Add to List</button>
        </form>
    </div>
  )
}
