import React, {useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; Chart.register(CategoryScale)
import { useSelector, useDispatch } from 'react-redux';
import './GraphPage.css';

function GraphPage() {
    // Define dispatch so we can dispatch the call and payload data of the info we want to edit to our fetchOneResult saga in result.saga.js
  const dispatch = useDispatch()
    // useEffect allows us to dispatch a call with type and send the payload data for a particular submission
    // we want to use the GET route to our fetchResult saga in result.saga.js
    useEffect(() => {
      dispatch({ type: 'FETCH_RESULT'})
  }, []);
    // Grab our reducer from result.reducer.js so we can get the data from db
  const results = useSelector(store => store.resultReducer);
    // Create an empty array called newLabel
    // Create a function called getLabel
    // So we can loop through the results reducer
    // and add the date value to the newLabel array
    // This is because we want to capture the date in each submission
    // And use this to update the x-axis on the graph
  let newLabel = [];
  function getLabel() {
    for(let i = 0; i < results.length; i++ ){
      newLabel.push(results[i].date)
    }
    return newLabel
  }
  // Create an empty array called newTotal
  // Create a function called getTotal
  // So we can loop through the results reducer
  // and for each object inside of the reducer,
  // We access each property and add the number for each category
  // and push that total into the newTotal array
  // This will help us plot the total for each submission on the y-axis
  let newTotal = [];
  function getTotal(){
    for(let i = 0; i < results.length; i++){
      newTotal.push(results[i].physical_activity + results[i].diet + results[i].sleep + results[i].mood)
  }
  return newTotal;
  }
  // Create an empty array called newPhysicalExercise
  // Create a function called getPhysicalExercise
  // So we can loop through the results reducer
  // and for each object inside of the reducer,
  // We access each physical_activity property,
  // and push that number into the newPhysicalExercise array
  // This will help us plot the exercise data for each submission on the y-axis
  // HEADS UP: I used newPhysicalExercise and exercise and related exercise terms interchangably as the project evolved
  // so all these related exercise terms functionally do the same thing.
  let newPhysicalExercise = [];
  function getPhysicalExercise(){
    for(let i = 0; i < results.length; i++){
      newPhysicalExercise.push(results[i].physical_activity)
  }
  return newPhysicalExercise;
  }
  // Create an empty array called newDiet
  // Create a function called getDiet
  // So we can loop through the results reducer
  // and for each object inside of the reducer,
  // We access each diet property,
  // and push that number into the newDiet array
  // This will help us plot the diet data for each submission on the y-axis
  let newDiet = [];
  function getDiet(){
    for(let i = 0; i < results.length; i++){
      newDiet.push(results[i].diet)
  }
  return newDiet;
  }
  // Create an empty array called newSleep
  // Create a function called getSleep
  // So we can loop through the results reducer
  // and for each object inside of the reducer,
  // We access each sleep property,
  // and push that number into the newSleep array
  // This will help us plot the sleep data for each submission on the y-axis
  let newSleep = [];
  function getSleep(){
    for(let i = 0; i < results.length; i++){
      newSleep.push(results[i].sleep)
  }
  return newSleep;
  }
  // Create an empty array called newMood
  // Create a function called getSleep
  // So we can loop through the results reducer
  // and for each object inside of the reducer,
  // We access each mood property,
  // and push that number into the newMood array
  // This will help us plot the mood data for each submission on the y-axis
  let newMood = [];
  function getMood(){
    for(let i = 0; i < results.length; i++){
      newMood.push(results[i].mood)
  }
  return newMood;
  }
// Invoke the functions so we can use them to help us update the graph based on a submission/edit/etc.
  getLabel();
  getTotal();
  getPhysicalExercise();
  getDiet();
  getSleep();
  getMood();
  // This is how we create the graph for "Total"
  // It is an object with labels acting as the x axis
  // and datasets acting as the y-axis
  // So I used the newLabel and newTotal arrays from above
  // to help update the graph
  const Total = {
    labels: newLabel,
    datasets: [
      {
        label: 'Total',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#1EB48D',
        borderColor: '#1D7760',
        borderWidth: 2,
        data: newTotal
      }
    ]
  }
  // I also discovered that we can put as many graphs within a constant called All
  // Each object within this large All object correspond to each category that was submitted
  // This helps plot the data on the same grpah so users can see their scores for all categories in one place
  const All = {
    labels: newLabel,
    datasets: [
      {
        label: 'Exercise',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#4A9CFF',
        borderColor: '#1B4476',
        borderWidth: 2,
        data: newPhysicalExercise
      },
      {
        label: 'Diet',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#E9BA34',
        borderColor: '#B2870C',
        borderWidth: 2,
        data: newDiet
      },
      {
        label: 'Sleep',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#CE2E2E',
        borderColor: '#A62424',
        borderWidth: 2,
        data: newSleep
      },
      {
        label: 'Mood',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#AB00F5',
        borderColor: '#9626C6',
        borderWidth: 2,
        data: newMood
      }
    ]
  }


  return (
    <div className="container">
      <h1>Your Scores!</h1>
      {/* the Line tag is how we actually render the graph on the page */}
      {/* we use data={Total} to grab the defined Total graph from above which has all the corresponding data*/}
      {/* responsive true, maintainAspectRatio and className="graph" referenced in GraphPage.css is used in combination to make sure the graph stays fixed in one size when viewing the page for user readability */}
      {/* I used plugins and scales to help me format the graph for user readability */}
      {/* I repeated this for the rest of the graphs in a seperate Line tag below */}
<Line className="graph"
          data={Total}
          options={{
            title:{
              display:true,
              text:'Total',
              fontSize:20,
              responsive: true,
              maintainAspectRatio: false,
            },
            legend:{
              display:true,
              position:'right'
            },
            plugins: {
              legend: {
                  labels: {
                      font: {
                          size: 23
                      }
                  }
              }
          },
          scales: {
            y: {
              ticks: {
                  font: {
                    size: 17
              }
          }
          },
          x: {
            ticks: {
                font: {
                  size: 17
            }
        }
        }
        }
          }}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Line className="graph"
          data={All}
          options={{
            title:{
              display:true,
              text:'AllGraphs',
              fontSize:20,
              responsive: true,
              maintainAspectRatio: false
            },
            legend:{
              display:true,
              position:'right'
            },
            plugins: {
              legend: {
                  labels: {
                      font: {
                          size: 23
                      }
                  }
              }
          },
          scales: {
            y: {
              ticks: {
                  font: {
                    size: 17
              }
          }
          },
          x: {
            ticks: {
                font: {
                  size: 17
            }
        }
        }
        }
          }}
        />
      </div>
  );
}

export default GraphPage;
