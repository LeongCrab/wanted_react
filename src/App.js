import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ModalStore from "./modules/ModalStore";
import MainPage from "./components/MainPage";
import WDList from "./components/WDList";
import WD from "./components/WD";
import Search from "./components/Search";
import Bookmark from './components/Bookmark';
import CVList from './components/CVList';

function App() {
  return (
    <ModalStore>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/wdlist" element={<WDList />} />
          <Route path="/wd/:params" element={<WD />} />
          <Route path="/search" element={<Search />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/cvlist" element={<CVList />} />
          <Route path="/*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
        </Routes>
      </BrowserRouter>
    </ModalStore>
  );
}

export default App;
