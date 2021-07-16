import React, {useState} from 'react';
import {CategorySelected} from '../../components/category-selected';
import {ButtonForm} from '../../components/form/button-form';
import {TextInputForm} from '../../components/form/text-input';
import {TransitionButton} from '../../components/transition-button';
import {
  Container,
  Header,
  Title,
  Form,
  FieldsForm,
  ButtonTransition,
} from './styles';

export function Register() {
  const [transitionSelected, setTransitionSelected] = useState('');

  function handleTransitionSelected(type: 'up' | 'down') {
    setTransitionSelected(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <FieldsForm>
          <TextInputForm placeholder="Nome" />
          <TextInputForm placeholder="Preço" />
          <ButtonTransition>
            <TransitionButton
              description="Income"
              onPress={() => handleTransitionSelected('up')}
              isActivity={transitionSelected === 'up'}
              type="up"
            />
            <TransitionButton
              description="Income"
              onPress={() => handleTransitionSelected('down')}
              isActivity={transitionSelected === 'down'}
              type="down"
            />
          </ButtonTransition>
          <CategorySelected title="Categoria" />
        </FieldsForm>

        <ButtonForm title="Enviar" />
      </Form>
    </Container>
  );
}
