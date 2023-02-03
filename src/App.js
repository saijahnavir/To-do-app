import React, { useState } from 'react';
import Todo from './components/Todo';
import Form from './components/Form';
import { nanoid } from "nanoid";
import './App.css';

//callback prop : a function to accept input from child component and then pass this data to App()


function App(props) {

  const[tasks,setTasks]=useState(props.tasks); 

  function toggletaskcompleted(id){
    const updatedtasks=tasks.map((task) => {
    if (id===task.id){
      return{...task,completed:!task.completed}
    }
    return task;
    });
    setTasks(updatedtasks);
  }

  function edittask(id,newname){
    const editedtlist=tasks.map((task)=>{
      if(id===task.id){
        return{...task,name:newname}
      }
      return task;
    });
    setTasks(editedtlist)
  }

  function deletetask(id){
    const remainingtasks=tasks.filter((task)=>id!==task.id)
    setTasks(remainingtasks)
    console.log(id)
  }

  const tlist= tasks.map((task) => (<Todo 
  id={task.id}
  name={task.name}
  completed={task.completed}
  key={task.id}
  toggletaskcompleted={toggletaskcompleted}
  deletetask={deletetask}
  edittask={edittask}
  />));

  function addTask (name) {
    const newTask ={id:`todo-${nanoid()}`, name, completed:false};
    setTasks([...tasks,newTask])
  }

  const taskortasks =  tlist.length !==1 ? 'tasks': 'task';
  const Taskrem = `${tlist.length} ${taskortasks} remaining!`;

  return (
      <div className="todoapp stack-large">
      <h1>To do App</h1>

      <hr style={{ background: "#4d4d4d",height: "3px",border: "none",}}/>

      <Form addTask={addTask} />
      <hr style={{ background: "#4d4d4d",height: "1px",border: "none",}}/>
      
      <h2 id="list-heading">{Taskrem}</h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
       {tlist}
      </ul>
    </div>
    
  );
}

export default App;
