import React from 'react';
import {TextInputProps} from 'react-native';
import {Container} from './styles';

interface TextInputFormProps extends TextInputProps {
  isAcitivy?: boolean;
}
//isAcitivy e apenas para teste
export function TextInputForm({isAcitivy, ...rest}: TextInputFormProps) {
  return <Container isAcitivy={isAcitivy} {...rest} />;
}
