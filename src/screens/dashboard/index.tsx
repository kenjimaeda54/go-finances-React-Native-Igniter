import React from 'react';
import {CardHighlight} from '../../components/card-highlight';
import {
  TransitionCard,
  TransitionCardListProps,
} from '../../components/transition-card';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {
  Container,
  Header,
  UserWrap,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  CardHighlights,
  ViewTransition,
  TitleTransition,
  TransitionCardList,
} from './styles';

export type DataProps = TransitionCardListProps & {
  id: string;
};

export function Dashboard() {
  const data: DataProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de saite',
      amount: 'R$ 17.400,00',
      category: {
        name: 'vendas',
        icon: 'dollar-sign',
      },
      date: '13/04/20201',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hambúrguer Pizza',
      amount: 'R$ 59.00',
      category: {
        name: 'coffee',
        icon: 'coffee',
      },
      date: '13/04/20201',
    },

    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.200',
      category: {
        name: 'casa',
        icon: 'shopping-bag',
      },
      date: '13/04/20201',
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrap>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/31631601?v=4',
              }}
            />
            <User>
              <UserGreeting>Ola,</UserGreeting>
              <UserName>Ricardo</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrap>
      </Header>
      <CardHighlights>
        <CardHighlight
          amount="R$ 17.400,00"
          title="Entradas"
          description="Última entrada dia 13 de abril"
          type="up"
        />
        <CardHighlight
          amount="R$ 1.259,00"
          title="Saídas"
          description="Última saída dia 03 de abril"
          type="down"
        />
        <CardHighlight
          amount="R$ 16.141,00"
          title="Total"
          description="01 à 16 de abril"
          type="total"
        />
      </CardHighlights>
      <ViewTransition>
        <TitleTransition> Listagem </TitleTransition>
        <TransitionCardList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransitionCard data={item} />}
        />
      </ViewTransition>
    </Container>
  );
}
