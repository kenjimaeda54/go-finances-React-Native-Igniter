import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${({theme}) => theme.colors.shape};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 16px;
  margin: 16px 0;
  border-radius: 5px;
  height: 56px;
`;

export const ViewSvg = styled.View`
  border-right-width: 1px;
  border-right-color: ${({theme}) => theme.colors.background};
  border-style: solid;
  height: 100%;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  flex: 1; /*se precisar alinhar algo no centro e nao esta conseguindo tenta primeiro o flex 1
 para ocupar tudo disponível para ele */
  text-align: center;
  font-family: ${({theme}) => theme.fonts.medium};
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  color: ${({theme}) => theme.colors.title};
`;
