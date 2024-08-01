import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  text-align: center;
  padding: 50px 20px;
  background: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const Hero: React.FC = () => (
  <HeroContainer>
    <Title>Sua casa com as melhores plantas</Title>
    <Subtitle>Encontre aqui uma vasta seleção de plantas para decorar a sua casa.</Subtitle>
  </HeroContainer>
);

export default Hero;
