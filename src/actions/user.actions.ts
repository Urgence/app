import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
// import { history } from '../helpers';

export const userActions = {
    confirmAccountWithPassword,
    login,
    register,
    logout,
    delete: _delete
};

function confirmAccountWithPassword(id: any, password: any, confirmPassword: any) {
    return (dispatch: (arg0: { type: string; user?: any; error?: any; message?: any; }) => void) => {
        dispatch(request({id, password, confirmPassword}));
        userService.confirmAccountWithPassword(id, password, confirmPassword)
            .then(
                user => {
                    dispatch(success(user));
                 //   history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user: { id: any; password: any; confirmPassword: any; }) { return { type: userConstants.CONFIRM_WITH_PASSWORD_REQUEST, user } }
    function success(user: any) { return { type: userConstants.CONFIRM_WITH_PASSWORD_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.CONFIRM_WITH_PASSWORD_FAILURE, error } }
}

function login(username: string | undefined, password: any) {
    return (dispatch: (arg0: { type: string; user?: any; error?: any; message?: any; }) => void) => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                   //  history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user: { username: string | undefined; }) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user: any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function register({firstName, lastName, email}: any) {
    return (dispatch: (arg0: { type: string; user?: any; error?: any; message?: any; }) => void) => {
        dispatch(request({ email }));

        userService.register(firstName, lastName, email)
            .then(
                user => {
                    dispatch(success(user));
                   // history.push('/home');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}


function _delete(id: any) {
    return (dispatch: (arg0: { type: string; id: any; error?: any; }) => void) => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                (error: { toString: () => any; }) => dispatch(failure(id, error.toString()))
            );
    };

    function request(id: any) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id: any) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id: any, error: any) { return { type: userConstants.DELETE_FAILURE, id, error } }
}
