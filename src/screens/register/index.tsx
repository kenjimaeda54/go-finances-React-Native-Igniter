import React, {useState, useEffect} from 'react';
import {CategorySelectedButton} from '../../components/category-selected-button';
import {Alert, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ButtonForm} from '../../components/form/button-form';
import {useForm} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TransitionButton} from '../../components/transition-button';
import {CategorySelected} from '../category-selected';
import {InputForm} from '../../components/form/text-input-form';
import uuid from 'react-native-uuid';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  Container,
  Header,
  Title,
  Form,
  FieldsForm,
  ButtonTransition,
} from './styles';

type RegisterProps = {
  amount: string;
  name: string;
};

const schema = Yup.object().shape({
  name: Yup.string().required('Nome e obrigatório'),
  amount: Yup.number()
    .typeError('Precisa ser numérico')
    .positive('Precisa ser números positivos')
    .required('Preço e obrigatório'),
});

export function Register() {
  const [transitionSelected, setTransitionSelected] = useState('');
  const [changeModal, setChangeModal] = useState(false);
  const [category, setCategory] = useState({
    key: 'Categoria',
    name: 'Categoria',
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dataKey = '@gofinances:transitions';
  const navigation = useNavigation();

  function handleTransitionSelected(type: 'positive' | 'negative') {
    setTransitionSelected(type);
  }

  function handleOpenModal() {
    setChangeModal(true);
  }

  function handleCloseModal() {
    setChangeModal(false);
  }

  async function handleRegister(form: RegisterProps) {
    if (!transitionSelected) {
      return Alert.alert('Precisa selecionar uma transação');
    }
    if (category.name === 'Categoria') {
      return Alert.alert('Precisa selecionar uma categoria');
    }

    const newRegister = {
      id: `${uuid.v4()}`,
      name: form.name,
      amount: form.amount,
      type: transitionSelected,
      category: category.key,
      date: new Date(),
    };

    try {
      const register = await AsyncStorage.getItem(dataKey);
      /*cuidado esquecer o await */
      const currentRegister = register ? JSON.parse(register) : [];
      const data = [...currentRegister, newRegister];
      await AsyncStorage.setItem(dataKey, JSON.stringify(data));
      reset();
      setCategory({
        key: 'Categoria',
        name: 'Categoria',
      });
      setTransitionSelected('');
      navigation.navigate('Listagem');
    } catch (error) {
      console.log(error);
      Alert.alert('Nao foi possível salvar');
    }
  }

  function handleKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={handleKeyboard}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <FieldsForm>
            <InputForm
              error={errors.name && errors.name.message}
              /*precisa verificar se existe erro,porque caso nao tenha vai
            gerar undefined  */
              control={control}
              name="name"
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="sentences"
            />
            <InputForm
              error={errors.amount && errors.amount.message}
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
            />
            <ButtonTransition>
              <TransitionButton
                description="Income"
                onPress={() => handleTransitionSelected('positive')}
                isActivity={transitionSelected === 'positive'}
                type="up"
              />
              <TransitionButton
                description="Income"
                onPress={() => handleTransitionSelected('negative')}
                isActivity={transitionSelected === 'negative'}
                type="down"
              />
            </ButtonTransition>
            <CategorySelectedButton
              onPress={handleOpenModal}
              title={category.name}
            />
          </FieldsForm>
          <ButtonForm title="Enviar" onPress={handleSubmit(handleRegister)} />
          {/*uma solução para tipagens e voce criar a sua,neste caso foi criada uma para onPress
          react form estava gerando conflito  
          preferir por trabalhar com interface e  extends */}
        </Form>
        <Modal visible={changeModal}>
          <CategorySelected
            category={category}
            setCategory={setCategory}
            closeModal={handleCloseModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
