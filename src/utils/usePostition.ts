import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';
import Constants from 'expo-constants';


export function usePosition() {
    const [location, setLocation] = useState<any>({});
    const [geocode, setGeocode] = useState({});
    const [error, setError] = useState({});

    const _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setError({
                errorMessage: 'Permission to access location was denied'
            });
        }

        let geocode = await Location.getCurrentPositionAsync({});
        let location = await Location.reverseGeocodeAsync(geocode.coords);
        setLocation(location);
        setGeocode(geocode.coords);
        return { location, geocode };
    };

    useEffect(() => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            setError({
                errorMessage: ' Error not working to Android emulator. Try it on your device!',
            });
        } else {
            _getLocationAsync().then(r => r);
        }
    }, []);

    return [location, geocode, error]
};

