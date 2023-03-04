import React from 'react';
import { useRecoilValue } from 'recoil';
import { bottomNaviState } from '../../Atom/NavigatorAct';
import BottomNav from './BottomNav';
import Header from './Header';
import { NavigatorExtra, NavigatorStudent } from './Navigator';
import { PlannerExtra, PlannerStudent } from './Planner';

const MealPlanner = (): JSX.Element => {
  const restaurant = useRecoilValue(bottomNaviState);
  return (
    <>
      <Header />
      {restaurant.student && !restaurant.extra ? <NavigatorStudent /> : <NavigatorExtra />}
      {restaurant.student && !restaurant.extra ? <PlannerStudent /> : <PlannerExtra />}
      <BottomNav />
    </>
  );
};

export default MealPlanner;
