import {all, fork} from 'redux-saga/effects';
import employees from "./employees";

export default function* root (){
    yield all([
        employees()
    ])
}