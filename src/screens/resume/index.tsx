import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HistoryCard from '../../components/history-card';
import {Container, Header, Title, Content} from './style';
import {categories} from '../../util/categories';
import {TransitionCardListProps} from '../../components/transition-card';

interface TotalCategories {
  id: string;
  name: string;
  color: string;
  total: string;
}

export function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<TotalCategories[]>(
    [],
  );

  async function fetchCategory() {
    const dataKey = '@gofinances:transitions';
    const register = await AsyncStorage.getItem(dataKey);
    const currentRegister: TransitionCardListProps[] = register
      ? JSON.parse(register)
      : [];
    const expensive = currentRegister.filter(
      value => value.type === 'negative',
    );

    const totalCategory: TotalCategories[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expensive.forEach(expensive => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });
      if (categorySum > 0) {
        const total = categorySum.toLocaleString('pt-Br', {
          style: 'currency',
          currency: 'BRL',
        });

        totalCategory.push({
          id: category.key,
          name: category.name,
          total,
          color: category.color,
        });
      }
    });
    setTotalByCategories(totalCategory);
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <Content>
        {totalByCategories.map(category => (
          <HistoryCard
            key={category.id}
            title={category.name}
            color={category.color}
            amount={category.total}
          />
        ))}
      </Content>
    </Container>
  );
}
