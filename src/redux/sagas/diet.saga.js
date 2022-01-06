import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchDiet() {
    // get all physical activity results from the DB
    try {
        const dietResults = yield axios.get('/api/results');
        console.log('get all:', dietResults.data);
        yield put({ type: 'SET_DIET', payload: dietResults.data });

    } catch {
        console.log('get all error');
    }
}


function* addDiet(action) {
    console.log('Test POST:', action.payload)
    try {
        const newDiet = yield axios({
            method: 'POST',
            url: '/api/results',
            data: action.payload
        })

        yield put({ type: 'FETCH_DIET' });

    } catch {
        console.log('get all error');
    }
}


function* dietSaga() {
    yield takeLatest('ADD_DIET', addDiet);
    yield takeLatest('FETCH_DIET', fetchDiet);
}

export default dietSaga;
