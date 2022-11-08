import React, { useState } from "react";
import "./css/JobFilter.css";
import JobFilterData from "./data/JobFilter.json";

function JobFilter() {
  function JobTagSlider() {
    const [slideX, setSlideX] = useState(0);
    const [prevBtn, setPrevBtn] = useState(false);
    const [nextBtn, setNextBtn] = useState(true);
    const style = {
      transform: `translateX(${slideX}px)`,
      transition: "0.5s ease",
    };
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
        <button className="jobTag" style={{ backgroundColor: backgroundColor }}>
          {content}
          <img src={src} alt={content} />
        </button>
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
        <div className="tagFilter" style={style}>
          {JobFilterData.jobTagList.map((tag) => (
            <JobTag
              key={tag.id}
              content={tag.content}
              src={tag.src}
              backgroundColor={tag.backgroundColor}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="filter">
      <div className="filterWrap">
        <div className="buttonGroup">
          <button className="filterButton">
            <span className="buttonTitle">
              지역
              <span className="filterCount">1</span>
            </span>
            <span className="buttonDisplay">한국</span>
          </button>
          <div>
            <button className="filterButton">
              <span className="buttonTitle">경력</span>
              <span className="buttonDisplay">신입</span>
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
            </button>
          </div>
          <div>
            <button className="filterButton">
              <span className="buttonTitle">기술스택</span>
              <span className="buttonDisplay"></span>
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
      <hr />
      <JobTagSlider />
      <hr className="filter_lastHr" />
    </div>
  );
}

export default JobFilter;
