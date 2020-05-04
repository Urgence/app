import { Platform } from 'react-native';
import { Linking } from 'expo';

export default function openGps(lat, lng, label='') {
    const scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    const go = Platform.OS === 'ios' ? `?daddr=${lat}+${lng}` : `?saddr=${lat}+${lng}`;
    const url = scheme + `${lat},${lng}${go}`;
    Linking.openURL(url);
}
