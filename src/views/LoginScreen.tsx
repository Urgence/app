import React from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#ffffff',
			}}
		>
			<Image source={require('../../assets/urgencelogo.png')} />
			<Button mode="outlined" onPress={() => navigation.navigate('Home')}>
				{' '}
				Trouver un hopital !
			</Button>
		</View>
	);
}
