import React from 'react';
import styled from 'styled-components';

const NewsletterContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #fff;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #ffa500;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const Newsletter: React.FC = () => (
  <NewsletterContainer>
    <Input type="email" placeholder="Insira o seu e-mail" />
    <Button>Assinar newsletter</Button>
  </NewsletterContainer>
);

export default Newsletter;
