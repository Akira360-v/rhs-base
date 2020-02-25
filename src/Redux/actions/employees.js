import * as Types from '../constants/employees';

export const fetch = () => ({
    type: Types.FETCH,
});
export const success = (users) => ({
    type: Types.SUCCESS,
    payload: users
});
export const error = (error) => ({
    type: Types.ERROR,
    payload: error
});