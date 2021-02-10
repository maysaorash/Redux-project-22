// import {combineReducers} from 'redux';
// import {reducer} from 'redux';

import { SENT, CLEAR } from "../actions/fetchWiki";

const initialState = ["", [], [], []];

const reducer = (state=initialState, action) => {
    switch (action.type){
    case SENT:
    return action.result
    case CLEAR:
     return state 
     default:
      return state        
    }
}
export default reducer;
// export const reducers=combineReducers(reducer);

