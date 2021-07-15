import styled, {css} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from '../../global/theme';

type ContainerProps = {
  isActivity: boolean;
  type: 'up' | 'down';
};

type ColorIcon = {
  type: 'up' | 'down';
};

function backColor(color: string, activity: boolean) {
  const background = {
    up: theme.colors.success_light,
    /*ja esta em um objeto nao precisa colocar {} para acessar theme */
    down: theme.colors.attention_light,
  } as unknown as string;
  function colorSelected(color: string, activity: boolean) {
    return activity && background[color as any]
      ? background[color as any]
      : 'transparent';
  }
  /* ao definir o fundo de cor se sumir seu ícone possivelmente e a opacidade
  tenta diminuir  */
  return colorSelected(color, activity);
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  flex-direction: row;
  width: 46%;
  padding: 18px 0;
  border-width: ${({isActivity}) => (isActivity ? 0 : 1.5)}px;
  background-color: ${({isActivity, type}) => backColor(type, isActivity)};
  color: ${({theme}) => theme.colors.subTitle};
  border-style: solid;
  align-items: center;
  justify-content: center;
`;

/*estilizando pelo styled componente e altura do font size que faço
se for estilizar sem ser styled component e o height  e width */
export const Icon = styled(Feather)<ColorIcon>`
  font-size: ${RFValue(20)}px;
  color: ${({type, theme}) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
  margin: 0 14px;
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.title};
`;
