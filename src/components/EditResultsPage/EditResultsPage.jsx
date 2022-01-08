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

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
        type: 'EDIT_RESULT',
        payload: {
            id: editResult.id,
            physical_activity: editResult.physical_activity
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
            <button>Update</button>
        </form>
</div>
);
}


export default EditResultsPage;
