import React from 'react';

import MainToDo from './MainToDo.jsx';
import HabitList from './HabitList.jsx';
import Profile from './Profile.jsx';
import AddHabit from './AddHabit.jsx'

const root = document.documentElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Create a new App', 'Show it off', 'Be a boss'],
      habits: ['Habit 1', 'Habit2', 'Habit3', 'MMA'],
      userdata: {
        name: 'Squall',
        values: ['Fun', 'Integrity', 'Growth', 'Love', 'Freedom'],
        image: '/dummydata/Squall.jpg',
        level: 1
      },
      expBar: 0
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.updateExpBar = this.updateExpBar.bind(this);
    this.addNewHabit = this. addNewHabit.bind(this);
    this.levelUp = this.levelUp.bind(this);
  }

  addNewTask (newTask) {
    this.state.todos.push(newTask);
    this.setState({});
  }

  addNewHabit (newHabit) {
    this.state.habits.push(newHabit);
    this.setState({});
  }

  completeTask () {
    if (this.state.todos.length < 1) { return; }
    this.setState({
      todos: this.state.todos.slice(1)
    });
    this.updateExpBar(20);
  }

  levelUp () {
    root.style.setProperty('--expBar', `0`);
    this.setState({
      expBar: 0,
      userdata: {...this.state.userdata,
                 level: this.state.userdata.level + 1}
    });
  }

  updateExpBar (pts) {
    // let fill = this.state.expBar + pts;
    if (this.state.expBar + pts >= 100) {
      return this.levelUp();
    }
    root.style.setProperty('--expBar', `${this.state.expBar + pts}%`);
    this.setState({
      expBar: this.state.expBar + pts
    });
  }

  render () {
    return (
      <div id="container">

        {/* <h1>Quest Log</h1> */}
        <header></header>
        <nav>
          <div className="nav-btn"></div>
          <div className="nav-btn"></div>
          <div className="nav-btn"></div>
          <div id="login-btn">Login</div>
        </nav>
        <div id="main-field">
          <div id="to-do" className="main-module">
            <h2>Character Page</h2>
            <div id="user-hud">
              <Profile userdata={this.state.userdata}/>
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
}

export default App;