import React from 'react';

import HabitListItem from './HabitListItem.jsx';

let fakey = 1100;

const HabitList = ( {habits, getExp} ) => (
  <div id="habit-list">
    {habits.map((habit) => {
      fakey++;
      return(
        <HabitListItem key={fakey} habit={habit} getExp={getExp}/>
      )
    })}
  </div>
)

export default HabitList;