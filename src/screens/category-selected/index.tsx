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

type Category = {
  key: string;
  name: string;
};

type CategorySelectedProps = {
  setCategory: (
    category: Category,
  ) => void /* ao inves de passar React.State posso passsar assim */;
  closeModal: () => void;
  category: Category;
};

export function CategorySelected({
  setCategory,
  closeModal,
  category,
}: CategorySelectedProps) {
  function categorySelected(item: Category) {
    setCategory(item);
  }

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>
      <FlatList
        data={categories}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <Category
            isAcitivy={item.key === category.key}
            onPress={() => categorySelected(item)}>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={() => <Separator />}
      />
      <Footer>
        <ButtonForm onPress={closeModal} title="Selecionar" />
      </Footer>
    </Container>
  );
}
