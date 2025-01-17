import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import {
	EmergencyServicesScreen,
	HomeScreen,
	PlaceInfo,
	SearchScreen,
} from '../views';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../views/LoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Discover" component={PlaceInfo} />
		</Stack.Navigator>
	);
}

export default function Navigation() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Login"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === 'Home') {
							iconName = focused ? 'ios-home' : 'ios-home';
						} else if (route.name === 'Search') {
							iconName = focused ? 'ios-search' : 'ios-search';
						} else if (route.name === 'Information') {
							iconName = focused ? 'ios-information' : 'ios-information';
						}
						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: 'tomato',
					inactiveTintColor: 'gray',
				}}
			>
				<Tab.Screen name="Home" component={HomeStack} />
				<Tab.Screen name="Search" component={SearchScreen} />
				<Tab.Screen name="Information" component={EmergencyServicesScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
// const Homeoptions = (routes) => {
//     if (routes.name === 'Login') {
//         return { tabBarVisible: true };
//     }
// };
