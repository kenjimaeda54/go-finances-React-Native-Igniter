import React from 'react';
import {Container, Icon, Title} from './style';

type CategorySelectedProps = {
  title: string;
};

export function CategorySelected({title}: CategorySelectedProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
}
