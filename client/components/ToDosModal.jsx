import React from 'react';

const ToDosModal = ( {todos, deleteTask, prioritizeTask} ) => {
  let index = -1;
  return(
    <div className='modal-div'>
      <div id='todo-list'>
        {todos.map((todo) => {
          index++;
          return(
            <div className='habit-tab' key={index} data-index={index}>
              <p>{todo}</p>
              <div className='todo-item-controls'>
                <i className="fas fa-eye tooltip" onClick={prioritizeTask}>
                <span className="tooltiptext">Set new Focus</span>
                </i>
                <i className="far fa-trash-alt tooltip" onClick={deleteTask}>
                <span className="tooltiptext">Delete task</span>
                </i>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default ToDosModal;