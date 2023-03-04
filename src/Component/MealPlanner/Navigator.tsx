import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { extraRestaurant, navigatorState, studentRestaurant } from '../../Atom/NavigatorAct';
import Button from '../Button';

const StyledNavigator = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledDiv = styled.div<{ isSelected?: boolean }>`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0;
  border-radius: 0;

  border-bottom: solid ${(prop) => (prop.isSelected ? '2px #1A1A1A' : '1px #AFAFAF')};
`;

export const NavigatorStudent = (): JSX.Element => {
  const [activate, SetActivate] = useRecoilState(navigatorState);

  const onClick = (restaurant: studentRestaurant) => {
    SetActivate({
      ...activate,
      student: {
        first_first: restaurant === studentRestaurant.first_first,
        first_second: restaurant === studentRestaurant.first_second,
        second: restaurant === studentRestaurant.second,
      },
    });
  };

  return (
    <StyledNavigator>
      <StyledDiv isSelected={activate.student.first_first}>
        <Button
          onClick={() => {
            onClick(studentRestaurant.first_first);
          }}
        >
          1학식당(1층)
        </Button>
      </StyledDiv>
      <StyledDiv isSelected={activate.student.first_second}>
        <Button
          onClick={() => {
            onClick(studentRestaurant.first_second);
          }}
        >
          1학식당(2층)
        </Button>
      </StyledDiv>
      <StyledDiv isSelected={activate.student.second}>
        <Button
          onClick={() => {
            onClick(studentRestaurant.second);
          }}
        >
          2학식당
        </Button>
      </StyledDiv>
    </StyledNavigator>
  );
};

export const NavigatorExtra = (): JSX.Element => {
  const [activate, SetActivate] = useRecoilState(navigatorState);

  const onClick = (restaurant: extraRestaurant) => {
    SetActivate({
      ...activate,
      extra: {
        Renaissance: restaurant === extraRestaurant.Renaissance,
        RR: restaurant === extraRestaurant.RR,
      },
    });
  };

  return (
    <StyledNavigator>
      <StyledDiv isSelected={activate.extra.Renaissance}>
        <Button
          onClick={() => {
            onClick(extraRestaurant.Renaissance);
          }}
        >
          르네상스
        </Button>
      </StyledDiv>
      <StyledDiv isSelected={activate.extra.RR}>
        <Button
          onClick={() => {
            onClick(extraRestaurant.RR);
          }}
        >
          락락
        </Button>
      </StyledDiv>
    </StyledNavigator>
  );
};
