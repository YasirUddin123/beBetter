import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';



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
<div>
    <h2>Edit Results:</h2>

        <form onSubmit={handleSubmit}>
            <input
            placeholder='Phys.Exer. Score'
            type="number"
            value={editResult.physical_activity || ''}
            onChange={handlePhysicalExerciseResultsChange}
            />

            <input
            placeholder='Diet Score'
            type="number"
            value={editResult.diet || ''}
            onChange={handleDietResultsChange}
            />

            <input
            placeholder='Sleep Score'
            type="number"
            value={editResult.sleep || ''}
            onChange={handleSleepResultsChange}
            />

            <input
            placeholder='Mood Score'
            type="number"
            value={editResult.mood || ''}
            onChange={handleMoodResultsChange}
            />

            <input
            placeholder='Comments'
            type="text"
            value={editResult.comments || ''}
            onChange={handleCommentsResultsChange}
            />

            <button>Update</button>
        </form>
</div>
);
}


export default EditResultsPage;

//let's style
