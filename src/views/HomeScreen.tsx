import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Subheading, Title } from 'react-native-paper';
import styled from 'styled-components';

import Carousel from '../components/Carousel'
import { useDispatch, useSelector } from 'react-redux';
import { hospitalActions } from '../actions';

const Titles = styled(Title)`

`;


export default function HomeScreen() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hospitalActions.getAll());

    }, []);
    const hospitals = useSelector((state: any) => {
        console.log("STATE ============> ",state.hospital);
        return state.hospital;
    });
    return (
        <SafeAreaView>
                <Titles>Autour de vous ye ...</Titles>
            <Subheading>Les Etablissements</Subheading>
            <Carousel
                style='slide'
                items={[{
                    title: 'Welcome, swipe to continue.',
                }, {
                    title: 'About feature X.',
                }, {
                    title: 'About feature Y.',
                }]}
            />
        </SafeAreaView>
    );
}
