import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { ReactComponent as Res1 } from '../../images/restaurant1.svg';
import { ReactComponent as Res2 } from '../../images/restaurant2.svg';
import { useRecoilState } from 'recoil';
import { bottomNaviState, Restaurant } from '../../Atom/NavigatorAct';

const StyledBottomNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 65px;
  border-top: 1px solid #c0c0c0;
  display: flex;
  justify-content: space-around;
`;

const StyledDiv = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNav = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(prop) => (prop.isSelected ? '#FF6565' : '#AFAFAF')};
  * {
    fill: ${(prop) => (prop.isSelected ? '#FF6565' : '#AFAFAF')};
  }
`;

const BottomNav = (): JSX.Element => {
  const [activate, SetActivate] = useRecoilState(bottomNaviState);
  const onClick = (res: Restaurant): void => {
    SetActivate({
      student: res === Restaurant.student,
      extra: res === Restaurant.extra,
    });
  };

  return (
    <StyledBottomNav>
      <StyledDiv>
        <Button
          onClick={() => {
            onClick(Restaurant.student);
          }}
        >
          <StyledNav isSelected={activate.student}>
            <Res1 height="30" />
            학생식당
          </StyledNav>
        </Button>
      </StyledDiv>
      <StyledDiv>
        <Button
          onClick={() => {
            onClick(Restaurant.extra);
          }}
        >
          <StyledNav isSelected={activate.extra}>
            <Res2 height="30" />
            르네상스/락락
          </StyledNav>
        </Button>
      </StyledDiv>
    </StyledBottomNav>
  );
};

export default BottomNav;
