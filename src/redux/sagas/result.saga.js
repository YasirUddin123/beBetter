import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchResult() {
    // This saga function gets all the results from the DB
    // with the help of the /api/results route
    // which goes to the get router in the resultsRouter.js file
    // if successful, this will update the results Reducer with the type and payload indicated below
    try {
        const result = yield axios.get('/api/results');
        console.log('get all:', result.data);
        yield put({ type: 'SET_RESULT', payload: result.data });
    } catch {
        console.log('get all error');
    }
}


function* addResult(action) {
    // This saga function sends results to the DB when a user submits a survey
    // with the help of the /api/results route
    // which goes to the post router in the resultsRouter.js file
    // This is a little different format so I can get more practice seeing different version
    console.log('Test POST:', action.payload)
    try {
        const newResult = yield axios({
            method: 'POST',
            url: '/api/results',
            data: action.payload
        })
        yield put({ type: 'FETCH_RESULT' });

    } catch {
        console.log('get all error');
    }
}


function* deleteResult(action) {
    // Similar pattern as above ^ but the delete route
    // But important to note that the action.payload data is in the url
    console.log(action);
    try {
        const response = yield axios({
            method: 'DELETE',
            url: `/api/results/${action.payload}`
        });
        yield put({ type: 'FETCH_RESULT' });
        console.log('delete Results, response.data from DB:', response.data);
    } catch (err) {
        console.error('delete results error', err);
    }
};

function* editResult(action){
    // Similar pattern as above ^ but the put route
    // But important to note that the action.payload.id data is in the url
    // as a parameter in the url when we edit
    // if all good, then use the fetch reuslt type to call the fetch result function above
    try {
        console.log('edit result action.payload', action.payload);
        yield axios ({
            method: 'PUT',
            url: `/api/results/${action.payload.id}`,
            data: action.payload
        })
        yield put({
            type: 'FETCH_RESULT'
        })
    } catch (err) {
        console.log(err);
    }
}

function* fetchOneResult(action) {
    // Similar pattern as Get
    // But only grabs one submission so we are able to edit that particular submission
    // on the EditResults page
    try {
    const response = yield axios({
        method: 'GET',
        url: `/api/results/${action.payload}`
    })
    const resultToEdit = response.data;
    yield put({
        type: 'SET_RESULT_TO_EDIT',
        payload: resultToEdit
    })
    } catch (err) {
    console.log(err);
    }
}


// Pseudocode
// Step 1: Click on the edit button
    // onClick function that handlles the edit button
// Step 2: Get the data from db using the id
    // Inside of this onClick function, do a GET route
// Step 3: Display the data on the page
    // Make sure any function that displays data gets ran
// Step 4: Change the data on the page
    // User literally changing data on page
// Step 5: Click on a button to save that updated data on the page
    // Some onClick function that would save this updated data
// Step 6: Send the data to the db using the id with a PUT route
    // Route the data to db
// Step 7: Get the updated data from the db using the id
    //  Get the updated data from db
// Step 8: Display the updated data on the page
    // render the function to display


function* resultSaga() {
    yield takeLatest('ADD_RESULT', addResult);
    yield takeLatest('FETCH_RESULT', fetchResult);
    yield takeLatest('DELETE_RESULT', deleteResult);
    yield takeLatest('FETCH_ONE_RESULT', fetchOneResult);
    yield takeLatest('EDIT_RESULT', editResult);

}

export default resultSaga;
