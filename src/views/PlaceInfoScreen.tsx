import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import dialCall from '../utils/disCallServices';
import Header from '../components/Header';
import openGps from '../utils/openGps';
import MapView, { Marker } from 'react-native-maps';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
	'window',
);

const styles = StyleSheet.create({
	imgBackground: {
		flex: 1,
		position: 'absolute',
		resizeMode: 'cover',
		width: viewportWidth,
		height: viewportHeight,
		backgroundColor: 'transparent',
		alignItems: 'center',
	},
	maps: {
		position: 'absolute',
		alignSelf: 'flex-start',
		top: '60%',
		left: '10%',
	},
	call: {
		position: 'absolute',
		alignSelf: 'flex-end',
		top: '60%',
		right: '10%',
	},
	info: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	mapStyle: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height / 4,
		borderColor: '#000000',
		borderStyle: 'solid',
	},
});

export default function PlaceInfo({ route, navigation }) {
	const [data, setData] = useState<any>();
	useEffect(() => {
		console.log('QUERY', route.params.query.fields);
		setData(route.params.query.fields);
	}, []);
	return (
		<>
			<Header titleText={'Information'} />
			<ScrollView>
				{data && (
					<>
						<Card>
							<Card.Title
								title={data.categorie_de_l_etablissement}
								subtitle={data.participant_service_public_hospitalier}
							/>
							<Card.Cover
								source={{
									uri:
										'https://www.lobservateur.fr/wp-content/uploads/2020/04/Capture-d%E2%80%99e%CC%81cran-2020-04-15-a%CC%80-20.54.43.png',
								}}
							/>
							<Card.Content>
								<Paragraph>
									<Text style={{ fontWeight: 'bold' }}> Nom: </Text>
									{data.raison_sociale}
								</Paragraph>
								<Paragraph>
									<Text style={{ fontWeight: 'bold' }}>Date d'ouverture:</Text>
									{data.date_ouverture}
								</Paragraph>
								<Paragraph>
									<Text style={{ fontWeight: 'bold' }}>
										Type d'etablissment:
									</Text>
									{data.type_etablissement}
								</Paragraph>
								<Paragraph>
									<Text style={{ fontWeight: 'bold' }}> Adresse : </Text>
									{data.adresse_complete} {data.cp_ville}
								</Paragraph>
								<Paragraph>
									<Text style={{ fontWeight: 'bold' }}> Tél.: </Text>
									{data.num_tel}
								</Paragraph>
							</Card.Content>
							<Card.Actions style={styles.info}>
								<Button
									onPress={() =>
										openGps(data.lat, data.lng, data.raison_sociale)
									}
								>
									J'y vais
								</Button>
								<Button onPress={() => dialCall(data.num_tel)}>Appeler</Button>
							</Card.Actions>
						</Card>
						<MapView
							style={styles.mapStyle}
							region={{
								latitude: Number(data.lat),
								longitude: Number(data.lng),
								latitudeDelta: 0.0922,
								longitudeDelta: 0.0421,
							}}
						>
							<Marker
								coordinate={{
									latitude: Number(data.lat),
									longitude: Number(data.lng),
								}}
								title={data.raison_sociale}
							/>
						</MapView>
					</>
				)}
			</ScrollView>
		</>
	);
}
