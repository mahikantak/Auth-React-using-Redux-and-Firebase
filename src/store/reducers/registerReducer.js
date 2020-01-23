import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

const regStart = ( state, action ) => {
    
    return updateObject( state, { error: null, loading: true } );
};

const regSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
     } );
};

const regFail = (state, action) => {
    
    return updateObject( state, {
        error: action.error,
        loading: false
    });
}

const registerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.REG_START: return regStart(state, action);
        case actionTypes.REG_SUCCESS: return regSuccess(state, action);
        case actionTypes.REG_FAIL: return regFail(state, action);
        default:
            return state;
    }
};

export default registerReducer;