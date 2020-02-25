import * as Types from '../constants/employees';

const initialState = {
  loader: false,
  data: [],
  error: false
};
export const employees = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH: return {
            ...state,
            loader: true,
            error:false
        };
        case Types.SUCCESS: return {
            ...state,
            loader: false,
            data: action.payload
        };
        case Types.ERROR: return {
            ...state,
            loader: false,
            error: action.payload
        };
        default: return  {
            ...state
        }
    }
};