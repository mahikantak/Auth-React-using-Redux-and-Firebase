import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}

export const loginSuccess = (idToken, localId, expiresIn, registered) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        localId: idToken,
        idToken: localId,
        expiresIn: expiresIn,
        registered: registered
    }
}
export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    }
}

export const login = (email, password) => {
    const loginData = {
        email: email,
        password: password,
        returnSecureToken: true
    };

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDy6Y5BuDPibALmDWk8gh93xk5lRg3lb7E';
    return dispatch => {
        dispatch(loginStart());
        axios.post(url, loginData)
            .then(response => {
                dispatch(loginSuccess(response.data.idToken, response.data.localId, response.data.expiresIn, response.data.registered));

            })
            .catch(err => {
                console.log(err);
                 dispatch(loginFail(err));
            });
    }
}

