import React, {useEffect, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HistoryCard from '../../components/history-card';
import {useFocusEffect} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {addMonths, subMonths, format} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {
  Container,
  Header,
  Title,
  Content,
  ContainerChart,
  MonthSelected,
  MonthIconSelected,
  Icon,
  Month,
  ContainerLoader,
  TextLoader,
} from './style';
import {categories} from '../../util/categories';
import {useTheme} from 'styled-components';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {VictoryPie} from 'victory-native';
import {TransitionCardListProps} from '../../components/transition-card';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAuth} from '../../hooks';

interface TotalCategories {
  id: string;
  name: string;
  color: string;
  total: number;
  totalFormatted: string;
  percentExpensive: string;
}

export function Resume() {
  const {user} = useAuth();
  const {fonts, colors} = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [dateSelected, setDateSelected] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<TotalCategories[]>(
    [],
  );
  function changeDate(date: 'next' | 'prev') {
    setIsLoading(true);
    if (date === 'next') {
      setDateSelected(addMonths(dateSelected, 1));
    } else {
      setDateSelected(subMonths(dateSelected, 1));
    }
  }

  async function fetchCategory() {
    setIsLoading(true);
    const dataKey = `@gofinances:transitions_user:${user.id}`;
    const register = await AsyncStorage.getItem(dataKey);
    const currentRegister: TransitionCardListProps[] = register
      ? JSON.parse(register)
      : [];
    const expensive = currentRegister.filter(
      value =>
        value.type === 'negative' &&
        dateSelected.getMonth() === new Date(value.date).getMonth() &&
        dateSelected.getFullYear() === new Date(value.date).getFullYear(),
    );
    /* se colocar  arrow function => { preciso do retorno para funcionar} 
    agora se nao colocar entre os colchetes o retorno fica implícito */
    const expensiveTotal = currentRegister.reduce((acc, item) => {
      return acc + Number(item.amount);
    }, 0);

    const totalCategory: TotalCategories[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expensive.forEach(expensive => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });
      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString('pt-Br', {
          style: 'currency',
          currency: 'BRL',
        });

        const percentExpensive = `${(
          (categorySum / expensiveTotal) *
          100
        ).toFixed(0)}%`;

        totalCategory.push({
          id: category.key,
          name: category.name,
          totalFormatted,
          total: categorySum,
          color: category.color,
          percentExpensive,
        });
      }
    });
    setTotalByCategories(totalCategory);
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      fetchCategory();
    }, [dateSelected]),
  );

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      {isLoading ? (
        <ContainerLoader>
          <ActivityIndicator size="large" color={colors.primary} />
          <TextLoader> Carregando... </TextLoader>
        </ContainerLoader>
      ) : (
        <Content
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: useBottomTabBarHeight(),
            /*quando estiver trabalhando com  stack bootom e scroll,ideia colocar 
           essa propriedade do stackBottom*/
          }}>
          <MonthSelected>
            <MonthIconSelected onPress={() => changeDate('prev')}>
              <Icon name="chevron-left" />
              {/*se der erro de tipagem olha se esta no styled component (Feather)`` , sem o `` pode gerar erro de tipagem */}
            </MonthIconSelected>

            <Month>
              {/*caso comece a gerar erro de render formata a data*/}
              {format(dateSelected, 'MMM, yyyy', {
                locale: ptBR,
              })}
            </Month>

            <MonthIconSelected onPress={() => changeDate('next')}>
              <Icon name="chevron-right" />
            </MonthIconSelected>
          </MonthSelected>
          <ContainerChart>
            <VictoryPie
              style={{
                labels: {
                  fontSize: RFValue(16),
                  fontFamily: fonts.bold,
                  fontWeight: 700,
                  lineHeight: RFValue(24),
                  fill: colors.shape,
                  /*aqui e um svg então nao e color sim fill  */
                },
              }}
              labelRadius={70}
              colorScale={totalByCategories.map(colors => colors.color)}
              data={totalByCategories}
              x="percentExpensive"
              y="total"
            />
          </ContainerChart>
          {/*x e o y recebe o nome da variável,para referenciar no gráfico.
         Sera o mesmo nome que esta dentro do seu data=[{}] 
         Por exemplo total e o nome da variável que armazena o valor 
         que desejamos exibir*/}
          {totalByCategories.map(category => (
            <HistoryCard
              key={category.id}
              title={category.name}
              color={category.color}
              amount={category.totalFormatted}
            />
          ))}
        </Content>
      )}
    </Container>
  );
}
