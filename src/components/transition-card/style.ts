import styled, {ThemeContext} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from '../../global/theme';

interface AmountProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  height: ${RFValue(127)}px;
  width: ${RFValue(327)}px;
  padding: 17px 24px;
  margin-bottom: 16px;
  border-radius: 5px;
`;

export const TitleCard = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  color: ${({theme}) => theme.colors.title};
  margin: 2px 0;
`;

export const Amount = styled.Text<AmountProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-weight: 400;
  line-height: ${RFValue(30)}px;
  font-size: ${RFValue(20)}px;
  color: ${({type}) =>
    type === 'negative' ? theme.colors.attention : theme.colors.success};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${RFValue(101)}px;
  margin: 19px 0;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.subTitle};
  font-size: ${RFValue(14)}px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  color: ${({theme}) => theme.colors.subTitle};
  font-family: ${({theme}) => theme.fonts.regular};
  font-weight: 400;
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  color: ${({theme}) => theme.colors.subTitle};
  font-family: ${({theme}) => theme.fonts.regular};
  font-weight: 400;
`;
