import React from 'react';
import styled from 'styled-components';
import OfferCard from './OfferCard';

import ajugaReptans from '../assets/ajuga_reptans.png';
import cordylineFruticosa from '../assets/cordyline_fruticosa.png';
import crassulaOvata from '../assets/crassula_ovata.png';
import cyperusRotundus from '../assets/cyperus_rotundus.png';
import delaireaOdorata from '../assets/delairea_odorata.png';
import daturaMetel from '../assets/datura_metel.png';

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
      <OfferCard name="Ajuga reptans" price="R$ 25,00" image={ajugaReptans} />
      <OfferCard name="Cordyline fruticosa" price="R$ 20,00" image={cordylineFruticosa}/>
      <OfferCard name="Crassula ovata" price="R$ 15,00" image={crassulaOvata} />
      <OfferCard name="Cyperus rotundus" price="R$ 20,00" image={cyperusRotundus} />
      <OfferCard name="Delairea odorata" price="R$ 25,00" image={delaireaOdorata} />
      <OfferCard name="Datura metel" price="R$ 30,00" image={daturaMetel}/>
    </Grid>
  </OffersContainer>
);

export default Offers;
