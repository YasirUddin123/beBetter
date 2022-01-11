import React, {useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; Chart.register(CategoryScale)
import { useSelector, useDispatch } from 'react-redux';

function GraphPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'FETCH_RESULT'})
}, []);

const results = useSelector(store => store.resultReducer);

let newDiet = [];
let newLabel = [];

function getDiet(){
  for(let i = 0; i < results.length; i++){
    newDiet.push(results[i].diet)
}
return newDiet;
}

function getLabel() {
  for(let i = 0; i < results.length; i++ ){
    newLabel.push(i)
  }
  return newLabel
}





// function getLabel(){
//   for(let i = 0; i < results.length; i++){
//     state.labels.push('label')
//   }
//   return newLabel;
// }

// function addDietData(chart, label, data) {
//   chart.data.labels.push(label);
//   chart.data.datasets.forEach((dataset) => {
//       dataset.data.push(data);
//   });
//   chart.update();
// }

// function addData(chart, label, data) {
//   chart.state.labels.push(label);
//   chart.state.datasets.forEach((dataset) => {
//       dataset.state.push(data);
//   });
//   chart.update();
// }

// chart.config.data.labels = newLabels // you can pass the new labels
// chart.update()


getDiet();
getLabel();
console.log(newDiet);
console.log(newLabel)
console.log(results);
  const state = {
    labels: newLabel,
    datasets: [
      {
        label: 'Your Diet Scores',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data:newDiet
      }
      // {
      //   label: 'My Scores',
      //   fill: false,
      //   lineTension: 0.5,
      //   backgroundColor: 'rgba(75,192,192,1)',
      //   borderColor: 'rgba(0,0,0,1)',
      //   borderWidth: 2,
      //   data: [50, 65, 75, 65, 70]
      // }

    ],
  }

  function addData(chart, labels, data) {
    chart.state.labels.push('new log');
    chart.state.datasets.forEach((dataset) => {
        dataset.data.push(newDiet[newDiet.length-1]);
    });
    state.update();
  }

  return (
    <div className="container">
      <p>Graph!</p>
<Line
          // data={results.map((result) => (
          //   {result, diet}
          // ))}
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
  );
}

export default GraphPage;
