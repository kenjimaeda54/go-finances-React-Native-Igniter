import styled, {css} from 'styled-components/native';
import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface ContainerProps {
  isAcitivy?: boolean;
}
//isAcitivy e apenas para testes
export const Container = styled(TextInput)<ContainerProps>`
  width: 100%;
  /*para manter o espaçamento desejado será construido uma view em torno dos inputs
  assim posso fazer os estilos dos inputs da forma que desejo e se precisar
  aplicar um estilo especifico será aplicado nessa view   */
  border-radius: 5px;
  padding: 18px 16px;
  background-color: ${({theme}) => theme.colors.shape};
  margin-bottom: 5px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.titleDark};
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  ${({isAcitivy, theme}) =>
    isAcitivy &&
    css`
      border-width: 3px;
      border-color: ${theme.colors.primary};
    `}
`;
