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

interface Category {
  key: string;
  name: string;
}

interface CategorySelectedProps {
  setCategory: (
    category: Category,
  ) => void /* ao invés de passar React.State posso passar assim */;
  closeModal: () => void;
  category: Category;
}

export function CategorySelected({
  setCategory,
  closeModal,
  category,
}: CategorySelectedProps) {
  function categorySelected(item: Category) {
    setCategory(item);
  }

  /*Para usar os botoes do react-native gesture handler precisa usar a view 
GestureHandlerRootView quando estamos lindando com efeito de modal.
Concluindo s buttonForm e quem fecha o modal,então a view em torno precisa ser
uma view GestureHandlerRootView */
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
