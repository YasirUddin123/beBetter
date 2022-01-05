import React from 'react';
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

  // Define the current date with new Date()
  const myCurrentDate = new Date()
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const day = weekday[myCurrentDate.getDay()];
  const date = myCurrentDate.getDate();
  const monthNumber = myCurrentDate.getMonth() + 1;
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthName = monthNames[monthNumber];

  const year = myCurrentDate.getFullYear();

  return (
    <div className="container">
      <h1>Daily Wellness Tracker</h1>
      <h3>Welcome, {user.username}!</h3>
      <p>Today's Date: {day} {monthName} {date}, {year}</p>
      {/* <p>Your ID is: {user.id}</p> */}
      <h1>Begin Your Survey for the Day!</h1>
      <button onClick={onBeginSurvey}>Begin Survey</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
