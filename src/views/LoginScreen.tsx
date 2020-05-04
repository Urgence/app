import React from 'react';
import { Button, Image, View } from 'react-native';


export default function LoginScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assets/urgencelogo.png')}/>
            <Button
                title="Trouver un hopital !"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
