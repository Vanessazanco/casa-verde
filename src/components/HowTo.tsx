import React from 'react';
import styled from 'styled-components';

const HowToContainer = styled.section`
  text-align: center;
  padding: 50px 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 18px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '✔';
    margin-right: 10px;
    color: #ffa500;
  }
`;

const HowTo: React.FC = () => (
  <HowToContainer>
    <Title>Como conseguir minha planta</Title>
    <List>
      <ListItem>Escolha suas plantas</ListItem>
      <ListItem>Faça seu pedido</ListItem>
      <ListItem>Aguarde na sua casa</ListItem>
    </List>
  </HowToContainer>
);

export default HowTo;
