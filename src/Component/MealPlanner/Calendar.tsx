import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { isCalendarActivated } from '../../Atom/calendar';
import { pickedDate } from '../../Atom/Date';
import Button from '../Button';

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding-bottom: 15px;
`;

const CalendarArea = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  * {
    background-color: transparent;
  }
`;

const ButtonArea = styled.div`
  width: auto;
  display: flex;
  flex-direction: row-reverse;
  padding-top: 5px;
  padding-right: 10px;
`;

const InsideButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 86px;
  height: 36px;

  color: #ffffff;
  background-color: #ff6565;
`;

const Mealcalendar = (): JSX.Element => {
  const [date, SetDate] = useRecoilState(pickedDate);
  const [isCA, setCA] = useRecoilState(isCalendarActivated);

  const onClick = (): void => {
    setCA(false);
  };

  return (
    <DarkBackground>
      <StyledContainer>
        <CalendarArea>
          <Calendar onChange={SetDate} value={date} />
        </CalendarArea>
        <ButtonArea>
          <Button onClick={onClick}>
            <InsideButton>확인</InsideButton>
          </Button>
        </ButtonArea>
      </StyledContainer>
    </DarkBackground>
  );
};

export default Mealcalendar;
