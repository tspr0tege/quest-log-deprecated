import React from 'react';

const HabitListItem = ( {habit, getExp} ) => (
  <div className="habit-tab clickable" onClick={() => { getExp(1); }}>
    <p>{habit}</p>
    <p>+1</p>
  </div>
)

export default HabitListItem;