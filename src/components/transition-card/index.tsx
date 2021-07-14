import React from 'react';
import {View, Text} from 'react-native';
import {
  Container,
  TitleCard,
  Amount,
  Footer,
  CategoryCard,
  Icon,
  Description,
  Date,
} from './style';

type CategoryProps = {
  name: string;
  icon: string;
};

export type TransitionCardListProps = {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
};

type TransitionCardProps = {
  data: TransitionCardListProps;
};

export function TransitionCard({data}: TransitionCardProps) {
  return (
    <Container>
      <TitleCard>{data.title}</TitleCard>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>
      <Footer>
        <CategoryCard>
          <Icon name={data.category.icon} />
          <Description>{data.category.name}</Description>
        </CategoryCard>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
