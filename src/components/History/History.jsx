import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useParams} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './History.css'



function History() {

  useEffect(() => {
    dispatch({ type: 'FETCH_RESULT'})
}, []);

  // define dispatch in order to use it
  const dispatch = useDispatch();

  // define history in order to route to page
  const history = useHistory();

  // define params
  const params = useParams();

  // grab reducer from the redux store via useSelector
  const results = useSelector(store => store.resultReducer);
  console.log(results)

  const handleDeletebtn = (id) => {

    dispatch({
        type: 'DELETE_RESULT',
        payload: id
    })
};

const handleEditbtn = (id) => {
  console.log('test');
  console.log('id', id);
  history.push(`/edit_results/${id}`);
};

  return (
    <div className="container">

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ backgroundColor: '#efefef', color: 'white' }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Exercise</TableCell>
            <TableCell align="center">Diet</TableCell>
            <TableCell align="center">Sleep</TableCell>
            <TableCell align="center">Mood</TableCell>
            <TableCell align="center">Comments</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow
              key={result.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{ backgroundColor: '#efefef', color: 'white' }}
            >
              <TableCell align="center">
                {result.physical_activity}
              </TableCell>
              <TableCell align="center">{result.diet}</TableCell>
              <TableCell align="center">{result.sleep}</TableCell>
              <TableCell align="center">{result.mood}</TableCell>
              <TableCell align="center">{result.comments}</TableCell>
              <TableCell align="center">{result.date}</TableCell>
              <TableCell align="center"><Button variant="contained"  style={{ backgroundColor: '#286F98', color: 'white' }} onClick={() => handleEditbtn(result.id)}>EDIT</Button></TableCell>
              <TableCell align="center"><Button  variant="contained" style={{ backgroundColor: '#791E1E', color: 'white' }} startIcon={<DeleteIcon />} onClick={() =>handleDeletebtn(result.id)}>DELETE</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>


  );
}

export default History;
