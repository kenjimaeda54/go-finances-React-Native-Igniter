import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import theme from './src/global/theme';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import AppRoutes from './src/routes/app.routes';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import SingIn from './src/screens/sing-in';

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
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <SingIn />
      </NavigationContainer>
    </ThemeProvider>
  );
}
