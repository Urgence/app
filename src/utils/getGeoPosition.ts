import { useState } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


export const usePosition = async () => {
    const [position, setPosition] = useState<any>({});
    const [geocode, setGeocode] = useState({});
    const [error, setError] = useState({});

};

