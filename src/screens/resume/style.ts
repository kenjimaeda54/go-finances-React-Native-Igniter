import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${RFValue(113)}px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
  padding: 19px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(27)}px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.shape};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {flex: 1, padding: 24},
})``;
