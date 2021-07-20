import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignTitle,
  Footer,
} from './style';

export default function SingIn() {
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
          uma das contas abaix{'\n'}
        </SignTitle>
      </Header>
      <Footer></Footer>
    </Container>
  );
}
