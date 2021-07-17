import React, {useState} from 'react';
import {CategorySelectedButton} from '../../components/category-selected-button';
import {Modal} from 'react-native';
import {ButtonForm} from '../../components/form/button-form';
import {useForm} from 'react-hook-form';
import {TransitionButton} from '../../components/transition-button';
import {CategorySelected} from '../category-selected';
import {InputForm} from '../../components/form/text-input-form';
import {
  Container,
  Header,
  Title,
  Form,
  FieldsForm,
  ButtonTransition,
} from './styles';

type RegisterProps = {
  ammount: string;
  name: string;
};

export function Register() {
  const [transitionSelected, setTransitionSelected] = useState('');
  const [changeModal, setChangeModal] = useState(false);
  const [category, setCategory] = useState({
    key: 'Categoria',
    name: 'Categoria',
  });

  const {control, handleSubmit} = useForm();

  function handleTransitionSelected(type: 'up' | 'down') {
    setTransitionSelected(type);
  }

  function handleOpenModal() {
    setChangeModal(true);
  }

  function handleCloseModal() {
    setChangeModal(false);
  }

  function handleRegister(form: RegisterProps) {
    const registerForm = {
      name: form.name,
      ammount: form.ammount,
      transition: transitionSelected,
      category: category.name,
    };
    console.log(registerForm);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <FieldsForm>
          <InputForm name="name" placeholder="Nome" control={control} />
          <InputForm name="ammount" placeholder="Preco" control={control} />
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
          <CategorySelectedButton
            onPress={handleOpenModal}
            title={category.name}
          />
        </FieldsForm>
        <ButtonForm title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>
      <Modal visible={changeModal}>
        <CategorySelected
          category={category}
          setCategory={setCategory}
          closeModal={handleCloseModal}
        />
      </Modal>
    </Container>
  );
}
