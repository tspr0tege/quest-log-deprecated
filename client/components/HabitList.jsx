import React from 'react';

import HabitListItem from './HabitListItem.jsx';


const HabitList = ( {habits, getExp} ) => {
  let fakey = 1100;
  let renderList = [];

  for (let i = 0; i < habits.length; i++) {
    renderList.push(<HabitListItem key={fakey+i} habit={habits[i]} getExp={getExp}/>)
    if ( i + 1 < habits.length) {
      renderList.push(<hr/>);
    }
  }

  return (
    <div id="habit-list">
      {
        renderList
        // habits.map((habit) => {
        //   fakey++;
        //   return(
        //     <HabitListItem key={fakey} habit={habit} getExp={getExp}/>
        //   )
        // })
      }
    </div>
  )
}

export default HabitList;