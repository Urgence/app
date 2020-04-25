import {Base64} from 'js-base64';
import {authHeader} from '../helpers';
import {toLower} from 'lodash'
import { AsyncStorage } from 'react-native';

export const userService = {
    login,
    logout,
    register,
    confirmAccountWithPassword,
    delete: _delete
};

function confirmAccountWithPassword(id: any, password: any, confirmPassword: any) {
    const base64EncodedPassword = Base64.encode(password);
    const base64EncodedConfirmPassword = Base64.encode(confirmPassword);
    const requestOptions = {
        method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({id, base64EncodedPassword, base64EncodedConfirmPassword})
    };

    return fetch(`${process.env.REACT_APP_APIURL}/auth/pass`, requestOptions)
        .then(handleResponse)
        .then(async user => {
            await AsyncStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function login(username: string | undefined, password: any) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({email: toLower(username), password})
    };

    return fetch(`${process.env.REACT_APP_APIURL}/auth/login`, requestOptions)
        .then(handleResponse)
        .then(async user => {
            console.log(user)
           await AsyncStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function register(firstName: any, lastName: any, email: any) {
    const requestOptions = {
        method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({email: email, firstName: firstName, lastName: lastName})
    };

    return fetch(`${process.env.REACT_APP_APIURL}/auth/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // AsyncStorage.setItem('user', JSON.stringify(user));
            console.log(user)
            return user;
        });
}

async function logout() {
   await AsyncStorage.removeItem('user');
}



function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${process.env.REACT_APP_APIURL}/users/${id}`, (requestOptions as any)).then(handleResponse);
}

function handleResponse(response: { text: () => Promise<any>; ok: any; status: number; statusText: any; }) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout().then(r => r);
                window.location.reload();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
