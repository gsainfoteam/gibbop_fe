import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { ReactComponent as LogoImg } from '../../images/infoteamLogo.svg';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 32px;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <Link to="/">
        <Button color="#FF6565">
          <StyledLogo>
            <LogoImg height="30" fill="#FF6565" />
            GIBBOP
          </StyledLogo>
        </Button>
      </Link>
      <Link to="/my">
        <Button>MY</Button>
      </Link>
    </StyledHeader>
  );
};

export default Header;
