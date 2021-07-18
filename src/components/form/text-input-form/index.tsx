import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {TextInputForm} from '../text-input';
import {Container, Error} from './styles';

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export function InputForm({control, name, error, ...rest}: InputFormProps) {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInputForm onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error> {error} </Error>}
    </Container>
  );
}
