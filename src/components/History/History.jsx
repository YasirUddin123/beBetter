import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams} from 'react-router-dom';


function History() {

  // define dispatch in order to use it
  const dispatch = useDispatch();

  // define params
  const params = useParams();

  // grab reducer from the redux store via useSelector
  const results = useSelector(store => store.resultReducer);
  // const diet = useSelector(store => store.diet);

  const handleDeletebtn = () => {
    dispatch({
        type: 'DELETE_RESULT',
        payload: params.id
    })
};

  return (
    <div className="container">
      <p>History:</p>
      <p>
        {results.map(result => {
            return (
                <p>{result.physical_activity} {result.diet} {result.sleep} {result.mood} {result.comments} <button>EDIT</button> <button onClick={handleDeletebtn}>DELETE</button>
                </p>
            )
        })}
    </p>
    </div>
  );

}

export default History;
