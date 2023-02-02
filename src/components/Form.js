import React,{useState} from 'react';
import './Form.css';


function Form(props){

  const [name,setName]=useState('');

    function handlechange(e){
        setName(e.target.value)
    }


    function submit(x){
      x.preventDefault();
      props.addTask(name);
      setName("");
    }

    return(
        <form onSubmit={submit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Add a new task :
          </label>
        </h2>
        <input type="text" id="new-todo-input" className="input input__lg" name="text" autoComplete="off" value={name} onChange={handlechange}/>

        <button type="submit" className="btn btn__primary btn__lg"> Add Task </button>
      </form>
    
    );

}

export default Form;