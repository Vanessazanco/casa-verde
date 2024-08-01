import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
`;

const PlantName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 18px;
  color: #666;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background: #ffa500;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

interface OfferCardProps {
  name: string;
  price: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ name, price }) => (
  <Card>
    <PlantName>{name}</PlantName>
    <Price>{price}</Price>
    <Button>Comprar</Button>
  </Card>
);

export default OfferCard;
