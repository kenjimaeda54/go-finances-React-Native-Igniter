import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
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
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
