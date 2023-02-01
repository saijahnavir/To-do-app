import React, { useState } from 'react';
import Todo from './components/Todo';
import Form from './components/Form';
import Filterbutton from './components/Filterbutton';


//callback prop : a function to accept input from child component and then pass this data to App()

function addTask (name) {
  alert(name);
}


function App(props) {

  const tlist= props.tasks.map((task) => <Todo 
  id={task.id}
  name={task.name}
  completed={task.completed}
  key={task.id}
  />);

  return (
    <div className="todoapp stack-large">
      <h1>To do App</h1>

      <Form addTask={addTask} />
      
      <div className="filters btn-group stack-exception">
        <Filterbutton />
        <Filterbutton />
        <Filterbutton />
      </div>
      
      <h2 id="list-heading">3 tasks remaining</h2>

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
