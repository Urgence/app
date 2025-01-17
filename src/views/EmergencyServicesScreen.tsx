import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import servicesImportants from '../utils/servicesimportants.json';
import { Button, Card, List, Paragraph, Title } from 'react-native-paper';
import dialCall from '../utils/disCallServices';

export default function EmergencyServicesScreen({ navigation }) {
    const [plus, setPlus] = useState(2);
    const [expanded, setExpanded] = useState(true);

    const [selected, setSelected] = React.useState(new Map());

    const onSelect = React.useCallback(
        id => {
            const newSelected = new Map(selected);
            newSelected.set(id, !selected.get(id));

            setSelected(newSelected);
        },
        [selected],
    );

    return (<>
            <Header titleText='Urgence'/>
            <List.Section style={styles.item} title="Services D'urgence">
                <ScrollView>
                    {servicesImportants.slice(0, plus).map((item, key) => {
                        return (
                            <List.Accordion
                                key={key}
                                title={item.title}
                                onPress={() => setExpanded(!expanded)}
                            >
                                {
                                    item.items.map((item, key) => (
                                            <Card.Content key={key++}>
                                                <Title>{item.title}</Title>
                                                <Paragraph>
                                                    {item.detail}
                                                </Paragraph>
                                                <Button icon="phone"
                                                        onPress={() => dialCall(Number(item.numero))}>
                                                    {item.numero}
                                                </Button>
                                            </Card.Content>
                                        )
                                    )
                                }
                            </List.Accordion>
                        );
                    })
                    }
                </ScrollView>
            </List.Section>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1,
    },
    item: {
        marginBottom: 120,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
