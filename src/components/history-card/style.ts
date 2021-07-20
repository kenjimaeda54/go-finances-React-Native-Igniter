import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({theme}) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({color}) => color};
  padding: 13px 24px;
  margin: 8px 0;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-weight: 400;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(22)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const Amount = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-weight: 700;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(22)}px;
  color: ${({theme}) => theme.colors.title};
`;
