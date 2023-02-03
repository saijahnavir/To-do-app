import React,{useState} from "react";

function Todo(props){

  const [isediting,setediting]=useState(false);
  const [newname,setnewname]=useState('');

  function handlechange(e) {
    setnewname(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    props.edittask(props.id,newname)
    setnewname("")
    setediting(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name} : 
        </label>
        <input id={props.id} className="todo-text" type="text"  value={newname} onChange={handlechange}/>
      </div>
      <div>
        <button type="button" className="btn todo-cancel" onClick={()=>setediting(false)}>
          Cancel 
          <span>renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save 
          <span> new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div>
      <div>
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn__primary" onClick={()=> setediting(true)}>
            Edit <span>{props.name}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deletetask(props.id)}
          >
            Delete <span>{props.name}</span>
          </button>
        </div>
    </div>
  );

  return <li className="todo">{isediting ? editingTemplate : viewTemplate}</li>;  
}

export default Todo;
