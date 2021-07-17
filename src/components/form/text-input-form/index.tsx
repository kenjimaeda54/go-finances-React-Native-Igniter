import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {TextInputForm} from '../text-input';
import {Container} from './styles';

type InputFormProps = TextInputProps & {
  control: Control;
  name: string;
};

export function InputForm({control, name, ...rest}: InputFormProps) {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}}) => (
          <TextInputForm onChangeText={onChange} value={value} {...rest} />
        )}
      />
    </Container>
  );
}
