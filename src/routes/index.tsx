import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../hooks';
import {AppRoutes} from './app.routes';
import {AuthRotes} from './auth.routes';

export function Routes() {
  const {user} = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <AuthRotes />}
    </NavigationContainer>
  );
}
