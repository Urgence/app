import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Searchbar, Text, Card } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    body: {
        flex: 3,
    },
    item: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
    }
});

export default function SearchScreen() {
    const [search, setSearch] = useState('');
    const [hospitals, setHospitals] = useState<any[]>([]);

    const fetchHospital = useCallback(() => {
        console.log('fetch');
        fetch('https://urgence-api.herokuapp.com/api/' + 'hospital')
            .then(response => response.json())
            .then(result => {
                if (result.records) {
                    setHospitals(result.records);
                }
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log('search change');
        fetchHospital();
    }, [search])

    const hospitalClick = useCallback((hospital) => {
        console.log('hospital click:', hospital.fields.raison_sociale)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Searchbar
                    placeholder='Search'
                    onChangeText={text => setSearch(text)}
                    value={search}
                />
            </View>
            <View style={styles.body}>
                <ScrollView>
                    {
                        hospitals.map(hospital => {
                            return (
                                <Card style={styles.item} key={hospital.recordid} onPress={() => hospitalClick(hospital)}>
                                    <Card.Content>
                                        <Text>{hospital.fields.raison_sociale}</Text>
                                        <Text>{hospital.fields.adresse_complete}</Text>
                                        <Text>{hospital.fields.cp_ville}</Text>
                                        <Text>{hospital.fields.num_tel}</Text>
                                    </Card.Content>
                                </Card>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    );
}
