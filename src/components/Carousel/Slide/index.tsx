import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Card, Text } from 'react-native-paper';

export const Slide = (props: any) => {

    const { data } = props;

    return (
        <View style={styles.slide}>
            <Card.Content style={{ ...styles.slideText }}>
                <Text>{data.fields.raison_sociale}</Text>
                <Text>{data.fields.adresse_complete}</Text>
                <Text>{data.fields.cp_ville}</Text>
                <Text>{data.fields.num_tel}</Text>
            </Card.Content>
        </View>
    );
};

export default Slide;
