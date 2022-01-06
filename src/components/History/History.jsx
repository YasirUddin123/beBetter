import React from 'react';
import {useSelector} from 'react-redux';


function History() {
  // grab reducer from the redux store via useSelector
  const physicalActivity = useSelector(store => store.physicalActivityResults);
  // const diet = useSelector(store => store.diet);

  return (
    <div className="container">
      <p>Physical Results:</p>
      <p>
        {physicalActivity.map(results => {
            return (
                <li>{results.physical_activity}
                <br></br>
                {results.diet}
                <br></br>
                {results.sleep}
                <br></br>
                {results.mood}
                <br></br>
                {results.comments}
                <br></br>
                <button>DELETE</button>
                <br></br>
                <button>EDIT</button>
                </li>
            )
        })}
    </p>
    </div>
  );

}

export default History;
