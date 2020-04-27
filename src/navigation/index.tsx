import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from '../views';

// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) =>
                ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-home' : 'ios-home';
                        } else if (route.name === 'Test') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}
                           tabBarOptions={{
                               activeTintColor: 'tomato',
                               inactiveTintColor: 'gray',
                           }}
            >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Test" component={HomeScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
