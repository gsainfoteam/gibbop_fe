import React, { useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '../../Atom/login';
import Header from './Header';

const MyPage = (): JSX.Element => {
  const isLogin = useRecoilValue(isLoginState);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isLogin) {
      navigate('/login');
    }
  })
  
  return (
    <>
      <Header />
    </>
  );
};

export default MyPage;
