import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import InitialSetting from './Component/InitialSetting';
import Login from './Component/LoingPage/Login';
import MealPlanner from './Component/MealPlanner/MealPlanner';
import MyPage from './Component/MyPage/MyPage';
import SettingPage from './Component/SettingPage/SettingPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MealPlanner />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/initial_setting" element={<InitialSetting />}></Route>
            <Route path="/my" element={<MyPage />}></Route>
            <Route path='/setting' element={<SettingPage />}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
