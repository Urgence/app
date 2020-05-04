import { Platform } from 'react-native';
import { Linking } from 'expo';

export default function openGps(lat, lng) {
    const scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    const url = scheme + `${lat},${lng}`;
    Linking.openURL(url);
}
