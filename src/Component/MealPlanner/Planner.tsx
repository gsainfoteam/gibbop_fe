import React, { useEffect, useState } from 'react';
import Button from '../Button';
import { ReactComponent as CalenderImg } from '../../images/calendar.svg';
import styled from 'styled-components';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import IMealPlan from '../../interfaces/MealPlan';
import MealPlan from './MealPlan';
import { useRecoilState, useRecoilValue } from 'recoil';
import { navigatorState } from '../../Atom/Navigator';
import { isCalendarActivated } from '../../Atom/calendar';
import { pickedDate } from '../../Atom/Date';
import moment from 'moment';
import 'moment/locale/ko';
import axios from 'axios';
import Menu from './Menu';

const SelectDate = styled.div`
  display: flex;
  padding-left: 30px;
  padding-top: 15px;
  margin-bottom: 20px;
`;

const ShowLoc = styled.div`
  padding-left: 30px;
  padding-top: 15px;
  margin-bottom: 20px;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
`;

const ShowDate = styled.div`
  margin-right: 8px;
  height: 25px;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
`;

const Container = styled.div`
  overflow: hidden;
  margin-left: 30px;
`;

export const PlannerStudent = (): JSX.Element => {
  const currentNavigator = useRecoilValue(navigatorState);
  const [isCA, setCA] = useRecoilState(isCalendarActivated);
  const currentDate = useRecoilValue(pickedDate);
  const [mealPlans, setMealPlans] = useState<{ id: number; meal_date: string; meal: string }[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchMealPlan = async () => {
      try {
        setError(null);
        setMealPlans([]);
        setLoading(true);

        let restaurant = '1학 1층';
        if (currentNavigator.student.first_second) restaurant = '1학 2층';
        if (currentNavigator.student.second) restaurant = '2학';

        console.log(restaurant);
        const res = await axios.get<{ id: number; meal_date: string; meal: string }[]>(
          'http://localhost:3000/meal_plan/cafeteria',
          {
            params: {
              date: currentDate,
              restaurant,
            },
          }
        );
        setMealPlans(res.data);
      } catch (e: any) {
        console.log(e);
        setError(e);
      }
      setLoading(false);
    };
    FetchMealPlan();
  }, [currentDate, currentNavigator]);

  const onClick = (): void => {
    setCA(true);
    console.log(isCA);
  };

  if (!mealPlans) return <>no!</>;
  if (error) return <>error</>;
  if (loading) return <>Loading</>;
  return (
    <>
      <SelectDate>
        <ShowDate>{moment(currentDate).format('YYYY년 MM월 DD일 dddd')}</ShowDate>
        <Button onClick={onClick}>
          <CalenderImg />
        </Button>
      </SelectDate>
      <Container>
        <ScrollMenu>
          {mealPlans.map(({ meal_date, meal, id }: IMealPlan) => {
            return <MealPlan key={'1'} meal_date={meal_date} meal={meal} id={id} />;
          })}
        </ScrollMenu>
      </Container>
    </>
  );
};

export const PlannerExtra = (): JSX.Element => {
  const state = useRecoilValue(navigatorState);
  let where = '';
  if (state.extra.RR) {
    where = '제2학생회관 2층';
  } else if (state.extra.Renaissance) {
    where = '제1학생회관 2층';
  }
  return (
    <>
      <ShowLoc>{where}</ShowLoc>
      <Menu />
    </>
  );
};
