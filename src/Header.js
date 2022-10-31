import React, { useState } from 'react';
import './css/Header.css';
import Modal from './Modal';
import SearchBar from './SearchBar';
import HeaderData from "./data/Header.json";

function NavBtn({href, category, tag}) {
  return(
    <a href={href}>{category}<span>{tag}</span></a>
  )
}

function Header({searchOpen, setSearchOpen}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("");
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(0);
  
  function Menu() {
    return(
      <div className="menuWrap">
        <ul onMouseOver={() => setMenuOpen(true)} onMouseLeave={() => {setMenuOpen(false); setSubmenuOpen(false)}}>
            {HeaderData.categoryList.map(category => (
              <li key={category} onMouseEnter={() => {setMenu(category); setSubmenuOpen(true)}}>{category}</li>
            ))}
        </ul>
      </div>
    );
  }

  function SubMenu() {
    const mainCategory = HeaderData.category.find(cat => cat.id === menu);

    return(
      <div className="submenuWrap">
        <ul className={"width-"+(mainCategory.num === 0? "0px":mainCategory.num < 17? "200px":mainCategory.num < 34? "400px":"600px" )} onMouseOver={() => setSubmenuOpen(true)} onMouseLeave={() => setSubmenuOpen(false)}>
          {[...Array(parseInt(mainCategory.num))].map((n, idx) => (
            <li key={mainCategory.id + (idx + 1)}>{mainCategory.id + (idx + 1)}</li>
          ))}
        </ul>
      </div>
    );
  }

  return(
    <>
      <div className="headerDummy"/>
      <div className="header">
        <div className="headerWrap">
          <div className="headerItem">
            <button className="hamburger" onMouseEnter={() => setMenuOpen(true)}>
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" alt="None" style={{height: 14, width1:17}} />
            </button>
            <a href="https://www.wanted.co.kr/">
              <img src="/img/wanted_BI_logotype.png" alt="top Logo" style={{ height:17, width:74.38 }} />
            </a>
            {(menuOpen || submenuOpen) && <Menu />}
            {submenuOpen && <SubMenu />}
          </div>
          <div className="headerItem navButton">
            <NavBtn href="https://www.wanted.co.kr/jobsfeed" category="채용" />
            <NavBtn href="https://www.wanted.co.kr/events" category="이벤트" />
            <NavBtn href="https://www.wanted.co.kr/salary" category="직군별 연봉" />
            <NavBtn href="https://www.wanted.co.kr/cv/list" category="이력서" />
            <NavBtn href="https://www.wanted.co.kr/community" category="커뮤니티" tag="New" />
            <NavBtn href="https://www.wanted.co.kr/gigs/experts" category="프리랜서" />
            <NavBtn href="https://www.wanted.co.kr/aiscore/resume" category="AI 합격예측" tag="Beta" />
          </div>
          <div className="headerItem">
            <button type="button" className="searchButton" onClick={()=> setSearchOpen(true)}>
              <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                <defs>
                  <path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <use fill="#333" fillRule="nonzero" stroke="#333" strokeWidth=".3" xlinkHref="#qt2dnsql4a"></use>
                </g>
              </svg>
            </button>
            <button type="button" className="signUpButton" id="signUpBtn" onClick={() => setModalOpen(1)}>회원가입/로그인</button>
            <div className="verticalLine"></div>
            <a href="https://www.wanted.co.kr/dashboard">
              <button type="button" className="enterpriseButton">기업 서비스</button>
            </a>
          </div>
        </div>
      </div>
      {modalOpen > 0 && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>}
      {searchOpen && <SearchBar setSearchOpen={setSearchOpen} />}
    </>
  );
}

export default Header;