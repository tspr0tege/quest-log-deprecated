import React from 'react';
import Modal from 'react-modal';

import MainToDo from './MainToDo.jsx';
import HabitList from './HabitList.jsx';
import Profile from './Profile.jsx';
import AddHabit from './AddHabit.jsx';
import ToDosModal from './ToDosModal.jsx';
import NewProfileModal from './NewProfileModal.jsx';

// import userdata from '../dummydata/userdata';

const root = document.documentElement;

Modal.setAppElement(document.getElementById('App'));

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      level: 1,
      values: [],
      image: 'https://i.ibb.co/frdRpGb/lhlabx3p9cb21.jpg',
      todos: [],
      habits: [],
      showModal: false,
      newUserModal: false,
      expBar: 0
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.updateExpBar = this.updateExpBar.bind(this);
    this.addNewHabit = this. addNewHabit.bind(this);
    this.levelUp = this.levelUp.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.prioritizeTask = this.prioritizeTask.bind(this);
    this.save = this.save.bind(this);
    this.toggleSignupModal = this.toggleSignupModal.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
  }


  save () {
    window.localStorage.setItem('userdata', JSON.stringify(
      {
        name: this.state.name,
        level: this.state.level,
        values: this.state.values,
        image: this.state.image,
        todos: this.state.todos,
        habits: this.state.habits,
        expBar: this.state.expBar
      }
    ));
  }

  createNewUser (name, values, image) {
    this.setState({
      name,
      values,
      image,
      newUserModal: false
    }, this.save);
  }

  addNewTask (newTask) {
    this.state.todos.push(newTask);
    this.setState({}, this.save);
  }

  deleteTask (e) {
    // console.log(e.target.parentNode.parentNode.dataset.index);
    let index = e.target.parentNode.parentNode.dataset.index;
    this.state.todos.splice(index, 1);
    this.setState({}, this.save);
  }

  prioritizeTask (e) {toggleSignup
    let index = e.target.parentNode.parentNode.dataset.index;
    var newFocus = this.state.todos.splice(index, 1);
    this.state.todos.unshift(newFocus);
    this.setState({}, this.save);
  }

  addNewHabit (newHabit) {
    this.state.habits.push(newHabit);
    this.setState({}, this.save);
  }

  completeTask () {
    if (this.state.todos.length < 1) { return; }
    this.state.todos = this.state.todos.slice(1);
    this.setState({});
    this.updateExpBar(20);
  }

  levelUp () {
    root.style.setProperty('--expBar', `0`);
    this.setState({
      expBar: 0,
      level: this.state.level + 1
    }, this.save);
  }

  updateExpBar (pts) {
    // let fill = this.state.expBar + pts;
    if (this.state.expBar + pts >= 100) {
      return this.levelUp();
    }
    root.style.setProperty('--expBar', `${this.state.expBar + pts}%`);
    this.setState({
      expBar: this.state.expBar + pts
    }, this.save);
  }

  toggleModal () {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  toggleSignupModal () {
    this.setState({
      newUserModal: !this.state.newUserModal
    });
  }

  render () {
    return (
      <div id="container">

        {/* <h1>Quest Log</h1> */}
        <header></header>
        <nav>
          <div className="nav-btn clickable" onClick={this.toggleModal}><i className="fas fa-list-alt"></i></div>
          <div className="nav-btn clickable"></div>
          <div className="nav-btn clickable"></div>
          <div id="login-btn">Login</div>
        </nav>
        <div id="main-field">
        <Modal isOpen={this.state.newUserModal} style={customStyles}>
          <NewProfileModal createNewUser={this.createNewUser}/>
          <button className='add-task-btn' onClick={this.toggleSignupModal}>Close Signup</button>
        </Modal>
        <Modal isOpen={this.state.showModal} style={customStyles}>
           {/* contentLabel="Minimal Modal Example" */}
           <ToDosModal todos={this.state.todos} deleteTask={this.deleteTask} prioritizeTask={this.prioritizeTask}/>
          <button className='add-task-btn' onClick={this.toggleModal}>Close Modal</button>
        </Modal>
          <div id="to-do" className="main-module">
            <h2>Character Page</h2>
            <div id="user-hud">
              <Profile userdata={{
                values: this.state.values,
                image: this.state.image,
                name: this.state.name,
                level: this.state.level
                }}/>
              <div>
                <h3>EXP toward next level:</h3>
                <div id="exp-bar"><span id="exp-fill"></span></div>
              </div>
            </div>
            <MainToDo todos={this.state.todos} addNewTask={this.addNewTask} completeTask={this.completeTask} />
          </div>
          <div id="habit-grind" className="main-module">
            <div className='light-border'>
              <h2>Level Grind</h2>
              <AddHabit addNewHabit={this.addNewHabit}/>
            </div>
            <HabitList habits={this.state.habits} getExp={this.updateExpBar}/>
          </div>
        </div>

      </div>
    );
  }

  componentDidMount () {
    if (!window.localStorage.getItem('userdata')) {
      return this.toggleSignupModal();
    }

    let userdata = JSON.parse(window.localStorage.userdata);

    var userdataKeys = Object.keys(userdata);
    console.log(userdataKeys);

    for (var i = 0; i < userdataKeys.length; i++) {
      this.state[userdataKeys[i]] = userdata[userdataKeys[i]];
    }
    root.style.setProperty('--expBar', `${this.state.expBar}%`);
    this.setState({});
  }

}

export default App;