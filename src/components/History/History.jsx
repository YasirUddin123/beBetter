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
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';







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

const  TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5, float: 'right'}}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(7);

// Avoid a layout jump when reaching the last page with empty rows.
const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - results.length) : 0;

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};


return (

<div className="container">
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
            <TableRow>
                <TableCell sx={{width: 30, alignItems: 'center'}}>
                  Exercise
                </TableCell>
                <TableCell sx={{width: 30}}>
                  Diet
                </TableCell>
                <TableCell sx={{width: 30}}>
                  Sleep
                </TableCell>
                <TableCell sx={{width: 30}}>
                  Mood
                </TableCell>
                <TableCell sx={{width: 30}}>
                  Comments
                </TableCell>
                <TableCell sx={{width: 30}}>
                  Date
                </TableCell>
                <TableCell sx={{width: 30}}>
                </TableCell>
                <TableCell sx={{width: 30}}>
                </TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : results
          ).map((result) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {result.physical_activity}
              </TableCell>
              <TableCell component="th" scope="row">
                {result.diet}
              </TableCell>
              <TableCell component="th" scope="row">
                {result.sleep}
              </TableCell>
              <TableCell component="th" scope="row">
                {result.mood}
              </TableCell>
              <TableCell component="th" scope="row">
                {result.comments}
              </TableCell>
              <TableCell component="th" scope="row">
                {result.date}
              </TableCell>
              <TableCell align="center"><Button variant="contained"  style={{ backgroundColor: '#286F98', color: 'white' }} onClick={() => handleEditbtn(result.id)}>EDIT</Button></TableCell>
              <TableCell align="center"><Button  variant="contained" style={{ backgroundColor: '#791E1E', color: 'white' }} startIcon={<DeleteIcon />} onClick={() =>handleDeletebtn(result.id)}>DELETE</Button></TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
          </TableRow>
        </TableFooter>
      </Table>
      <TablePagination
              rowsPerPageOptions={[7, 14, 21, 30, { label: 'All', value: -1 }]}
              colSpan={3}
              count={results.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            style={{float: 'right'}}
            />
    </TableContainer>
    </div>


  );
}

export default History;
