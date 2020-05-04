import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Card, Text } from 'react-native-paper';
import { NavigationActions } from 'react-navigation';

export const Slide = (props: any) => {

    const { data } = props;

    return (
        <TouchableOpacity style={styles.slide} onPress={() => {
            NavigationActions.navigate({ routeName: 'Dicover' }
            )} }>
            <ImageBackground source={require('../../../../assets/icon.png')} blurRadius={5} style={{ width: 'auto' }}>
                <Card.Content style={{ ...styles.slideText }}>
                    <Text>{data.fields.raison_sociale}</Text>
                    <Text>{data.fields.adresse_complete}</Text>
                    <Text>{data.fields.cp_ville}</Text>
                    <Text>{data.fields.num_tel}</Text>
                </Card.Content>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default Slide;
