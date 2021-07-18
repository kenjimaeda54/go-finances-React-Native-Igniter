import React from 'react';
import {Container, Icon, Title} from './style';
import {RectButtonProps} from 'react-native-gesture-handler';

interface CategorySelectedProps extends RectButtonProps {
  title: string;
}

export function CategorySelectedButton({
  title,
  ...rest
}: CategorySelectedProps) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
}
