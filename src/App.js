import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './MainPage';
import JobList from './JobList';
import BlueBeaker from './BlueBeaker';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/joblist' element={<JobList/>} />
        <Route path='/bluebeaker' element={<BlueBeaker/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;