import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Subheading, Title } from 'react-native-paper';
import styled from 'styled-components';

const Titles = styled(Title)`

`;


export default function HomeScreen() {

    return (
        <SafeAreaView>
                <Titles>Autour de vous ye ...</Titles>
            <Subheading>Les Etablissements </Subheading>
        </SafeAreaView>
    );
}
