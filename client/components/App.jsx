import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div id="container">

        <h1>Quest Log</h1>
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
            <div id="profile">
              <div id="profile-photo"></div>
              <h3>Name</h3>
              <div id="exp-bar"><span id="exp-fill"></span></div>
            </div>
            <div id="quest-log-hud"></div>
          </div>
          <div id="habit-grind" className="main-module">
            <h2>Level Grind</h2>
            <div id="habit-list">
              <div className="habit-tab">Habit 1</div>
              <div className="habit-tab">Habit 2</div>
              <div className="habit-tab">Habit 3</div>
              <div className="habit-tab">MMA</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;