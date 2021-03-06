import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {DataProps} from '.';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  /* estou realizando desestruturação mesma ideia de fazer ${props =>
    props.theme.colors.background}*/
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  /*vai ser convertido em number,mas styled componente precisa da unidade de medida   */
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const UserWrap = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.shape};
`;

export const UserName = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.secondary};
`;

export const CardHighlights = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingHorizontal: 24},
})`
  position: absolute;
  width: 100%;
  margin-top: ${RFPercentage(20)}px;
`;

export const ViewTransition = styled.View`
  flex: 1;
  margin-top: ${RFPercentage(13)}px;
  padding: 0 20px;
`;

export const TitleTransition = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(27)}px;
  color: ${({theme}) => theme.colors.titleDark};
`;

export const TransitionCardList = styled(
  FlatList as new () => FlatList<DataProps>,
  /*por estar usando react native com styled componente e desejo 
  estilizar pelo próprio styled component preciso fazer essa tipagem*/
).attrs({
  contentContainerStyle: {paddingBottom: getBottomSpace()},
  showsVerticalScrollIndicator: false,
})``;

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
