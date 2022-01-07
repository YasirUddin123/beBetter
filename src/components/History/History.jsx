import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useParams} from 'react-router-dom';


function History() {

  // define dispatch in order to use it
  const dispatch = useDispatch();

  // define history in order to route to page
  const history = useHistory();

  // define params
  const params = useParams();

  // grab reducer from the redux store via useSelector
  const results = useSelector(store => store.resultReducer);
  // const diet = useSelector(store => store.diet);

  const handleDeletebtn = (id) => {

    dispatch({
        type: 'DELETE_RESULT',
        payload: id
    })
};

const handleEditbtn = () => {
  history.push('/edit_results');
};

  return (
    <div className="container">
      <p>History:</p>
      <p>
        {results.map(result => {
            return (
                <p>{result.physical_activity} {result.diet} {result.sleep} {result.mood} {result.comments} <button onClick={handleEditbtn}>EDIT</button> <button onClick={() =>handleDeletebtn(result.id)}>DELETE</button>
                </p>
            )
        })}
    </p>
    </div>
  );
}

export default History;
