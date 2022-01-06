import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPhysicalActivity() {
    // get all physical activity results from the DB
    try {
        const physicalActivityResults = yield axios.get('/api/results');
        console.log('get all:', physicalActivityResults.data);
        yield put({ type: 'SET_PHYSICAL_ACTIVITY', payload: physicalActivityResults.data });

    } catch {
        console.log('get all error');
    }
}


function* addPhysicalActivity(action) {
    console.log('Test POST:', action.payload)
    try {
        const newPhysicalActivity = yield axios({
            method: 'POST',
            url: '/api/results',
            data: action.payload
        })

        yield put({ type: 'FETCH_PHYSICAL_ACTIVITY' });

    } catch {
        console.log('get all error');
    }
}


function* physicalActivitySaga() {
    yield takeLatest('ADD_PHYSICAL_ACTIVITY', addPhysicalActivity);
    yield takeLatest('FETCH_PHYSICAL_ACTIVITY', fetchPhysicalActivity);
}

export default physicalActivitySaga;
