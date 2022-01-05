import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

function Survey() {
    //make sure to define a state to collect feedback
    const [physicalActivityInput, setPhysicalActivityInput] = useState('');

    // make sure define dispatch to send and store data to our reducer
    const dispatch = useDispatch();

    // define history to make sure we can click to next page
    const history = useHistory();

    // route to physical activity results page
    const onSeePhysicalResults = () => {
        if(physicalActivityInput === ''){
            return alert('You forgot to answer!')
        } else {
            dispatch({
                type: 'ADD_PHYSICAL_ACTIVITY',
                payload: physicalActivityInput
            })
            history.push('/physical_activity_results');
        }
    }

return (
    <div className="container">
    <h1>Survey</h1>
    <input
        value={physicalActivityInput}
        onChange={(event) => {setPhysicalActivityInput(event.target.value)}}
        type="number"
    />
    <button onClick={onSeePhysicalResults}>See Your Results!</button>
    </div>
);
}

export default Survey;
