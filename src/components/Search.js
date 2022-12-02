import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./Header";
import JobCard from "./JobCard";
import JobFilter from "./JobFilter";

import JobCardListData from "../data/JobCardList.json";
import "../css/Search.css";

function Search() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
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
      data.position.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  return (
    <>
      <Header />
      <div className="searchInput">
        <button
          type="button"
          className="searchQuery"
          onClick={() => dispatch({type: "SEARCH_MODAL_OPEN"})}
        >
          {searchQuery}
        </button>
      </div>
      <div className="searchWrap">
        <div className="searchSection">
          <h2 className="searchLabel">
            회사<span>0</span>
          </h2>
        </div>
        <div className="searchSection">
          <h2 className="searchLabel">
            포지션<span>{filterData().length}</span>
          </h2>
          <JobFilter />
          <JobCardList />
        </div>
      </div>
    </>
  );
}

export default Search;
