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
                <p>{results.physical_activity} {results.diet} {results.sleep} {results.mood} {results.comments} <button>DELETE</button> <button>EDIT</button>
                </p>
            )
        })}
    </p>
    </div>
  );

}

export default History;
