import React, {Fragment, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';
import {useAuth} from '../../hooks';
import {ButtonLoginSocial} from '../../components/button-login-social';
import {Alert, ActivityIndicator, Platform} from 'react-native';
import Logo from '../../assets/logo.svg';
import Google from '../../assets/google.svg';
import Apple from '../../assets/apple.svg';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignTitle,
  Footer,
  FooterWrap,
} from './style';

export default function SingIn() {
  const {colors} = useTheme();
  const {user, singInGoogle} = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSingGoogle() {
    try {
      setIsLoading(true);
      singInGoogle();
      if (user.id) {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Nao foi possível logar');
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Logo width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples {'\n'}
          </Title>
        </TitleWrapper>
        <SignTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo{'\n'}
        </SignTitle>
      </Header>
      <Footer>
        <FooterWrap>
          {isLoading ? (
            <ActivityIndicator color={colors.attention} size="large" />
          ) : (
            <Fragment>
              <ButtonLoginSocial
                onPress={handleSingGoogle}
                title="Entrar com Google"
                svg={Google}
              />
              {Platform.OS === 'ios' && (
                <ButtonLoginSocial title="Entrar com Apple" svg={Apple} />
              )}
            </Fragment>
          )}
        </FooterWrap>
      </Footer>
    </Container>
  );
}
