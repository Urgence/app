import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Navigation from './src/navigation';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
    },
};

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <Navigation/>
        </PaperProvider>
    );
}
