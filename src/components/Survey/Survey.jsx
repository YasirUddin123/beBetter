import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory } from 'react-router-dom';
import {useState} from 'react';
import './Survey.css'
import {Button} from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


function Survey() {
    // Make sure to define a state to collect feedback
    const [physicalActivityInput, setPhysicalActivityInput] = useState('');
    const [dietInput, setDietInput] = useState('');
    const [sleepInput, setSleepInput] = useState('');
    const [moodInput, setMoodInput] = useState('');
    const [commentsInput, setcommentsInput] = useState('');
    const [dateInput, setDateInput] = useState(null)
    const [quote, setQuote] = useState([]);

    // Make sure define dispatch to send and store data to our reducer
    const dispatch = useDispatch();

    // Define history to make sure we can click to next pagef
    const history = useHistory();

    // Handles when a date is selected
    const handleChange = (event) => {
        setDateInput((event));
    };
    // Use axios in order to get a random quote from the Zen Quotes API from the server.js file
    useEffect(() => {
        axios({
        method: 'GET',
        url: '/quotes'
        })
        .then((res) => {
        setQuote(res.data);
        })
    }, [])

    // route to Edit Results page
    // I used if/else conditionals to send sweet alerts depending on the score that is submitted
    // These are based on if the score is too high, too low and
    // If the scores are in range,
    // The scores will provide a random Zen Quote on a sweet alert after the submission depending on a particular low score
    // or provide a successful sweet alert if a user provided high scores
    const onSubmit = () => {
        if(physicalActivityInput === '') {
            Swal.fire({
                title: 'Error!',
                text: `You forgot to fill out a response for exercise!`,
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (dietInput === '') {
            Swal.fire({
                title: 'Error!',
                text: `You forgot to fill out a response for diet!`,
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        }
        else if (sleepInput === '') {
            Swal.fire({
                title: 'Error!',
                text: `You forgot to fill out a response for sleep!`,
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (moodInput === '') {
            Swal.fire({
                title: 'Error!',
                text: `You forgot to fill out a response for mood!`,
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (commentsInput === '') {
            Swal.fire({
                title: 'Error!',
                text: `You forgot to fill out a response for your thoughts!`,
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        }else if (physicalActivityInput >= 11  ){
            Swal.fire({
                title: 'Error!',
                text: 'Your exercise score is too high!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if ( dietInput >=11 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your diet score is too high!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (sleepInput >=11 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your sleep score is too high!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if ( moodInput >=11 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your mood score is too high!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        }else if (physicalActivityInput <= 0 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your exercise score is too low!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if ( dietInput <= 0 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your diet score is too low!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        }else if ( sleepInput <= 0  ){
            Swal.fire({
                title: 'Error!',
                text: 'Your sleep score is too low!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        }else if ( moodInput <= 0 ){
            Swal.fire({
                title: 'Error!',
                text: 'Your mood score is too low!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else {

            if (physicalActivityInput <= 5 && physicalActivityInput >= 1 || dietInput <= 5 && dietInput >= 1 || sleepInput <= 5 && sleepInput >= 1 || moodInput <= 5 && moodInput >= 1  ) {
                dispatch({
                    type: 'ADD_RESULT',
                    payload: {physical_activity: physicalActivityInput, diet: dietInput, sleep: sleepInput, mood: moodInput, date: dateInput, comments: commentsInput}
                })
                Swal.fire({
                    title: `"${quote.q}"   - by ${quote.a}`,
                    icon: 'success',
                    confirmButtonText: 'Exit',
                    confirmButtonColor: '#286F98'
                })
                history.push('/history');
            } else {
                dispatch({
                    type: 'ADD_RESULT',
                    payload: {physical_activity: physicalActivityInput, diet: dietInput, sleep: sleepInput, mood: moodInput, date: dateInput, comments: commentsInput}
                })
                Swal.fire({
                    title: `Success!`,
                    icon: 'success',
                    confirmButtonText: 'Exit',
                    confirmButtonColor: '#286F98'
                })
                history.push('/history');
            }

        }
    }

return (
    <div className="survey">

    <h1>Survey</h1>

    {/* <input value={dateInput} onChange={(event) => {setDateInput(event.target.value)}} type="date"/> */}

    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Stack spacing={3}>
        <MobileDatePicker
        label="Select Today's Date"
        inputFormat="MM/dd/yyyy"
        value={dateInput}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
        sx={{ width: 10, color: 'success.main'}}
        />
    </Stack>
    </LocalizationProvider> */}

    <h4>On a scale from 1 to 10, how was your exercise today?</h4>
    {/* <input className="input" placeholder="Type a number" value={physicalActivityInput} onChange={(event) => {setPhysicalActivityInput(event.target.value)}} type="number"/> */}
    {/* Used MUI to style the text field  */}
    {/* This handles the state and the onClick function when a score is provided */}
    {/* This repeats for the rest of the items below */}
    <TextField id="outlined-basic" label="Type Your Score" variant="outlined" value={physicalActivityInput} onChange={(event) => {setPhysicalActivityInput(event.target.value)}} type="number" />

    <h4>On a scale from 1 to 10, how was your diet today?</h4>
    {/* <input className="input" placeholder="Type a number" value={dietInput} onChange={(event) => {setDietInput(event.target.value)}} type="number"/> */}
    <TextField id="outlined-basic" label="Type Your Score"variant="outlined" value={dietInput} onChange={(event) => {setDietInput(event.target.value)}} type="number" />

    <h4>On a scale from 1 to 10, how was your sleep last night?</h4>
    {/* <input className="input" placeholder="Type a number" value={sleepInput} onChange={(event) => {setSleepInput(event.target.value)}} type="number"/> */}
    <TextField id="outlined-basic" label="Type Your Score" variant="outlined" value={sleepInput} onChange={(event) => {setSleepInput(event.target.value)}} type="number" />

    <h4>On a scale from 1 to 10, how was your mood today?</h4>
    {/* <input className="input" placeholder="Type a number" value={moodInput} onChange={(event) => {setMoodInput(event.target.value)}} type="number"/> */}
    <TextField id="outlined-basic" label="Type Your Score" variant="outlined" value={moodInput} onChange={(event) => {setMoodInput(event.target.value)}} type="number" />

    <h4>Anything on your mind?</h4>
    {/* <input className="input" placeholder="Type your thoughts" value={commentsInput} onChange={(event) => {setcommentsInput(event.target.value)}} type="text"/> */}
    <TextField id="outlined-basic" label="Type Your Thoughts" variant="outlined" value={commentsInput} onChange={(event) => {setcommentsInput(event.target.value)}} type="text" />

    <h4>Select Today's Date</h4>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
        label="Select Date"
        value={dateInput}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
    />
    </LocalizationProvider>
    <br>
    </br>
    <br />
    <Button variant="contained"  style={{ backgroundColor: '#286F98', color: 'white' }} onClick={onSubmit}>Submit</Button>
    {/* <p>{quote}</p> */}

    </div>
);
}

export default Survey;
