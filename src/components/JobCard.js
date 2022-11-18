import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import "../css/JobCard.css";
const JobCardStyle = styled.li`
    position: relative;
    width: 25%;
    padding: 10px;
    list-style: none;
    @media (max-width: 991px) {
      width: 50%;
    }
`;
const JobCardHeader = styled.div`
  border-radius: 4px;
  background-size: cover;
  background-position: 50%;
  padding-bottom: 75%;
  background-image: url(${props=> props.src});
`;

function JobCard({
  id,
  src,
  position,
  name,
  label,
  tooltip,
  location,
  country,
  reward,
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const dispatch = useDispatch();
  const bookmarkList = useSelector(state => state.bookmark.bookmarkList);

  const onClick = () => {
    if (bookmarkList.includes(id)) dispatch({type: 'bookmark/REMOVE_BOOKMARK', id: id});
    else dispatch({type: 'bookmark/ADD_BOOKMARK', id: id});
  }
  
  function Cash(num) {
    const number = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return `${number}원`;
  }

  return (
    <JobCardStyle>
      <button className="bookmarkButton" type="button" onClick={onClick}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
            fill="white"
          ></path>
          <path
            d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
            fill={bookmarkList.includes(id)? "#3366FF":"black"}
            fillOpacity={bookmarkList.includes(id)? 1:0.25 }
          ></path>
        </svg>
      </button>
      <Link to={`../wd/${id}`}>
        <JobCardHeader src={src} />
        <div className="jobCardBody">
          <div className="jobPosition">{position}</div>
          <div className="jobCompany">{name}</div>
          <div className="jobLabel">
            <div className="response_veryHigh" onMouseOver={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>{label}</div>
            {showTooltip && <div className="jobLabel_tooltip">{tooltip}</div>}
          </div>
          <div className="jobLocation">
            {location}
            <span>.</span>
            {country}
          </div>
          <div className="jobReward">채용보상금 {Cash(reward)}</div>
        </div>
      </Link>
    </JobCardStyle>
  );
}

JobCard.defaultProps = {
  label: "응답률 매우 높음",
  tooltip: "지원 후 응답받을 확률이 95% 이상입니다.",
  location: "서울",
  country: "한국",
  reward: 1000000,
};

export default JobCard;
