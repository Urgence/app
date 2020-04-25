import React from 'react';
import { store } from './src/helpers';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

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
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <Navigation/>
            </PaperProvider>
        </StoreProvider>
    );
}
