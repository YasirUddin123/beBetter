import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchResult() {
    // get all physical activity results from the DB
    try {
        const result = yield axios.get('/api/results');
        console.log('get all:', result.data);
        yield put({ type: 'SET_RESULT', payload: result.data });

    } catch {
        console.log('get all error');
    }
}


function* addResult(action) {
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
    console.log(action);

    try {
        const response = yield axios({
            method: 'DELETE',
            url: `api/results/${action.payload}`
        });
        yield put({ type: 'FETCH_RESULT' });
        console.log('delete Results, response.data from DB:', response.data);
    } catch (err) {
        console.error('delete results error', err);
    }
};


function* resultSaga() {
    yield takeLatest('ADD_RESULT', addResult);
    yield takeLatest('FETCH_RESULT', fetchResult);
    yield takeLatest('DELETE_RESULT', deleteResult);
}

export default resultSaga;
