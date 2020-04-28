import React, { useCallback, useEffect, useState } from 'react';
import { Subheading, Title } from 'react-native-paper';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Button,Text, Platform } from 'react-native';

export default function HomeScreen() {

    const [hospitals, setHospitals] = useState<any[]>([]);

    const [state, setState] = useState<any>({
        location: null,
        geocode: null,
        errorMessage: null,
    })

    useEffect(() => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            _getLocationAsync();
        }
    }, [])

    const _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setState({
                errorMessage: 'Permission to access location was denied'
            });
        }

        let geocode = await Location.getCurrentPositionAsync({});
        let location = await Location.reverseGeocodeAsync(geocode.coords);
        setState({ location, geocode });
    };
    let text = 'Waiting..';
    if (state.errorMessage) {
        text = state.errorMessage;
    } else if (state.location) {
        // text = JSON.stringify(state.location);
        console.log(state.location);
        text = `You are at ${state.location[0].street} ${state.location[0].name}!`
    }

    const fetchHospital = useCallback(() => {
        fetch(`https://urgence-api.herokuapp.com/api/hospital`)
            .then(response => response.json())
            .then(result => {
                if (result.records) {
                    setHospitals(result.records);
                }
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetchHospital();
    }, []);


    return (
        <>
            <Header titleText='Home' />
            <Title>Autour de vous ...</Title>
            <Text>{text}</Text>
            <Button title='update address' onPress={() => _getLocationAsync()} />
            <Subheading>Les Etablissements</Subheading>
            {hospitals && <Carousel
                style='slide'
                items={hospitals}
            />}
            <Subheading>QUEL SERVICE CHERCHEZ VOUS ?</Subheading>
        </>
    );
}
