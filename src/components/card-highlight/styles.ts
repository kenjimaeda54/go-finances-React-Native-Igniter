import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(300)}px;
  background: ${({theme}) => theme.colors.shape};
  padding: 19px 23px;
  padding-bottom: 42px;
  margin-left: 16px;

  /*por ser em cascata o padding bottom vai subscrever o  valor em padding */
  /*uma boa pratica e deixar sem o height,assim a div tem altura de acordo com
  quantidade de conteúdo*/
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const Icon = styled(Feather)`
  font-size: 40px;
  color: ${({theme}) => theme.colors.success};
`;

export const Footer = styled.View`
  margin-top: 46px;
`;

export const Amount = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-weight: 400;
  font-size: ${RFValue(32)}px;
  line-height: ${RFValue(48)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.subTitle};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(18)}px;
`;
