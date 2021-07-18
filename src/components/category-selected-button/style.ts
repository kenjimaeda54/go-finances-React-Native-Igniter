import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  margin-top: 16px;
  width: 100%;
  padding: 18px 16px;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.shape};
  justify-content: space-between;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.subTitle};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.subTitle};
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
`;
