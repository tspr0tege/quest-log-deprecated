import React from 'react';

import MainToDo from './MainToDo.jsx';
import HabitList from './HabitList.jsx';

const root = document.documentElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Create a new App', 'Show it off', 'Be a boss'],
      habits: ['Habit 1', 'Habit2', 'Habit3', 'MMA'],
      userdata: {
        username: 'Squall',
        values: ['Fun', 'Integrity', 'Growth', 'Love', 'Freedom']
      },
      expBar: 10
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.updateExpBar = this.updateExpBar.bind(this);
  }

  addNewTask (newTask) {
    this.state.todos.push(newTask);
    this.setState({});
  }

  completeTask () {
    if (this.state.todos.length < 1) { return; }
    this.setState({
      todos: this.state.todos.slice(1)
    });
    this.updateExpBar(5);
  }

  updateExpBar (pts) {
    // let fill = this.state.expBar + pts;
    root.style.setProperty('--expBar', `${this.state.expBar + pts}%`)
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
              <div id="profile">
                <div id="profile-photo"></div>
                <h3>Name</h3>
                <p>Values/Motivations</p>
                <p>More stuff</p>
                <div className="break"></div>
              </div>
              <div>
                <h3>EXP toward next level:</h3>
                <div id="exp-bar"><span id="exp-fill"></span></div>
              </div>
            </div>
            <MainToDo todos={this.state.todos} addNewTask={this.addNewTask} completeTask={this.completeTask} />
          </div>
          <div id="habit-grind" className="main-module">
            <h2>Level Grind</h2>
            <HabitList habits={this.state.habits} getExp={this.updateExpBar}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;