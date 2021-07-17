import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import theme from '../../global/theme';

type CategoryProps = {
  isAcitivy: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(27)}px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.shape};
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  flex-direction: row;
  padding: 24px;
  align-items: center;
  background-color: ${({isAcitivy}) =>
    isAcitivy ? theme.colors.secondary_light : theme.colors.background};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(19)}px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.title};
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
