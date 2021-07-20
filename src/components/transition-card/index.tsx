import React from 'react';
import {categories} from '../../util/categories';
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

export interface TransitionCardListProps {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface TransitionCardProps {
  data: TransitionCardListProps;
}

export function TransitionCard({data}: TransitionCardProps) {
  /*category vai retornar category[
    {objeto que desejo}
  ]  */
  /* [category ] e um destruction, ao filtrar o array de objetos
  com nome categories, vai retornar um array com os valores correspondentes,
  ao colocar entre chaves([]) pego  so os valores internos.
  Para type script entender tipagem 
  e necessário realizar primeiro essa operação,se nao vai dar 
  opção apenas de map,filter... ja que  category sera um array */
  const [category] = categories.filter(value => data.category === value.key);
  return (
    <Container>
      <TitleCard>{data.name}</TitleCard>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>
      <Footer>
        <CategoryCard>
          <Icon name={category.icon} />
          <Description>{category.name}</Description>
        </CategoryCard>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
