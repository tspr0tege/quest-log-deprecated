import React from 'react';

const ToDosModal = ( {todos, deleteTask} ) => {
  let index = -1;
  return(
    <div className='modal-div'>
      <div id='todo-list'>
        {todos.map((todo) => {
          index++;
          return(
            <div className='habit-tab' data-index={index}>
              <p>{todo}</p>
              <div className='todo-item-controls'>
                <i className="fas fa-eye"></i>
                <i className="far fa-trash-alt" onClick={deleteTask}></i>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default ToDosModal;