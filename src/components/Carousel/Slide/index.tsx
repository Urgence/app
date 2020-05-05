import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Card, Text } from 'react-native-paper';

export const Slide = (props) => {

    const { data } = props;
    const { navigation } = props;

    return (
        <TouchableOpacity style={styles.slide} onPress={() =>  navigation.navigate('Discover',  { query: data })}>
            <ImageBackground
                source={{ uri: 'https://www.lobservateur.fr/wp-content/uploads/2020/04/Capture-d%E2%80%99e%CC%81cran-2020-04-15-a%CC%80-20.54.43.png' }}
                blurRadius={97} style={{ width: '100%', height: '100%', }}>
                <Card.Content style={{ ...styles.slideText }}>
                    <Text style={{ ...styles.text }}>{data.fields.raison_sociale}</Text>
                    <Text style={{ ...styles.text }}>{data.fields.adresse_complete}</Text>
                    <Text style={{ ...styles.text }}>{data.fields.cp_ville}</Text>
                    <Text style={{ ...styles.text }}>{data.fields.num_tel}</Text>
                </Card.Content>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default Slide;
