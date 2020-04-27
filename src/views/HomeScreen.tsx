import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Subheading, Title } from 'react-native-paper';
import styled from 'styled-components';

import Carousel from '../components/Carousel';

const Titles = styled(Title)`

`;


export default function HomeScreen() {

    const [hospitals, setHospitals] = useState<any[]>([]);

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
        <SafeAreaView>
            <Titles>Autour de vous ...</Titles>
            <Subheading>Les Etablissements</Subheading>
            {hospitals && <Carousel
                style='slide'
                items={hospitals}
            />}
            <Subheading>QUEL SERVICE CHERCHEZ VOUS ?</Subheading>
        </SafeAreaView>
    );
}
