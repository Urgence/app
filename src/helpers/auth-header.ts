import { AsyncStorage } from 'react-native';

export async function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(<string>await AsyncStorage.getItem('user'));

    if (user && user.token) {
        return {
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + user.token
        };
    } else {
        return {};
    }
}
