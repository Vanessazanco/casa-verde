import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
  }
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo>CasaVerde</Logo>
    <Nav>
      <a href="#">Como fazer</a>
      <a href="#">Ofertas</a>
      <a href="#">Depoimentos</a>
      <a href="#">Vídeos</a>
      <a href="#">Meu carrinho</a>
    </Nav>
  </HeaderContainer>
);

export default Header;
