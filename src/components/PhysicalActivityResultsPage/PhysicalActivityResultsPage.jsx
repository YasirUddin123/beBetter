// import React from 'react';
// import {useHistory} from 'react-router-dom';
// import {useSelector} from 'react-redux';

// // This is one of our simplest components
// // It doesn't have local state
// // It doesn't dispatch any redux actions or display any part of redux state
// // or even care what the redux state is

// function PhysicalActivityResultsPage() {
//     const history = useHistory();

//     // grab reducer from the redux store via useSelector
//     const physicalActivity = useSelector(store => store.physicalActivityResults);

//     // most recent answer
//     // const recentAnswer = {
//     //     physicalActivity: `${physicalActivity}`
//     // }

//     // route to diet results page
//     const onSeeDietResults = () => {
//         history.push('/diet_results');
//     }

// return (
//     <div className="container">
//     {/* <p>Physical Activity Results: {physicalActivity} </p> */}
//     <p>Physical Activity Results</p>
//     {/* <p>
//         {physicalActivity.map((results,i) => {
//             console.log(i);
//             console.log(results);
//             console.log(physicalActivity);
//             console.log(physicalActivity[physicalActivity.length-1]);
//             console.log(physicalActivity[physicalActivity.length-1].physical_activity);
//             console.log(results);
//             return (
//                 <li>{physicalActivity[physicalActivity.length-1].physical_activity}</li>
//             )
//         })}
//     </p> */}
//     <p>{physicalActivity.map(results => {
//             return (
//                 <li>{results.physical_activity}</li>
//             )
//         })}
//     </p>

//     <button onClick={onSeeDietResults}>Next</button>

//     </div>
// );
// }

// export default PhysicalActivityResultsPage;
