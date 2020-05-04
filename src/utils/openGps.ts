import { Platform } from 'react-native';
import { Linking } from 'expo';

export default function openGps(lat, lng, label='') {
    const scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    const url = scheme + `${lat},${lng}?daddr=${lat}+${lng}`;
    Linking.openURL(url);
}
