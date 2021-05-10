import React from 'react';
import axios from 'axios';

class newProfileModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      values: [],
      image: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.checkLimit = this.checkLimit.bind(this);
    this.fileUpload = this.fileUpload.bind(this);

    this.fileInput = React.createRef();
  };

  handleSubmit (e) {
    e.preventDefault();
    this.fileUpload(this.fileInput.current.files[0])
    .then((response) => {
      let valuesArray = this.state.values.map(checkbox => {
        return checkbox.value;
      })
      console.log(response.data.path);
      this.props.createNewUser(this.state.name, valuesArray, response.data.path);
    });
  }

  fileUpload(file){
    const formData = new FormData();
    formData.append('avatar', file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  axios.post('/upload', formData, config);
  }

  changeValue (e) {
    this.setState({
      name: e.target.value
    });
  }

  checkLimit (e) {
    this.state.values.push(e.target);
    if (this.state.values.length > 6) {
      this.state.values[0].checked = false;
      let removedValue = this.state.values.shift();
      alert(`Limit of 6 Core Values exceeded.\n${removedValue.value} has been removed.`);
    }

  }

  render () {
    var valuesArray = ['Acceptance', 'Adventure', 'Assertiveness', 'Authenticity', 'Beauty', 'Caring', 'Challenge', 'Compassion', 'Connection', 'Contribution', 'Conformity', 'Cooperation', 'Courage', 'Creativity', 'Curiosity', 'Encouragment', 'Equality', 'Excitement', 'Fairness', 'Fitness', 'Flexibility', 'Freedom', 'Friendliness', 'Forgiveness', 'Fun', 'Generosity', 'Gratitude', 'Growth', 'Honesty', 'Humor', 'Humility', 'Industry', 'Independence', 'Intimacy', 'Justice', 'Kindness', 'Integrity', 'Love', 'Mindfulness', 'Order', 'Open-mindedness', 'Patience', 'Persistence', 'Pleasure', 'Power', 'Reciprocity', 'Respect', 'Responsibility', 'Romance', 'Safety', 'Self-awareness', 'Self-control', 'Sensuality', 'Sexuality', 'Spirituality', 'Skillfulness', 'Supportiveness', 'Trust'];

    var renderValues = [];

    for (let i = 0; i < valuesArray.length; i++) {
      let nameId = 'values' + valuesArray[i];
      renderValues.push(
        <label htmlFor={nameId}>
          <input type='checkbox' id={nameId} name={nameId} value={valuesArray[i]} onClick={this.checkLimit}>
          </input>
          {valuesArray[i]}
        </label>
      );
    }

    return (
      <div>
        <form id='new-user-form'>
          <label htmlFor='newUserName'>
            Enter your name:
            <input id='newUserName' type='text' className='text-box' value={this.state.name} onChange={this.changeValue}></input>
          </label>
          <div>
            <p>Pick Your 6 Core Values</p>
            <div id='values-grid'>
              {renderValues}
            </div>
          </div>
          <div>

              Upload a profile picture
              <input type='file' accept='image/*' name='avatar' ref={this.fileInput} onChange={() => {console.log(this.fileInput.current.files[0])}}/>
          </div>
          <button className='add-task-btn' onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }

}

export default newProfileModal;