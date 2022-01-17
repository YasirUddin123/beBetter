import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './EditResults.css';
import Swal from 'sweetalert2';

function EditResultsPage() {
    // Define params so we can use it
    const params = useParams();
    // Define dispatch so we can dispatch the call and payload data of the info we want to edit to our fetchOneResult saga in result.saga.js
    const dispatch = useDispatch()
    // Grab our reducer from editResult.reducer.js so we can edit data
    const editResult = useSelector(store => store.editThisResult)
    // define history to make sure we can route to specific component/web page
    const history = useHistory();
    // useEffect allows us to dispatch a call with type and send the payload data for a particular submission
    //  we want to edit to our fetchOneResult saga in result.saga.js
    useEffect(() => {
        console.log('🚀🚀🚀🚀🚀🚀🚀');
        dispatch({
        type: 'FETCH_ONE_RESULT',
        payload: params.id
        })
    }, [params.id])

    // To make sure the user does not submit a score less than 0 or greater than 10
    // We want to send sweet alerts to the user
    // When the user updates score in the correct range,
    // We send a dispatch to the editThisResult reducer in the editResult.reducer.js
    const handlePhysicalExerciseResultsChange = (e) => {
        if (e.target.value >= 11) {
            Swal.fire({
                title: 'Error!',
                text: 'Your exercise score is too high!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (e.target.value <= 0) {
            Swal.fire({
                title: 'Error!',
                text: 'Your exercise score is too low!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else {
            dispatch({
        type: 'EDIT_PHYSICAL_RESULT',
        payload: e.target.value
        })}
    }
    // To make sure the user does not submit a score less than 0 or greater than 10
    // We want to send sweet alerts to the user
    // When the user updates score in the correct range,
    // We send a dispatch to the editThisResult reducer in the editResult.reducer.js
    const handleDietResultsChange = (e) => {
        if (e.target.value >= 11) {
            Swal.fire({
                title: 'Error!',
                text: 'Your diet score is too high!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (e.target.value <= 0) {
            Swal.fire({
                title: 'Error!',
                text: 'Your diet score is too low!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else {
            dispatch({
        type: 'EDIT_DIET_RESULT',
        payload: e.target.value
        })}
    }
    // To make sure the user does not submit a score less than 0 or greater than 10
    // We want to send sweet alerts to the user
    // When the user updates score in the correct range,
    // We send a dispatch to the editThisResult reducer in the editResult.reducer.js
    const handleSleepResultsChange = (e) => {
        if (e.target.value >= 11) {
            Swal.fire({
                title: 'Error!',
                text: 'Your sleep score is too high!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (e.target.value <= 0) {
            Swal.fire({
                title: 'Error!',
                text: 'Your sleep score is too low!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else {
            dispatch({
        type: 'EDIT_SLEEP_RESULT',
        payload: e.target.value
        })}
    }
    // To make sure the user does not submit a score less than 0 or greater than 10
    // We want to send sweet alerts to the user
    // When the user updates score in the correct range,
    // We send a dispatch to the editThisResult reducer in the editResult.reducer.js
    const handleMoodResultsChange = (e) => {
        if (e.target.value >= 11) {
            Swal.fire({
                title: 'Error!',
                text: 'Your mood score is too high!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else if (e.target.value <= 0) {
            Swal.fire({
                title: 'Error!',
                text: 'Your mood score is too low!',
                icon: 'warning',
                confirmButtonText: 'Back',
                confirmButtonColor: '#286F98'
            })
        } else {
            dispatch({
        type: 'EDIT_MOOD_RESULT',
        payload: e.target.value
        })}
    }
    // To make sure the user does not submit a score less than 0 or greater than 10
    // We want to send sweet alerts to the user
    // When the user updates score in the correct range,
    // We send a dispatch to the editThisResult reducer in the editResult.reducer.js
    const handleCommentsResultsChange = (e) => {
        dispatch({
        type: 'EDIT_COMMENTS_RESULT',
        payload: e.target.value
        })
    }
    // When the user clicks on the Update button with the correct updated data,
    // A dispatch is sent to the editResult Saga in result.saga.js via the type
    // and sends the payload data which is the udpated data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('test')
        dispatch({
        type: 'EDIT_RESULT',
        payload: {
            id: editResult.id,
            physical_activity: editResult.physical_activity,
            diet: editResult.diet,
            sleep: editResult.sleep,
            mood: editResult.mood,
            comments: editResult.comments,
            date: editResult.date
        }
        })
        history.push('/history');
    }
    // If the user clicks on the Cancel Button,
    // The user gets routed back to the history component/web page
    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/history');
    }

return (
<div class="editresults" class="background" class="survey">
    <h2>Edit Results for {editResult.date} </h2>
<br />
<br />
    {/* Using a form tag to handle the Update button */}
        <form onSubmit={handleSubmit}>
    {/* Material UI to format Edit Results box */}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                />
    {/* Material UI to update style of input field */}
    {/* The value handles the value of the updated submission or blank in order to update */}
    {/* This will happen anytime a value changes via onChange */}
            <TextField
            id="outlined-basic"
            label="Exercise"
            variant="outlined"
            placeholder='Phys.Exer. Score'
            type="number"
            value={editResult.physical_activity || ''}
            onChange={handlePhysicalExerciseResultsChange}
            />
    {/* Material UI to update style of input field */}
    {/* The value handles the value of the updated submission or blank in order to update */}
    {/* This will happen anytime a value changes via onChange */}
            <TextField
            id="outlined-basic"
            label="Diet"
            variant="outlined"
            placeholder='Diet Score'
            type="number"
            value={editResult.diet || ''}
            onChange={handleDietResultsChange}
            />
    {/* Material UI to update style of input field */}
    {/* The value handles the value of the updated submission or blank in order to update */}
    {/* This will happen anytime a value changes via onChange */}
            <TextField
            id="outlined-basic"
            label="Sleep"
            variant="outlined"
            placeholder='Sleep Score'
            type="number"
            value={editResult.sleep || ''}
            onChange={handleSleepResultsChange}
            />
    {/* Material UI to update style of input field */}
    {/* The value handles the value of the updated submission or blank in order to update */}
    {/* This will happen anytime a value changes via onChange */}
            <TextField
            id="outlined-basic"
            label="Mood"
            variant="outlined"
            placeholder='Mood Score'
            type="number"
            value={editResult.mood || ''}
            onChange={handleMoodResultsChange}
            />
    {/* Material UI to update style of input field */}
    {/* The value handles the value of the updated submission or blank in order to update */}
    {/* This will happen anytime a value changes via onChange */}
            <TextField
            id="outlined-basic"
            label="Comments"
            variant="outlined"
            placeholder='Comments'
            type="text"
            value={editResult.comments || ''}
            onChange={handleCommentsResultsChange}
            />
<br />
<br />
<br />
    {/* Material UI to update styling of the Button */}
    {/* This includes an onClick to handle the update which corresponds to line 151 handleSubmit function */}
<Button variant="contained"  style={{ backgroundColor: '#286F98', color: 'white' }} size="large" align="center" onClick={handleSubmit}>Update</Button>
<br />
<br />
    {/* Material UI to update styling of the Button */}
    {/* This includes an onClick to handle the cancel which corresponds to line 170 handleCancel function */}
<Button variant="contained"  style={{ backgroundColor: '#D66A0B', color: 'white' }} size="large" align="center" onClick={handleCancel}>Cancel</Button>
        </form>

</div>
);
}

// Export this component to App.jsx 
export default EditResultsPage;
