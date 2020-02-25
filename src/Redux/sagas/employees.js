import {all, fork, takeEvery, put, call} from 'redux-saga/effects';
import * as Types from '../constants/employees';
import * as Actions from '../actions/employees';
import axios from 'axios';

function* fetch(action) {
    try {
        //const axiosClient = axios.create({baseURL: 'https://reqres.in/api/'});
        const axiosClient = axios.create({baseURL: 'https://rh-s.com/api/'});
        const response = yield call(axiosClient.get, 'products.php');
        yield put(Actions.success(response.data))
    }
    catch(e){
        yield put(Actions.error(e))
    }
}

function* watchFetch() {
    yield takeEvery(Types.FETCH, fetch)
}

export default function* root (){
    yield all([
        fork(watchFetch)
    ])
}