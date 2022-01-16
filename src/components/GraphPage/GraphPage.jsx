import React, {useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; Chart.register(CategoryScale)
import { useSelector, useDispatch } from 'react-redux';
import './GraphPage.css';

function GraphPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'FETCH_RESULT'})
}, []);

const results = useSelector(store => store.resultReducer);

let newLabel = [];
function getLabel() {
  for(let i = 0; i < results.length; i++ ){
    newLabel.push(results[i].date)
  }
  return newLabel
}

let newTotal = [];
function getTotal(){
  for(let i = 0; i < results.length; i++){
    newTotal.push(results[i].physical_activity + results[i].diet + results[i].sleep + results[i].mood)
}
return newTotal;
}

let newPhysicalExercise = [];
function getPhysicalExercise(){
  for(let i = 0; i < results.length; i++){
    newPhysicalExercise.push(results[i].physical_activity)
}
return newPhysicalExercise;
}

let newDiet = [];
function getDiet(){
  for(let i = 0; i < results.length; i++){
    newDiet.push(results[i].diet)
}
return newDiet;
}

let newSleep = [];
function getSleep(){
  for(let i = 0; i < results.length; i++){
    newSleep.push(results[i].sleep)
}
return newSleep;
}

let newMood = [];
function getMood(){
  for(let i = 0; i < results.length; i++){
    newMood.push(results[i].mood)
}
return newMood;
}

getLabel();
getTotal();
getPhysicalExercise();
getDiet();
getSleep();
getMood();
console.log(newDiet);
console.log(newLabel)
console.log(results);
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
                      // This more specific font property overrides the global property
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
                      // This more specific font property overrides the global property
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
