import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {Button} from '@mui/material';

function Survey() {
    // make sure to define a state to collect feedback
    const [physicalActivityInput, setPhysicalActivityInput] = useState('');
    const [dietInput, setDietInput] = useState('');
    const [sleepInput, setSleepInput] = useState('');
    const [moodInput, setMoodInput] = useState('');
    const [commentsInput, setcommentsInput] = useState('');

    // make sure define dispatch to send and store data to our reducer
    const dispatch = useDispatch();

    // define history to make sure we can click to next page
    // const history = useHistory();

    // grab reducer from the redux store via useSelector
    // const results = useSelector(store => store.resultReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_RESULT'})
    }, []);

    // route to physical activity results page
    const onSubmit = () => {
        if(physicalActivityInput === ''){
            return alert('You forgot to answer!')
        } else {
            dispatch({
                type: 'ADD_RESULT',
                payload: {physical_activity: physicalActivityInput, diet: dietInput, sleep: sleepInput, mood: moodInput, comments: commentsInput}
            })
            // history.push('/physical_activity_results');
        }
    }

return (
    <div className="container">

    <h1>Survey</h1>
    <h4>On a scale from 1 to 10, how was your exercise today?</h4>
    <input value={physicalActivityInput} onChange={(event) => {setPhysicalActivityInput(event.target.value)}} type="number"/>


    <h4>On a scale from 1 to 10, how was your diet today?</h4>
    <input value={dietInput} onChange={(event) => {setDietInput(event.target.value)}} type="number"/>

    <h4>On a scale from 1 to 10, how was your sleep last night?</h4>
    <input value={sleepInput} onChange={(event) => {setSleepInput(event.target.value)}} type="number"/>

    <h4>On a scale from 1 to 10, how was your mood today?</h4>
    <input value={moodInput} onChange={(event) => {setMoodInput(event.target.value)}} type="number"/>

    <h4>Anything on your mind?</h4>
    <input value={commentsInput} onChange={(event) => {setcommentsInput(event.target.value)}} type="text"/>
    <Button color="success" variant="outlined" onClick={onSubmit}>Submit</Button>


    </div>
);
}

export default Survey;
