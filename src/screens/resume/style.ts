import {RFValue} from 'react-native-responsive-fontsize';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
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

export const Content = styled.ScrollView``;

export const ContainerChart = styled.View`
  width: 100%;
  align-items: center;
`;

export const MonthSelected = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 41px;
`;

export const MonthIconSelected = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
`;

export const Month = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(30)}px;
  color: ${({theme}) => theme.colors.titleDark};
  font-weight: 400;
`;
export const ContainerLoader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextLoader = styled.Text`
  margin-top: 5px;
  font-family: ${({theme}) => theme.fonts.regular};
  line-height: ${RFValue(21)}px;
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.attention};
`;
