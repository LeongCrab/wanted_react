import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './css/Search.css';
import Header from './Header';
import JobCard from './JobCard';
import JobFilter from './JobFilter';
import JobCardListData from './data/JobCardList.json';

function Search() {
    const [ searchOpen, setSearchOpen ] = useState(false);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchQuery = searchParams.get('query');
    function JobCardList() {
        return(
            <ul className="jobCardList">
                {filterData().map(jobCard => (
                    <JobCard key={jobCard.id} href={jobCard.href} src={jobCard.src} position={jobCard.position} name={jobCard.name} label={jobCard.label} location={jobCard.location} country={jobCard.country} reward={jobCard.reward} />
                ))}
            </ul>
        );
    }
    const filterData = () => {
        return JobCardListData.jobCardList.filter((data) => data.position.toLowerCase().includes(searchQuery.toLowerCase()));
    };
    return(
        <>
            <Header searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <div className="searchInput">
                <button type='button' className='searchQuery' onClick={() => setSearchOpen(true)}>{searchQuery}</button>
            </div>
            <div className="searchWrap">
                <div className="searchSection">
                    <h2 className="searchLabel">회사<span>0</span></h2>
                </div>
                <div className="searchSection">
                    <h2 className="searchLabel">포지션<span>{filterData().length}</span></h2>
                    <JobFilter />
                    <JobCardList />
                </div>
            </div>
        </>
    );
}

export default Search;