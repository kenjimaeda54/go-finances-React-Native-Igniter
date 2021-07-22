import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider} from './src/hooks';
import {StatusBar} from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import theme from './src/global/theme';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {Routes} from './src/routes';

export default function App() {
  const [fontsLoading] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Provider>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}
