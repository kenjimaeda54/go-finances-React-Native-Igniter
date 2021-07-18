import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  font-weight: 400;
  line-height: ${RFValue(21)}px;
  margin: 2px 0;
  color: ${({theme}) => theme.colors.attention};
`;
