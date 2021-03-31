import React from 'react';

import NewToDo from './NewToDo.jsx';

const MainToDo = ( {todos, addNewTask, completeTask} ) => {

  return(
    <div id="quest-log-hud">
      <p>I'm going to be a boss!!</p>
      <div className="current-task clickable" onClick={completeTask}>
        <p>Current task: <span>{todos[0]}</span></p>
      </div>
      <NewToDo addNewTask={addNewTask}/>
    </div>
  );
}

export default MainToDo;