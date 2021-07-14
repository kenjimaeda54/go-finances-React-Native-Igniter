import React from 'react';
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  Description,
} from './styles';

export function CardHighlight() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <Description>Última entrada dia 13 de abril</Description>
      </Footer>
    </Container>
  );
}
