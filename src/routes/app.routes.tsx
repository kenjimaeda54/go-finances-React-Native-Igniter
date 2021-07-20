import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import {useTheme} from 'styled-components';
import {Dashboard} from '../screens/dashboard';
import {Register} from '../screens/register';
import {RFValue} from 'react-native-responsive-fontsize';
import {Platform} from 'react-native';
import {Resume} from '../screens/resume';

const {Screen, Navigator} = createBottomTabNavigator();

export default function AppRoutes() {
  const {colors, fonts} = useTheme();
  /*foi possível pegar pela determinação em styled.d.ts  */
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.subTitle,
        labelPosition: 'beside-icon',
        style: {
          height: RFValue(88),
          padding: Platform.OS === 'ios' ? 20 : 0,
        },
        labelStyle: {
          fontFamily: fonts.regular,
          fontSize: RFValue(14),
          lineHeight: RFValue(21),
        },
      }}>
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons size={size} color={color} name="menu" />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons size={size} color={color} name="attach-money" />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons size={size} color={color} name="pie-chart" />
          ),
        }}
      />
    </Navigator>
  );
}
