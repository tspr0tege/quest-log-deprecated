import React from 'react';

const dia = String.fromCharCode(9830);

var Profile = ( {userdata} ) => {
  var motivs = '';
  for (var i = 0; i < userdata.values.length; i++) {
    motivs += userdata.values[i];
    if (i < userdata.values.length - 1) {
      motivs += ` ${dia} `;
    }
  }

  return(
    <div id="profile">
      <div id="profile-photo">
        <img src={userdata.image}></img>
      </div>
      <h3>Name: <span>{userdata.name}</span></h3><br/>
      <h3>Values/Motivations:</h3><br/>
      <p>{motivs}</p><br/>
      <h3>Current Level:</h3>
      <p className='level'>{userdata.level}</p><br/>
      <p>More stuff...</p>
      <div className="break"></div>
    </div>
  );
}

export default Profile;