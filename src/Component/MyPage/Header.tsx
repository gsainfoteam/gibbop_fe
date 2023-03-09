import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import { ReactComponent as Backward } from '../../images/backward.svg';
import { ReactComponent as Setting } from '../../images/setting.svg';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 32px;
`;

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <Link to="/">
        <Button color="#FF6565">
          <Backward />
        </Button>
      </Link>
      <Link to="/setting">
        <Button><Setting /></Button>
      </Link>
    </StyledHeader>
  );
};

export default Header;
