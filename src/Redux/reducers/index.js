import {combineReducers} from 'redux';
import {employees} from './employees';

export const rootReducer = combineReducers({
    employees,
});