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

/*pelo design do figma os inputs tem um espaçamento,  ideal e construir uma view para aplicar
esses estilos ao invés de reduzir os inputs,porque assim todos inputs vao manter mesma formatação */
export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
`;

/*button e separado dos campos de entrada de texto,boa solução e colocar uma view
em volta desse campo assim  consigo empurrar usando space-between a view pai,das view filhos
assim o botão vai ficar em baixo    */
export const FieldsForm = styled.View``;

export const ButtonTransition = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;
