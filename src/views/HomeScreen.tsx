import React, { useCallback, useEffect, useState } from 'react';
import { Subheading, Title } from 'react-native-paper';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import { Button } from 'react-native';
import { usePosition } from '../utils/usePostition';

export default function HomeScreen() {

    const [hospitals, setHospitals] = useState<any[]>([]);


   const [location,geocode, error] = usePosition()


    console.log('latitude',geocode.latitude);
    console.log('longitude',geocode.longitude);
    // let text = 'Waiting..';
    // if (state.errorMessage) {
    //     text = state.errorMessage;
    // } else if (state.location) {
    //     // text = JSON.stringify(state.location);
    //     console.log(state.location);
    //     text = `You are at ${state.location[0].street} ${state.location[0].name}!`
    // }

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
            <Header titleText='Home'/>
            <Title>Autour de vous ...</Title>
            <Subheading>Les Etablissements</Subheading>
            {hospitals && <Carousel
                style='slide'
                items={hospitals}
            />}
            <Subheading>QUEL SERVICE CHERCHEZ VOUS ?</Subheading>
        </>
    );
}
