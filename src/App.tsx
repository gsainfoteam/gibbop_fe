import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InitialSetting from './Component/InitialSetting';
import Login from './Component/Login';
import MealPlanner from './Component/MealPlanner';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MealPlanner />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/initial_setting" element={<InitialSetting />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
