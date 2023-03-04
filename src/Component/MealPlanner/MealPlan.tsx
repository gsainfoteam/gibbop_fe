import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { plannerAct } from '../../Atom/PlannerAct';
import IMealPlan from '../../interfaces/MealPlan';
import Button from '../Button';

const StyledMealPlan = styled.div<{ isActivate?: boolean }>`
  padding: 15px 15px;
  margin-right: 15px;

  border: 2px solid ${(prop) => (prop.isActivate ? '#FF6565' : '#AFAFAF')};

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

const StyledDate = styled.div<{ isActivate?: boolean }>`
  color: ${(prop) => (prop.isActivate ? '#FF6565' : '#AFAFAF')};

  margin-bottom: 14px;

  white-space: nowrap;
`;

const StyledList = styled.div`
  color: #1a1a1a;

  white-space: pre;
`;

const MealPlan = ({ date, list, id }: IMealPlan): JSX.Element => {
  const [activatedId, SetId] = useRecoilState(plannerAct);

  const onClick = (id: number) => {
    SetId(id);
  };

  return (
    <Button
      onClick={() => {
        onClick(id);
      }}
    >
      <StyledMealPlan isActivate={activatedId === id}>
        <StyledDate isActivate={activatedId === id}>{date}</StyledDate>
        <StyledList>{list}</StyledList>
      </StyledMealPlan>
    </Button>
  );
};

export default MealPlan;
