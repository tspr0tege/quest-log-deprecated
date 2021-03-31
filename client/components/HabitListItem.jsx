import React from 'react';

const HabitListItem = ( {habit, getExp} ) => (
  <div className="habit-tab clickable" onClick={() => { getExp(1); }}>
    {habit}
  </div>
)

export default HabitListItem;