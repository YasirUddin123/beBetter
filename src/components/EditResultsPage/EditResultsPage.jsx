import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './EditResults.css'



function EditResultsPage() {
    const params = useParams();
    const dispatch = useDispatch()
    // Grab our reducer for editing
    const editResult = useSelector(store => store.editThisResult)
    // Now, let's go check out the reducer on the editResult.reducer.js file

    useEffect(() => {
        console.log('🚀🚀🚀🚀🚀🚀🚀');
        dispatch({
        type: 'FETCH_ONE_RESULT',
        payload: params.id
        })
    }, [params.id])

    const handlePhysicalExerciseResultsChange = (e) => {
        dispatch({
        type: 'EDIT_PHYSICAL_RESULT',
        payload: e.target.value
        })
    }

    const handleDietResultsChange = (e) => {
        dispatch({
        type: 'EDIT_DIET_RESULT',
        payload: e.target.value
        })
    }

    const handleSleepResultsChange = (e) => {
        dispatch({
        type: 'EDIT_SLEEP_RESULT',
        payload: e.target.value
        })
    }

    const handleMoodResultsChange = (e) => {
        dispatch({
        type: 'EDIT_MOOD_RESULT',
        payload: e.target.value
        })
    }

    const handleCommentsResultsChange = (e) => {
        dispatch({
        type: 'EDIT_COMMENTS_RESULT',
        payload: e.target.value
        })
    }

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
            comments: editResult.comments
        }
        })
    }

return (
<div class="editresults">
    <h2>Edit Results</h2>
<br />
<br />
        <form onSubmit={handleSubmit}>
            <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                />

            <TextField
            id="outlined-basic"
            label="Physical Exercise"
            variant="outlined"
            placeholder='Phys.Exer. Score'
            type="number"
            value={editResult.physical_activity || ''}
            onChange={handlePhysicalExerciseResultsChange}
            />

            <TextField
            id="outlined-basic"
            label="Diet"
            variant="outlined"
            placeholder='Diet Score'
            type="number"
            value={editResult.diet || ''}
            onChange={handleDietResultsChange}
            />

            <TextField
            id="outlined-basic"
            label="Sleep"
            variant="outlined"
            placeholder='Sleep Score'
            type="number"
            value={editResult.sleep || ''}
            onChange={handleSleepResultsChange}
            />

            <TextField
            id="outlined-basic"
            label="Mood"
            variant="outlined"
            placeholder='Mood Score'
            type="number"
            value={editResult.mood || ''}
            onChange={handleMoodResultsChange}
            />

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
<Button variant="contained"  style={{ backgroundColor: '#286F98', color: 'white' }} size="large" align="center" onClick={handleSubmit}>Update</Button>
        </form>

</div>
);
}

export default EditResultsPage;

//let's style
