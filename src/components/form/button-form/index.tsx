import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Title} from './style';

type ButtonFormProps = TouchableOpacityProps & {
  title: string;
};

export function ButtonForm({title, ...rest}: ButtonFormProps) {
  return (
    <Container {...rest}>
      <Title> {title} </Title>
    </Container>
  );
}
