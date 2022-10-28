import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './MainPage';
import WDList from './WDList';
import WD from './WD';
import Search from './Search';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/wdlist' element={<WDList />} />
        <Route path='/wd/:companyName' element={<WD />} />
        <Route path='/search' element={<Search />} />
        <Route path="/*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;