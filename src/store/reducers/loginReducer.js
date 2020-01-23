import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    expiresIn:null,
    registered:false

};

const loginStart = ( state, action ) => {
    
    return updateObject( state, { error: null, loading: true } );
};

const loginSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        userId: action.localId,
        error: null,
        loading: false,
        expiresIn:action.expiresIn,
        registered:action.registered
     } );
};

const loginFail = (state, action) => {
    
    return updateObject( state, {
        error: action.error,
        loading: false
    });
}

const loginReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        default:
            return state;
    }
};

export default loginReducer;