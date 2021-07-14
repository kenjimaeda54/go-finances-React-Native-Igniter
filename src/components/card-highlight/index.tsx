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

type CardHighlightProps = {
  title: string;
  type: 'up' | 'down' | 'total';
  amount: string;
  description: string;
};

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};

export function CardHighlight({
  title,
  type,
  amount,
  description,
}: CardHighlightProps) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <Description type={type}>{description}</Description>
      </Footer>
    </Container>
  );
}
