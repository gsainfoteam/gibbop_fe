import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 32px;
`;

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <Link to="/">
        <Button color="#FF6565"> </Button>
      </Link>
      <Link to="/my">
        <Button>MY</Button>
      </Link>
    </StyledHeader>
  );
};

export default Header;
