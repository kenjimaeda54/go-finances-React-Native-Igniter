import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from '../../global/theme';

type TypeProps = {
  type: 'up' | 'down' | 'total';
};

function colorIcon(type: string) {
  const color = {
    up: theme.colors.success,
    down: theme.colors.attention,
    total: theme.colors.shape,
  } as unknown as string;
  function typeColor(type: string) {
    return color[type as any] && color[type as any];
  }

  return typeColor(type);
}

export const Container = styled.View<TypeProps>`
  width: ${RFValue(300)}px;
  background: ${({type}) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  padding: 19px 23px;
  padding-bottom: 42px;
  margin-left: 16px;
  border-radius: 5px;

  /*por ser em cascata o padding bottom vai subscrever o  valor em padding */
  /*uma boa pratica e deixar sem o height,assim a div tem altura de acordo com
  quantidade de conteúdo*/
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  color: ${({type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: 40px;
  color: ${({type}) => colorIcon(type)};
`;

export const Footer = styled.View`
  margin-top: 46px;
`;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-weight: 400;
  font-size: ${RFValue(32)}px;
  line-height: ${RFValue(48)}px;
  color: ${({type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const Description = styled.Text<TypeProps>`
  color: ${({type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.subTitle};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(18)}px;
`;
