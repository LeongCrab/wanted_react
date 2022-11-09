import React from "react";

import "../css/Bookmark.css";
import Header from "./Header";
import JobCard from './JobCard';
import JobCardListData from "../data/JobCardList.json";
import { useSelector } from 'react-redux';

const Bookmark = () => {
  const bookmarkList = useSelector(state => state.bookmark.bookmarkList);
  function JobCardList() {
    return (
      <ul className="jobCardList">
        {filterData().map((jobCard) => (
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
    );
  }
  const filterData = () => {
    return JobCardListData.jobCardList.filter((data) => 
      bookmarkList.includes(data.id)
    );
  };
  return(
    <>
      <Header />
      <div className="bookmarkWrap">
        <h2 className="bookmarkLabel">북마크</h2>
        {bookmarkList.length === 0 && (
          <div className="emptyMessage">
            <div className="customMessage">
              아직 북마크한 포지션이 없습니다.
            </div>
          </div>
        )}
        {bookmarkList.length > 0 && (
         <JobCardList />
        )}
      </div>
    </>
  );
};

export default Bookmark;
