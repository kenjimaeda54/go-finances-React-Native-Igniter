import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {Container, Title} from './style';

interface ButtonFormProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function ButtonForm({title, onPress, ...rest}: ButtonFormProps) {
  return (
    <Container onPress={onPress} {...rest}>
      <Title> {title} </Title>
    </Container>
  );
}
