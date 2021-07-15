import React from 'react';
import {TextInputProps} from 'react-native';
import {Container} from './styles';

type TextInputFormProps = TextInputProps;

export function TextInputForm({...rest}: TextInputFormProps) {
  return <Container {...rest} />;
}
