import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function EditResultsPage() {
    const params = useParams();
    const dispatch = useDispatch()
    // Grab our reducer for editing
    const editResult = useSelector(store => store.editThisResult)
    // Now, let's go check out the reducer on the editResult.reducer.js file

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }

      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];


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

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">Physical Activity</TableCell>
            <TableCell align="center">Diet</TableCell>
            <TableCell align="center">Sleep</TableCell>
            <TableCell align="center">Mood</TableCell>
            <TableCell align="center">Comments</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
);
}


export default EditResultsPage;

//let's style
