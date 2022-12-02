import React, { useState, useContext } from "react";
import { ModalContext } from "../modules/ModalStore";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../css/Header.css";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import HeaderData from "../data/Header.json";

const SubmenuList = styled.ul`
  position: inherit;
  height: calc(100vh - 90px);
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #e8f6fd;
  flex-grow: 1;
  ${props => {
    if (props.num === 0) return css`width: 0px;`;
    else if (props.num < 17) return css`width: 200px;`;
    else if (props.num < 34) return css`width: 400px;`;
    else return css`width:600px;`;
  }}
`;

function NavBtn({ href, category, tag }) {
  return (
    <Link to={href}>
      {category}
      <span>{tag}</span>
    </Link>
  );
}

function Header() {
  const { modalOpen, searchOpen, contextDispatch } = useContext(ModalContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("");
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const userEmail = useSelector((state) => state.login.email);
  const dispatch = useDispatch();
  const logOutClick = () => {
    alert("로그아웃합니다.");
    signOut(auth).then(() => {
      dispatch({ type: "LOG_OUT" });
    }).catch((error) => {
      // An error happened.
      console.log(error.message);
    });
  }
  function Menu() {
    return (
      <div className="menuWrap">
        <ul
          onMouseOver={() => setMenuOpen(true)}
          onMouseLeave={() => {
            setMenuOpen(false);
            setSubmenuOpen(false);
          }}
        >
          {HeaderData.categoryList.map((category) => (
            <li
              key={category}
              onMouseEnter={() => {
                setMenu(category);
                setSubmenuOpen(true);
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function SubMenu() {
    const mainCategory = HeaderData.category.find((cat) => cat.id === menu);

    return (
      <div className="submenuWrap">
        <SubmenuList
          num={mainCategory.num}
          onMouseOver={() => setSubmenuOpen(true)}
          onMouseLeave={() => setSubmenuOpen(false)}
        >
          {[...Array(parseInt(mainCategory.num))].map((n, idx) => (
            <li key={mainCategory.id + (idx + 1)}>
              {mainCategory.id + (idx + 1)}
            </li>
          ))}
        </SubmenuList>
      </div>
    );
  }

  return (
    <>
      <div className="headerDummy" />
      <div className="header">
        <div className="headerWrap">
          <div className="headerItem nav_top">
            <div>
              <button
                className="hamburger"
                onMouseEnter={() => setMenuOpen(true)}
              >
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
                  alt="None"
                  style={{ height: 14, width1: 17 }}
                />
              </button>
              <Link to="/">
                <img
                  src="/img/wanted_BI_logotype.png"
                  alt="top Logo"
                  style={{ height: 17, width: 74.38 }}
                />
              </Link>
              {(menuOpen || submenuOpen) && <Menu />}
              {submenuOpen && <SubMenu />}
            </div>
            <button className="joinBtn" onClick={() => contextDispatch({ type: "LOGIN_OPEN" })}>
              회원가입하기
            </button>
          </div>
          <div className="headerItem navBtn">
            <NavBtn href="/" category="홈" />
            <NavBtn href="/wdlist" category="채용" />
            <NavBtn href="/events" category="이벤트" />
            <NavBtn href="/salary" category="직군별 연봉" />
            <NavBtn href="/cvlist" category="이력서" />
            <NavBtn href="/community" category="커뮤니티" tag="New" />
            <NavBtn href="/gigs/experts" category="프리랜서" />
            <NavBtn href="/aiscore/resume" category="AI 합격예측" tag="Beta" />
          </div>
          <div className="headerItem">
            <button
              type="button"
              className="menuBtn"
              onClick={() => contextDispatch({ type: "SEARCH_MODAL_OPEN" })}
            >
              <svg
                xmlns="https://www.w3.org/2000/svg"
                xmlnsXlink="https://www.w3.org/1999/xlink"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <defs>
                  <path
                    id="qt2dnsql4a"
                    d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                  ></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <use
                    fill="#333"
                    fillRule="nonzero"
                    stroke="#333"
                    strokeWidth=".3"
                    xlinkHref="#qt2dnsql4a"
                  ></use>
                </g>
              </svg>
            </button>
            <div className="header_visible">
              {!userEmail && (
                <button
                  type="button"
                  className="signUpButton"
                  onClick={() => contextDispatch({ type: "LOGIN_OPEN" })}
                >
                  회원가입/로그인
                </button>
              )}
              {userEmail && (
                <div className="logOutBox">
                  <button type="button" className="noticeBtn">
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      xmlnsXlink="https://www.w3.org/1999/xlink"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <defs>
                        <path
                          id="bpnpn3yn0a"
                          d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
                        ></path>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                          <mask id="1dencd96ob" fill="#fff">
                            <use xlinkHref="#bpnpn3yn0a"></use>
                          </mask>
                          <use
                            fillRule="nonzero"
                            stroke="currentColor"
                            strokeWidth=".3"
                            xlinkHref="#bpnpn3yn0a"
                          ></use>
                          <g fill="currentColor" mask="url(#1dencd96ob)">
                            <path d="M0 0H18V18H0z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                  <button type="button" className="avatarBtn" onClick={logOutClick}>
                    <div className="avatarImage" style={{backgroundImage:`url("https://static.wanted.co.kr/images/profile_default.png")`}} />
                  </button>
                </div>
              )}
              <div className="verticalLine"></div>
              <Link to="/dashboard">
                <button type="button" className="enterpriseButton">
                  기업 서비스
                </button>
              </Link>
            </div>
            <div className="header_hidden">
              <button type="button" className="menuBtn">
              <svg width="18" height="18" xmlns="https://www.w3.org/2000/svg"><defs><path d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z" id="a"></path></defs><g fill="none" fillRule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a"></use></mask><use fill="#333" xlinkHref="#a"></use><g mask="url(#b)" fill="#333"><path d="M0 0h18v18H0z"></path></g></g></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen > 0 && <Modal />}
      {searchOpen && <SearchBar />}
    </>
  );
}

export default Header;
