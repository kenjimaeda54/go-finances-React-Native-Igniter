import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  /* estou realizando desestruturação mesma ideia de fazer ${props =>
    props.theme.colors.background}*/
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  /*vai ser convertido em number,mas styled componente precisa da unidade de medida   */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const UserWrap = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.shape};
`;

export const UserName = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.secondary};
`;
