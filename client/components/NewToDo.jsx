import React from 'react';

class NewToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.changeValue = this.changeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  changeValue (e) {
    // console.log(`"This" value: ${this} \n Arguments: ${e.target.value}`);
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit () {
    let newTask = this.state.value;
    this.setState({value: ''});
    this.props.addNewTask(newTask);
  }

  handleKeyUp (e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render () {
    return(
      <div id='add-task' className='vertical-align'>
        <label>Add a task: </label>
        <input type="text" className='text-box' value={this.state.value} onChange={this.changeValue} onKeyUp={this.handleKeyUp}></input>
        <button href='#' className='add-task-btn' onClick={this.handleSubmit}>+</button>
      </div>
    );
  }
}

export default NewToDo;