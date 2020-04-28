import { useEffect, useState } from 'react';

const defaultSettings = {
    enableHighAccuracy: false,
    timeout: Infinity,
    maximumAge: 0,
};

export const usePosition = (watch = false, settings = defaultSettings) => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState();

    const onChange = ({ coords, timestamp }) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
            timestamp,
        });
    };

    const onError = (error: any) => {
        console.log(error);
        setError(error);
    };
    useEffect(() => {
        if (!navigator || !navigator.geolocation) {
            setError({ message: 'Geolocation is not supported' });
            return;
        }

        let watcher;
        if (watch) {
            watcher =
                navigator.geolocation.watchPosition(onChange, onError, settings);
        } else {
            navigator.geolocation.getCurrentPosition(onChange, onError, settings);
        }

        return () => watcher && navigator.geolocation.clearWatch(watcher);
    }, [
        settings.enableHighAccuracy,
        settings.timeout,
        settings.maximumAge,
    ]);

    return { ...position, error };
};
