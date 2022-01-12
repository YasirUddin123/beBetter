import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory } from 'react-router-dom';
import {useState} from 'react';
import './Survey.css'
import {Button} from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';


function Survey() {
    // make sure to define a state to collect feedback
    const [physicalActivityInput, setPhysicalActivityInput] = useState('');
    const [dietInput, setDietInput] = useState('');
    const [sleepInput, setSleepInput] = useState('');
    const [moodInput, setMoodInput] = useState('');
    const [commentsInput, setcommentsInput] = useState('');
    const [quote, setQuote] = useState([]);

    // make sure define dispatch to send and store data to our reducer
    const dispatch = useDispatch();

    // define history to make sure we can click to next pagef
    const history = useHistory();

    // grab reducer from the redux store via useSelector
    // const results = useSelector(store => store.resultReducer);

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_RESULT'})
    // }, []);

    useEffect(() => {
        axios({
        method: 'GET',
        url: '/quotes'
        })
        .then((res) => {
        setQuote(res.data);
        })
    }, [])

    // console.log(quote.q);
    // console.log(quote.a);


    // route to Exercise results page
    const onSubmit = () => {
        if(physicalActivityInput === ''){
            Swal.fire({
                title: 'Error!',
                text: `You forgot to fill out a response for exercise!`,
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (physicalActivityInput <= 5 && physicalActivityInput >= 1 ){
            dispatch({
                type: 'ADD_RESULT',
                payload: {physical_activity: physicalActivityInput, diet: dietInput, sleep: sleepInput, mood: moodInput, comments: commentsInput}
            })
            Swal.fire({
                title: `"${quote.q}"   - by ${quote.a}`,
                icon: 'success',
                confirmButtonText: 'Exit',
                confirmButtonColor: '#286F98'
            })
            history.push('/history');
        } else if (physicalActivityInput >= 11 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your Exercise score is too high!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (physicalActivityInput <= 0 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your Exercise score is too low!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (dietInput === ''){
            Swal.fire({
                title: 'Error!',
                text: 'You forgot to fill out a response for diet!',
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (dietInput <= 5 && dietInput >= 1 ){
            dispatch({
                type: 'ADD_RESULT',
                payload: {physical_activity: physicalActivityInput, diet: dietInput, sleep: sleepInput, mood: moodInput, comments: commentsInput}
            })
            Swal.fire({
                title: `"${quote.q}"   - by ${quote.a}`,
                icon: 'success',
                confirmButtonText: 'Exit',
                confirmButtonColor: '#286F98'
            })
            history.push('/history');
        } else if (dietInput >= 11 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your Diet score is too high!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (dietInput <= 0 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your Diet score is too low!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (sleepInput === ''){
            Swal.fire({
                title: 'Error!',
                text: 'You forgot to fill out a response for sleep!',
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (sleepInput <= 5 && sleepInput >= 1 ){
            dispatch({
                type: 'ADD_RESULT',
                payload: {physical_activity: physicalActivityInput, diet: dietInput, sleep: sleepInput, mood: moodInput, comments: commentsInput}
            })
            Swal.fire({
                title: `"${quote.q}"   - by ${quote.a}`,
                icon: 'success',
                confirmButtonText: 'Exit',
                confirmButtonColor: '#286F98'
            })
            history.push('/history');
        } else if (sleepInput >= 11 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your Sleep score is too high!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (sleepInput <= 0 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your Sleep score is too low!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (moodInput === ''){
            Swal.fire({
                title: 'Error!',
                text: 'You forgot to fill out a response for mood!',
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (moodInput <= 5 && moodInput >= 1 ){
            dispatch({
                type: 'ADD_RESULT',
                payload: {physical_activity: physicalActivityInput, diet: dietInput, sleep: sleepInput, mood: moodInput, comments: commentsInput}
            })
            Swal.fire({
                title: `"${quote.q}"   - by ${quote.a}`,
                icon: 'success',
                confirmButtonText: 'Exit',
                confirmButtonColor: '#286F98'
            })
            history.push('/history');
        }else if (moodInput >= 11 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your Mood score is too high!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        }  else if (moodInput <= 0 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your Mood score is too low!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (commentsInput === ''){
            Swal.fire({
                title: 'Error!',
                text: 'You forgot to fill out your thoughts!',
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else {
            dispatch({
                type: 'ADD_RESULT',
                payload: {physical_activity: physicalActivityInput, diet: dietInput, sleep: sleepInput, mood: moodInput, comments: commentsInput}
            })
            Swal.fire({
                title: `You're done for the day!`,
                icon: 'success',
                confirmButtonText: 'Exit',
                confirmButtonColor: '#286F98'
            })
            history.push('/history');
        }
    }

return (
    // <div className="container">
    <div className="survey">

    <h1>Survey</h1>
    <h4>On a scale from 1 to 10, how was your exercise today?</h4>
    <input className="input" placeholder="Type a number" value={physicalActivityInput} onChange={(event) => {setPhysicalActivityInput(event.target.value)}} type="number"/>


    <h4>On a scale from 1 to 10, how was your diet today?</h4>
    <input className="input" placeholder="Type a number" value={dietInput} onChange={(event) => {setDietInput(event.target.value)}} type="number"/>

    <h4>On a scale from 1 to 10, how was your sleep last night?</h4>
    <input className="input" placeholder="Type a number" value={sleepInput} onChange={(event) => {setSleepInput(event.target.value)}} type="number"/>

    <h4>On a scale from 1 to 10, how was your mood today?</h4>
    <input className="input" placeholder="Type a number" value={moodInput} onChange={(event) => {setMoodInput(event.target.value)}} type="number"/>

    <h4>Anything on your mind?</h4>
    <input className="input" placeholder="Type your thoughts" value={commentsInput} onChange={(event) => {setcommentsInput(event.target.value)}} type="text"/>
    <br>
    </br>
    <br />
    <Button variant="contained"  style={{ backgroundColor: '#286F98', color: 'white' }} onClick={onSubmit}>Submit</Button>
    {/* <p>{quote}</p> */}
    </div>
);
}

export default Survey;
