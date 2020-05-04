import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';


export default function FirstTime({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assets/urgencelogo.png')}></Image>
            <Button
                title="Trouver un hopital !"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
