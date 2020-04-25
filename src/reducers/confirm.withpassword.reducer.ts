import { userConstants } from '../constants';
import { AsyncStorage } from 'react-native';

let user = AsyncStorage.getItem('user')
const initialState = user ? { loggedIn: true, user } : {};

export function confirmWithPassword(state = initialState, action: { type: any; user: any; }) {
    switch (action.type) {
        case userConstants.CONFIRM_WITH_PASSWORD_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.CONFIRM_WITH_PASSWORD_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.CONFIRM_WITH_PASSWORD_FAILURE:
            return {};

        default:
            return state
    }
}
