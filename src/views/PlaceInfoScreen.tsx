import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-paper';
import dialCall from '../utils/disCallServices';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
        position: 'absolute',
        resizeMode: 'cover',
        width: viewportWidth,
        height: viewportHeight,
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
    maps: {
        position: 'absolute',
        alignSelf: 'flex-start',
        top: '80%',
        left: '10%'
    },
    call: {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: '80%',
        right: '10%'
    },
    info: {
        position: 'absolute',
        alignSelf: 'flex-start',
        top: '10%',
        left: '10%'
    }
});


export default function PlaceInfo({ route, navigation }) {
    const [data, setData] = useState();
    useEffect(() => {
        console.log('QUERY', route.params.query);
    }, []);
    return (
        <SafeAreaView>
            {/*<ImageBackground style={styles.imgBackground}*/}
            {/*                 // source={{ uri: 'https://www.lobservateur.fr/wp-content/uploads/2020/04/Capture-d%E2%80%99e%CC%81cran-2020-04-15-a%CC%80-20.54.43.png' }}*/}
            {/*>*/}
                <Text style={styles.info}>Test</Text>
                <Button style={styles.maps} mode="contained" onPress={() => dialCall(15)}>
                    J'y vais
                </Button>
                <Button style={styles.call} mode="contained" onPress={() => console.log('Pressed')}>
                    Appeler
                </Button>
            {/*</ImageBackground>*/}
        </SafeAreaView>
    );
}
