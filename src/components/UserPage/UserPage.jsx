import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h1>Daily Wellness Tracker</h1>
      <h3>Welcome, {user.username}!</h3>
      <p>Today's Date</p>
      {/* <p>Your ID is: {user.id}</p> */}

      <h1>Recorded Entries</h1>
      <LogOutButton className="btn" />

      <h1>Let's Get Started!</h1>
      <LogOutButton className="btn" />

      <h1>Graph</h1>
      <LogOutButton className="btn" />

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
