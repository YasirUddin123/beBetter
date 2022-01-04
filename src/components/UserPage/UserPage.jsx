import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  // define history to make sure we can click to next page
  const history = useHistory();

   // route to survey page
   const onBeginSurvey = () => {
    history.push('/survey');
}

  return (
    <div className="container">
      <h1>Daily Wellness Tracker</h1>
      <h3>Welcome, {user.username}!</h3>
      <p>Today's Date</p>
      {/* <p>Your ID is: {user.id}</p> */}

      <h1>Begin Your Survey for the Day!</h1>
      <LogOutButton className="btn" />
      <button onClick={onBeginSurvey}>Begin Survey</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
