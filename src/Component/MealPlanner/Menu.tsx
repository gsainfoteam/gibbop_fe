import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { navigatorState } from '../../Atom/Navigator';

const StyledMenuDiv = styled.div`
  border: 2px solid #ff6565;
  margin: 0 30px;
`;

const StyledTime = styled.div`
  margin-top: 16px;
  margin-bottom: 14px;
  margin-left: 21px;
  color: #ff6565;
`;

const StyledList = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin: 0 20px 6px;

  display: flex;
  justify-content: space-between;
`;

const Menu = (): JSX.Element => {
  const currentNavigator = useRecoilValue(navigatorState);
  const [mealPlans, setMealPlans] = useState<{ id: number; menu: string; price: string }[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchMealPlan = async () => {
      try {
        setError(null);
        setMealPlans([]);
        setLoading(true);

        let restaurant = '락락';
        if (currentNavigator.extra.Renaissance) restaurant = '르네상스';

        const res = await axios.get<{ id: number; menu: string; price: string }[]>(
          'http://localhost:3000/meal_plan/restaurant',
          {
            params: {
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
  }, [currentNavigator]);

  if (!mealPlans) return <>no!</>;
  if (error) return <>error</>;
  if (loading) return <>Loading</>;
  return (
    <StyledMenuDiv>
      <StyledTime>오전 10:30~오후 19:00</StyledTime>
      {mealPlans.map(({ id, menu, price }) => {
        return (
          <StyledList key={id}>
            <span>{menu}</span>
            <span>{price+'원'}</span>
          </StyledList>
        );
      })}
    </StyledMenuDiv>
  );
};

export default Menu;
