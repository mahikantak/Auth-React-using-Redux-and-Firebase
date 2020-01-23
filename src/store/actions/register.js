import axios from 'axios';

import * as actionTypes from './actionTypes';

export const regStart = () => {
    return {
        type: actionTypes.REG_START
    };
};

export const regSuccess = (token, userId) => {
    return {
        type: actionTypes.REG_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const regFail = (error) => {
    return {
        type: actionTypes.REG_FAIL,
        error: error
    };
};

export const registration = (name, email, password, confirmPassword) => {

    return dispatch => {
        dispatch(regStart());
        const regData = {
            name:name,
            email: email,
            password: password,
            confirmPassword:confirmPassword,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDy6Y5BuDPibALmDWk8gh93xk5lRg3lb7E';
       
        axios.post(url, regData)
            .then(response => {
                dispatch(regSuccess(response.data.idToken, response.data.localId));
            })
            .catch(err => {
                dispatch(regFail(err));
            });
    };
};