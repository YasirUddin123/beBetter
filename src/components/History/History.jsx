import React from 'react';
import {useSelector} from 'react-redux';


function History() {
  // grab reducer from the redux store via useSelector
  const physicalActivity = useSelector(store => store.physicalActivityResults);

  return (
    <div className="container">
      <p>Physical Results:</p>
      <p>
        {physicalActivity.map(results => {
            return (
                <li>{results.physical_activity}</li>
            )
        })}
    </p>
    </div>
  );
}

export default History;
