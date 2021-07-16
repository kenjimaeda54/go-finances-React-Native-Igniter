import React from 'react';
import {Dashboard} from './src/screens/dashboard';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import {Register} from './src/screens/register';
import {CategorySelected} from './src/screens/category-selected';

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
      <CategorySelected />
    </ThemeProvider>
  );
}
