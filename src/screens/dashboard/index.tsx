import React from 'react';
import {CardHighlight} from '../../components/card-highlight';
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
} from './styles';

export function Dashboard() {
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
        <CardHighlight />
        <CardHighlight />
        <CardHighlight />
      </CardHighlights>
    </Container>
  );
}
