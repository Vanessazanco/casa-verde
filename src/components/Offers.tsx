import React from 'react';
import styled from 'styled-components';
import OfferCard from './OfferCard';


const OffersContainer = styled.section`
  padding: 50px 20px;
  background: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const Offers: React.FC = () => (
  <OffersContainer>
    <Title>Conheça nossas ofertas</Title>
    <Grid>
      <OfferCard name="Ajuga reptans" price="R$ 25,00" />
      <OfferCard name="Cordyline fruticosa" price="R$ 20,00" />
      <OfferCard name="Crassula ovata" price="R$ 15,00" />
      <OfferCard name="Cyperus rotundus" price="R$ 20,00" />
      <OfferCard name="Delairea odorata" price="R$ 25,00" />
      <OfferCard name="Datura metel" price="R$ 30,00" />
    </Grid>
  </OffersContainer>
);

export default Offers;
