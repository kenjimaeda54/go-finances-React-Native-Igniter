import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  border-radius: 5px;
  height: ${RFValue(56)}px;
  background-color: ${({theme}) => theme.colors.secondary};
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.shape};
  padding: 18px 0;
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
`;
