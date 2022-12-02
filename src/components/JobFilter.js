import React, { useState } from "react";
import styled from "styled-components";

import JobFilterData from "../data/JobFilter.json";
import "../css/JobFilter.css";

const Arrow = () => {
  return(
    <svg
      width="8"
      height="7"
      viewBox="0 0 8 7"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
    >
      <path
        d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
        fill="#333333"
      ></path>
    </svg>
  );
}

const JobSlide = styled.div`
  width: inherit;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  transform: translateX(${props => props.slideX}px);
  transition: 0.5s ease;
`;

const StyledJobTag = styled.button.attrs({
  type: "button",
})`
  position: relative;
  height: 32px;
  padding: 8px 14px;
  border-radius: 20px;
  display: inline-flex; 
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #333;
  border: 1px solid transparent;
  flex-shrink: 0;
  background-color: RGB(${props => props.backgroundColor});
  &:hover{
    border-color: #36f;
  }
  img{
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }
`;
const StyledHr = styled.hr`
  @media (max-width: 767px){
    display: none;
  }
  height: 1px;
  flex-shrink: 0;
  border: none;
  background-color: #ececec;
  width: 100%;
  max-width: 1060px;
  &:not(:last-child){
    margin: 25px auto;
  }
  &:last-child{
    margin: 25px 0 38px;
  }
`;

function JobFilter() {
  function JobTagSlider() {
    const [slideX, setSlideX] = useState(0);
    const [prevBtn, setPrevBtn] = useState(false);
    const [nextBtn, setNextBtn] = useState(true);
    const toPrev = () => {
      setNextBtn(true);
      setSlideX(slideX + 300);
      if (slideX + 300 >= 0) {
        setPrevBtn(false);
        setSlideX(0);
      }
    };
    const toNext = () => {
      setPrevBtn(true);
      setSlideX(slideX - 300);
      if (slideX - 300 <= -1000) {
        setNextBtn(false);
        setSlideX(-1000);
      }
    };
    function JobTag({ content, src, backgroundColor }) {
      return (
        <StyledJobTag backgroundColor={backgroundColor}>
          {content}
          <img src={src} alt={content} />
        </StyledJobTag>
      );
    }

    return (
      <div className="tagWrap">
        {prevBtn && (
          <button
            type="button"
            onClick={toPrev}
            className="arrowButton arrowLeft"
          >
            &lt;
          </button>
        )}
        {nextBtn && (
          <button
            type="button"
            onClick={toNext}
            className="arrowButton arrowRight"
          >
            &gt;
          </button>
        )}
        <JobSlide slideX={slideX}>
          {JobFilterData.jobTagList.map((tag) => (
            <JobTag
              key={tag.id}
              content={tag.content}
              src={tag.src}
              backgroundColor={tag.backgroundColor}
            />
          ))}
        </JobSlide>
      </div>
    );
  }

  return (
    <div className="filter">
      <div className="filterWrap">
        <div className="buttonGroup">
          <button type="button" className="filterButton">
            <span className="buttonTitle">
              지역
              <span className="filterCount">1</span>
            </span>
            <span className="buttonDisplay">한국</span>
            <div className="arrow_hidden">
              <Arrow />
            </div>
          </button>
          <div>
            <button type="button" className="filterButton">
              <span className="buttonTitle">경력</span>
              <span className="buttonDisplay">신입</span>
              <Arrow />
            </button>
          </div>
          <div>
            <button type="button" className="filterButton">
              <span className="buttonTitle">기술스택</span>
              <span className="buttonDisplay"></span>
              <Arrow />
            </button>
          </div>
        </div>
        <select className="customSelect">
          <option value="response">응답률순</option>
          <option value="latest">최신순</option>
          <option value="reward">보상금순</option>
          <option value="popular">인기순</option>
        </select>
      </div>
      <StyledHr />
      <JobTagSlider />
    </div>
  );
}

export default JobFilter;
