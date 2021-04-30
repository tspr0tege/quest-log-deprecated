import React from 'react';

class AddHabit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    };
    this.changeValue = this.changeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  changeValue (e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit () {
    let newHabit = this.state.value;
    this.setState({value: ''});
    this.props.addNewHabit(newHabit);
  }

  handleKeyUp (e) {
    // console.log(e);
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render () {

    return(
      <div id='add-habit' className='vertical-align'>
        <input type='text' className='text-box' value={this.state.value} onChange={this.changeValue} onKeyUp={this.handleKeyUp} placeholder='Add a new habit...'></input>
        <button href='#' className='add-task-btn' onClick={this.handleSubmit}>+</button>
      </div>
    );
  }
}

export default AddHabit;