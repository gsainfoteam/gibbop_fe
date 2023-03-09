import React from 'react';
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

const TestData = [
  {
    date: '2월 22일 (수) 점심',
    list: '흑미밥\n콩나물국\n계란후라이 1\n떡갈비구이\n고기손만두*양념장\n김구이\n배추김치\n시리얼*우유 2\n토스트*잼\n야채샐러드*D',
    id: 1,
  },
  {
    date: '2월 22일 (수) 점심',
    list: '흑미밥\n콩나물국\n계란후라이 1\n떡갈비구이\n고기손만두*양념장\n김구이\n배추김치\n시리얼*우유 2\n토스트*잼\n야채샐러드*D',
    id: 2,
  },
  {
    date: '2월 22일 (수) 점심',
    list: '흑미밥\n콩나물국\n계란후라이 1\n떡갈비구이\n고기손만두*양념장\n김구이\n배추김치\n시리얼*우유 2\n토스트*잼\n야채샐러드*D',
    id: 3,
  },
  {
    date: '2월 22일 (수) 점심',
    list: '흑미밥\n콩나물국\n계란후라이 1\n떡갈비구이\n고기손만두*양념장\n김구이\n배추김치\n시리얼*우유 2\n토스트*잼\n야채샐러드*D',
    id: 4,
  },
  {
    date: '2월 22일 (수) 점심',
    list: '흑미밥\n콩나물국\n계란후라이 1\n떡갈비구이\n고기손만두*양념장\n김구이\n배추김치\n시리얼*우유 2\n토스트*잼\n야채샐러드*D',
    id: 5,
  },
  {
    date: '2월 22일 (수) 점심',
    list: '흑미밥\n콩나물국\n계란후라이 1\n떡갈비구이\n고기손만두*양념장\n김구이\n배추김치\n시리얼*우유 2\n토스트*잼\n야채샐러드*D',
    id: 6,
  },
  {
    date: '2월 22일 (수) 점심',
    list: '흑미밥\n콩나물국\n계란후라이 1\n떡갈비구이\n고기손만두*양념장\n김구이\n배추김치\n시리얼*우유 2\n토스트*잼\n야채샐러드*D',
    id: 7,
  },
  {
    date: '2월 22일 (수) 점심',
    list: '흑미밥\n콩나물국\n계란후라이 1\n떡갈비구이\n고기손만두*양념장\n김구이\n배추김치\n시리얼*우유 2\n토스트*잼\n야채샐러드*D',
    id: 8,
  },
  {
    date: '2월 22일 (수) 점심',
    list: '흑미밥\n콩나물국\n계란후라이 1\n떡갈비구이\n고기손만두*양념장\n김구이\n배추김치\n시리얼*우유 2\n토스트*잼\n야채샐러드*D',
    id: 9,
  },
];

export const PlannerStudent = (): JSX.Element => {
  const state = useRecoilValue(navigatorState);
  const [isCA, setCA] = useRecoilState(isCalendarActivated);
  const date = useRecoilValue(pickedDate);

  let url = '';
  if (state.student.first_first) {
    url = '1학 1층';
  } else if (state.student.first_second) {
    url = '1학 2층';
  } else if (state.student.second) {
    url = '2학';
  }

  const onClick = ():void => {
    setCA(true);
    console.log(isCA);
  }

  return (
    <>
      <SelectDate>
        <ShowDate>{moment(date).format("YYYY년 MM월 DD일 dddd")}</ShowDate>
        <Button onClick={onClick}>
          <CalenderImg />
        </Button>
      </SelectDate>
      <Container>
        <ScrollMenu>
          {TestData.map(({ date, list, id }: IMealPlan) => {
            return <MealPlan key={'1'} date={date} list={`${list}\n${url}`} id={id} />;
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
    where = '어딘지 모름';
  }
  return <ShowLoc>{where}</ShowLoc>;
};
