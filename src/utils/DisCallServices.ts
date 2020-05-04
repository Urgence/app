import { Linking, Platform } from 'react-native';

export default function dialCall(number) {
    if (number.toString().startsWith('33')) {
        number = '+' + number;
    }
    let phoneNumber = '0140054848';

    if (Platform.OS === 'android') {
        phoneNumber = `tel:${number}`;
    } else {

        phoneNumber = `telprompt:${number}`;
    }

    return Linking.openURL(phoneNumber);
};
