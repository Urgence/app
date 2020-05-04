import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Button, Card, Colors, Subheading, Title } from 'react-native-paper';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import { usePosition } from '../utils/usePostition';
import { ScrollView } from 'react-native';
import hospitalServices from '../utils/HospitalServices.json';

export default function HomeScreen({navigation}) {

    const [hospitals, setHospitals] = useState();

    const [plus, setPlus] = useState(2);

    const [location, geocode, error] = usePosition();


    const fetchHospital = () => {
        if (!(geocode && geocode.longitude && geocode.latitude)) return;
        fetch(`https://urgence-api.herokuapp.com/api/hospital/location`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                latitude: geocode.longitude,
                longitude: geocode.latitude,
            })
        })
            .then(response => response.json())
            .then(result => {
                if (result.records) {
                    setHospitals(result.records);
                }
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchHospital();
    }, [geocode]);


    return (
        <>
            <Header titleText='Home'/>
            <Title>Autour de vous ...</Title>
            <Subheading>Les Etablissements</Subheading>
            {!hospitals &&  <ActivityIndicator animating={true} color={Colors.red800} />}
            {hospitals && <Carousel
                style='slide'
                items={hospitals}
            />}
            <Subheading>QUEL SERVICE CHERCHEZ VOUS ?</Subheading>
            <ScrollView>
                {hospitalServices.slice(0,plus).map((item, key) => {
                    return (
                        <Card key={key}
                              style={{margin : 10}}
                              onPress={() => navigation
                                  .navigate('Search',
                                  { query : item.name}
                        )}>
                            <Card.Content>
                                <Title>{item.name}</Title>
                            </Card.Content>
                        </Card>
                    );
                })}
                <Button icon='plus'  onPress={() => setPlus(plus+2)}>
                    Voir Plus
                </Button>
            </ScrollView>
        </>
    );
}
