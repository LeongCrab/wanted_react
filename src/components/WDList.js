import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from "styled-components";

import Header from "./Header";
import JobCard from "./JobCard";
import JobFilter from "./JobFilter";

import WDListData from "../data/WDList.json";
import JobCardListData from "../data/JobCardList.json";
import "../css/WDList.css";

const FilterCnt = styled.div`
  ${props => {
    if (props.scrollY > 300){
      return css`
        position: fixed;
        top: 50px;
        @media (max-width: 991px){
          top: 110px;
        }
        z-index: 2;
        max-width: 1060px;
        & > div{
          @media (max-width: 767px){
            padding-top: 25px;
          }
        }
      `;
    } else {
      return css`
        position: static;
        margin-bottom: 40px;
      `;
    }
  }}
  .styledHr{
    height: 1px;
    z-index: 2;
    max-width: 100%;
    width: 100%;
    left: 0;
    ${props => {
      if (props.scrollY > 300){
        return css`
          position: fixed;
          top: 222px;
          @media (max-width: 991px){
            top: 282px;
          }
          background-color: #36f;
        `;
      } else {
        return css`
          position: absolute;
          background-color: #ececec;

        `;
      }
    }}
  }
`;

const FeaturedHeader = styled.div`
  height: 147px;
  border-radius: 3px 3px 0 0;
  background-position: 50%;
  background-size: cover;
  background-color: #f2f2f2;
  background-repeat: no-repeat;
  transition: all .5s ease-in-out;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
  background-image: url(${props => props.src});
  @media (min-width: 768px) and (max-width: 991px) {
    height: 120px;
  }
  @media (max-width: 767px){
    width: 140px;
    height: 100px;
  }
`;

const FeaturedLogo = styled.div`
  position: absolute;
  top: -25px;
  left: 16px;
  width: 50px;
  height: 50px;
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #fff;
  z-index: 0;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
  background-image: url(${props => props.logo});
  @media (min-width: 768px) and (max-width: 991px) {
    top: -21px;
    left: 15px;
    width: 42px;
    height: 42px;
  }
  @media (max-width: 767px){
    top: -18px;
    left: 15px;
    width: 36px;
    height: 36px;
  }
`;


function WDList() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [dataLen, setDataLen] = useState(0);
  const [isFetching, setFetching] = useState(false);
  const [throttle, setThrottle] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  function FeaturedCardList() {
    function FeaturedCard({ id, src, logo, header, body }) {
      return (
        <Link className="featuredCard" to={`../company/${id}`}>
          <div className="featuredHeader">
            <FeaturedHeader src={src} />
          </div>
          <div className="featuredFooter">
            <FeaturedLogo logo={logo} />
            <h4>{header}</h4>
            <h5>{body}개 포지션</h5>
          </div>
        </Link>
      );
    }

    return (
      <>
        <h3 className="featured">적극 채용 중인 회사</h3>
        <div className="featuredWrap">
          {WDListData.featuredList.map((featured) => (
            <FeaturedCard
              key={featured.id}
              id={featured.id}
              src={featured.src}
              logo={featured.logo}
              header={featured.header}
              body={featured.body}
            />
          ))}
        </div>
      </>
    );
  }

  function JobCardList() {
    return (
      <>
        <ul className="jobCardList">
          {data && data.map((jobCard) => (
            <JobCard
              key={jobCard.id}
              id={jobCard.id}
              href={jobCard.href}
              src={jobCard.src}
              position={jobCard.position}
              name={jobCard.name}
              label={jobCard.label}
              location={jobCard.location}
              country={jobCard.country}
              reward={jobCard.reward}
            />
          ))}
        </ul>
      </>
    );
  }
  const fetchData = useCallback(() => {
    const next = JobCardListData.jobCardList.filter((data, idx) => idx >= dataLen && idx < dataLen + 8);
    setData(prev => prev.concat(next));
    setDataLen(prev => prev + 8);
    setFetching(false);
  }, [dataLen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(document.documentElement.scrollTop);
      if (throttle) return;
      else {
        setThrottle(true);
        setTimeout(() => {
          const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
          if (scrollTop + clientHeight >= scrollHeight - 100) {
            setFetching(true);
          }
          setThrottle(false);
        }, 300);
      }
    };
    setFetching(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if(dataLen >= JobCardListData.jobCardList.length) setFetching(false);
    else if(isFetching) fetchData();
  }, [isFetching]);

  return (
    <>
      <Header />
      <div id="jobListCnt">
        <div id="navBarCnt">
          <div id="navBar">
            <div>
              <button id="jobGroup">
                <span className="jobGroupTitle">전체</span>
                <span className="moreButton">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path
                      fill="#767676"
                      fillRule="nonzero"
                      d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="jobCategory">
              <div id="jobVertical">|</div>
              <span className="jobCategoryTitle">직군을 선택해주세요.</span>
            </div>
          </div>
        </div>
        <div id="jobListWrap">
          <FilterCnt scrollY={scrollY}>
            <JobFilter />
            <hr className="styledHr" />
          </FilterCnt>
          <div id="jobList">
            <div id="bookmark">
              <button type="button" onClick={() => navigate('/bookmark')}>
                <svg
                  width="13"
                  height="17"
                  viewBox="0 0 13 17"
                  style={{ color: "rgb(51, 102, 255)" }}
                >
                  <defs>
                    <path
                      id="bookmarkIconFill"
                      d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"
                    ></path>
                  </defs>
                  <g fill="none" fillRule="evenodd" transform="translate(.188)">
                    <use
                      fill="currentColor"
                      xlinkHref="#bookmarkIconFill"
                    ></use>
                  </g>
                </svg>
                <span>북마크 모아보기</span>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path
                    fill="currentColor"
                    d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
                  ></path>
                </svg>
              </button>
            </div>
            <FeaturedCardList />
            <JobCardList />
          </div>
        </div>
      </div>
    </>
  );
}

export default WDList;
