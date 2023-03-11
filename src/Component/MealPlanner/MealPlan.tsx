import moment from 'moment';
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
  text-align:left
`;

const MealPlan = ({ meal_date, meal, id }: IMealPlan): JSX.Element => {
  const [activatedId, SetId] = useRecoilState(plannerAct);

  const onClick = (id: number) => {
    SetId(id);
  };

  const hour = moment(meal_date).hour()
  let time = ' 아침';
  if(hour > 11 && hour < 13) {
    time = ' 점심';
  } else if (hour >= 14 ) {
    time = ' 저녁';
  }

  const displayTimeFormat = moment(meal_date).format('M월 DD일 (dd)') + time;

  return (
      <StyledMealPlan isActivate={activatedId === id}>
        <Button onClick={()=>{onClick(id)}}>
          <StyledDate isActivate={activatedId === id}>{displayTimeFormat}</StyledDate>
          <StyledList>{meal}</StyledList>
        </Button >
      </StyledMealPlan>
  );
};

export default MealPlan;
