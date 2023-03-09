import React from 'react';
import { useRecoilValue } from 'recoil';
import { isCalendarActivated } from '../../Atom/calendar';
import { bottomNaviState } from '../../Atom/Navigator';
import Mealcalendar from './Calendar';
import BottomNav from './BottomNav';
import Header from './Header';
import { NavigatorExtra, NavigatorStudent } from './Navigator';
import PhotoList from './Photo';
import { PlannerExtra, PlannerStudent } from './Planner';

const MealPlanner = (): JSX.Element => {
  const restaurant = useRecoilValue(bottomNaviState);
  const isCA = useRecoilValue(isCalendarActivated);
  return (
    <>
      <Header />
      {restaurant.student && !restaurant.extra ? <NavigatorStudent /> : <NavigatorExtra />}
      {restaurant.student && !restaurant.extra ? <PlannerStudent /> : <PlannerExtra />}
      {restaurant.student ? <PhotoList /> : null}
      {isCA ? <Mealcalendar /> : null}
      <BottomNav />
    </>
  );
};

export default MealPlanner;
