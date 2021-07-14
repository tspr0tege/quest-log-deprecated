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
      <div className="name-photo">
        <img id="profile-photo" src={userdata.image}></img>
        
        <div>
          <h3>Name:</h3>
          <p>{userdata.name}</p><br/>
        </div>
      </div>
      <div className="break"></div>
      <h3>Values/Motivations:</h3>
      <p>{motivs}</p><br/>
      <h3>Current Level:</h3>
      <p><span id='level'>{userdata.level}</span></p><br/>
    </div>
  );
}

export default Profile;