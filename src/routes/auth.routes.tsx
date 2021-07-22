import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SingIn from '../screens/sing-in';

const {Screen, Navigator} = createStackNavigator();

export function AuthRotes() {
  return (
    <Navigator headerMode="none">
      <Screen name="login" component={SingIn} />
    </Navigator>
  );
}
