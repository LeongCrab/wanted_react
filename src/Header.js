import React, { useState } from 'react';
import './Header.css';
import Modal from './Modal';

function NavBtn({href, category, tag}) {
  return(
    <a href={href}>{category}<span>{tag}</span></a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(0);
  
  function Menu() {
    const categoryList = ["직군 전체", "개발", ["경영",<span>.</span>,"비즈니스"], ["마케팅",<span>.</span>,"광고"], "디자인", "영업", ["고객서비스",<span>.</span>,"리테일"], "게임 제작", "HR", "미디어", ["엔지니어링",<span>.</span>,"설계"], "금융", ["제조",<span>.</span>,"생산"], ["물류",<span>.</span>,"무역"], ["의료",<span>.</span>,"제약",<span>.</span>,"바이오"], "교육", ["법률",<span>.</span>,"법집행기관"], ["식",<span>.</span>,"음료"], ["건설",<span>.</span>,"시설"] , ["공공",<span>.</span>,"복지"] , "프리랜서"];

    return(
      <div className="menuWrap">
        <ul onMouseOver={() => setMenuOpen(true)} onMouseLeave={() => {setMenuOpen(false); setSubmenuOpen(false)}}>
            {categoryList.map(category => (
              <li key={category} onMouseEnter={() => {setSubmenuOpen(true)}}>{category}</li>
            ))}
        </ul>
      </div>
    );
  }
  function SubMenu() {
    const subCategoryList = ["개발 전체", "웹 개발자", "서버 개발자", "소프트웨어 엔지니어", "프론트엔드 개발자", "자바 개발자", "안드로이드 개발자", "C,C++ 개발자", "파이썬 개발자", "iOS 개발자", "Node.js 개발자", "데이터 엔지니어", "DevOps / 시스템 관리자", "시스템,네트워크 관리자", "머신러닝 엔지니어", "개발 매니저", "데이터 사이언티스트", "기술 지원", "임베디드 개발자", "PHP 개발자", "블록체인 플랫폼 엔지니어", "하드웨어 엔지니어", "웹 퍼블리셔", "DBA", ".NET 개발자", "영상, 음성 엔지니어", "크로스플랫폼 앱 개발자", "그래픽스 엔지니어"];

    return(
      <div className="submenuWrap">
        <ul onMouseOver={() => setSubmenuOpen(true)} onMouseLeave={() => setSubmenuOpen(false)}>
          {subCategoryList.map(subCategory => (
            <li key={subCategory}>{subCategory}</li>
          ))}
        </ul>
      </div>
    );
  }

  return(
    <>
      <div className="header">
        <div className="headerWrap">
          <div className="headerItem">
            <button className="hamburger" onMouseEnter={() => setMenuOpen(true)}>
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" alt="None" style={{height: 14, width1:17}} />
            </button>
            <a href="https://www.wanted.co.kr/">
              <img src="./img/wanted_BI_logotype.png" alt="top Logo" style={{ height:17, width:74.38 }} />
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
            <button type="button" className="searchButton">
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
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </>
  );
}

export default Header;