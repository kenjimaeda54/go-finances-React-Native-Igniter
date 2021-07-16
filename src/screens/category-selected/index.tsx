import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {ButtonForm} from '../../components/form/button-form';
import {categories} from '../../util/categories';
import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';

export function CategorySelected() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <FlatList
        data={categories}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <Category>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={() => <Separator />}
      />
      <Footer>
        <ButtonForm title="Enviar" />
      </Footer>
    </Container>
  );
}
