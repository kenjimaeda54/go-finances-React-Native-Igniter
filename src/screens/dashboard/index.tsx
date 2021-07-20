import React, {useState, useEffect, useCallback, Fragment} from 'react';
import {CardHighlight} from '../../components/card-highlight';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import {Alert, ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TransitionCard,
  TransitionCardListProps,
} from '../../components/transition-card';
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
  ContainerLoader,
  TextLoader,
} from './styles';

export interface DataProps extends TransitionCardListProps {
  id: string;
}

interface HighlighAmountProps {
  amount: string;
  lastTransition: string;
}

interface HighlighAmount {
  entry: HighlighAmountProps;
  expensive: HighlighAmountProps;
  total: HighlighAmountProps;
}

/* dentro do map vai retornar um array de objeto do tipo entry[{}] e outro
do tipo expensive [{}] tipado assim consigo pegar as propriedades*/

export function Dashboard() {
  const {colors} = useTheme();
  const [transition, setTransition] = useState<DataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [amountTotal, setAmountTotal] = useState<HighlighAmount>(
    {} as HighlighAmount,
  );
  const dataKey = '@gofinances:transitions';

  function getLastTransactionDate(
    collection: DataProps[],
    type: 'positive' | 'negative',
  ) {
    const lastTransaction = new Date(
      Math.max.apply(
        Math,
        collection
          .filter(transaction => transaction.type === type)
          .map(transaction => new Date(transaction.date).getTime()),
      ),
    );
    /* Math.max.apply retorna maior numero de um array */
    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
      'pt-BR',
      {month: 'long'},
    )}`;
  }

  async function fetchData() {
    /*cuidados com variáveis globais,desejo apenas somar os valores 
    e setar setAmountTotal, aqui dentro, então 
    se a variável tirar fora daqui,vai ser recarregada de acordo com
    nossos componentes. Gerando valores errados */
    let expensiveTotal = 0;
    let entryTotal = 0;
    const response = await AsyncStorage.getItem(dataKey);
    const fetchAsyncStorage = response ? JSON.parse(response) : [];
    const formattedAsyncStorage: DataProps[] = fetchAsyncStorage.map(
      (value: DataProps) => {
        if (value.type === 'positive') {
          entryTotal += Number(value.amount);
        }
        if (value.type === 'negative') {
          expensiveTotal += Number(value.amount);
        }

        const amount = Number(value.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(value.date));
        /*cuidado com a estrutura do dateTimeFormate
        atenção ele retorna uma string,data formatada */

        return {
          id: value.id,
          amount,
          date,
          name: value.name,
          category: value.category,
          type: value.type,
        };
      },
    );
    setTransition(formattedAsyncStorage);
    const lastTransitionEntries = getLastTransactionDate(
      fetchAsyncStorage,
      'positive',
    );
    const lastTransitionExpensive = getLastTransactionDate(
      fetchAsyncStorage /*nao posso enviar os formatados se nao consigo pegar */,
      'negative' /*  as atualizações recentes, meu data precisar ser puro
                         os formatos nao sao puros*/,
    );
    const totalLastTransition = `01 a ${lastTransitionExpensive}`;
    let totalAmount = entryTotal - expensiveTotal;
    setAmountTotal({
      entry: {
        amount: entryTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransition: lastTransitionEntries,
      },
      expensive: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransition: lastTransitionExpensive,
      },
      total: {
        amount: totalAmount.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransition: totalLastTransition,
      },
    });
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <Container>
      {isLoading ? (
        <ContainerLoader>
          <ActivityIndicator size="large" color={colors.primary} />
          <TextLoader> Carregando... </TextLoader>
        </ContainerLoader>
      ) : (
        <Fragment>
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
              <BorderlessButton onPress={() => {}}>
                <Icon name="power" />
              </BorderlessButton>
            </UserWrap>
          </Header>
          <CardHighlights>
            <CardHighlight
              amount={amountTotal.entry.amount}
              title="Entradas"
              description={`Ultima entrada dia ${amountTotal.entry.lastTransition}`}
              type="up"
            />
            <CardHighlight
              amount={amountTotal.expensive.amount}
              title="Saídas"
              description={`Ultima saida dia ${amountTotal.expensive.lastTransition}`}
              type="down"
            />
            <CardHighlight
              amount={amountTotal.total.amount}
              title="Total"
              description={amountTotal.total.lastTransition}
              type="total"
            />
          </CardHighlights>
          <ViewTransition>
            <TitleTransition> Listagem </TitleTransition>
            <TransitionCardList
              data={transition}
              keyExtractor={item => item.id}
              renderItem={({item}) => <TransitionCard data={item} />}
            />
          </ViewTransition>
        </Fragment>
      )}
    </Container>
  );
}
