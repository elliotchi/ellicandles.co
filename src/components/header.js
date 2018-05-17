import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const BackgroundHeader = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1800px;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  margin: 0;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
`;

const Header = () => (
  <BackgroundHeader>
    <Title>
      <StyledLink to="/">ellicandles 🕯️</StyledLink>
    </Title>
  </BackgroundHeader>
);

export default Header;
