import React, { useEffect, useState } from 'react';

import './css/WDList.css';
import Header from './Header';
import JobCard from './JobCard';
import JobFilter from './JobFilter';
import WDListData from './data/WDList.json';
import JobCardListData from './data/JobCardList.json';

function WDList() {
    const [scroll, setScroll] = useState(0);
    const [searchOpen, setSearchOpen] = useState(false);
    function FeaturedCardList() {
        function FeaturedCard({href, src, logo, header, body}){
            return(
                <a className="featuredCard" href={href}>
                    <div className="featuredHeader">
                        <img src={src} alt={header} />
                    </div>
                    <div className="featuredFooter">
                        <div className="featuredLogo" style={{backgroundImage: `url(${logo})`}} />
                        <h4>{header}</h4>
                        <h5>{body}개 포지션</h5>
                    </div>
                </a>
            );
        }
    
        return(
            <>
                <h3 className="featured">적극 채용 중인 회사</h3>
                <div className="featuredWrap">
                    {WDListData.featuredList.map(featured => (
                        <FeaturedCard key={featured.id} href={featured.href} src={featured.src} logo={featured.logo} header={featured.header} body={featured.body} />
                    ))}
                </div>
            </>
        );
    }
    
    function JobCardList() {
        return(
            <ul className="jobCardList">
                {JobCardListData.jobCardList.map(jobCard => (
                    <JobCard key={jobCard.id} href={jobCard.href} src={jobCard.src} position={jobCard.position} name={jobCard.name} label={jobCard.label} location={jobCard.location} country={jobCard.country} reward={jobCard.reward} />
                ))}
            </ul>
        );
    }
    const onScroll = () =>{
        setScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])
    return (
        <>
            <Header searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <div id="jobListCnt">
                <div id="navBarCnt">
                    <div id="navBar">
                        <div>
                            <button id="jobGroup">
                                <span className="jobGroupTitle">전체</span>
                                <span className="moreButton">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                        <path fill="#767676" fillRule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="jobCategory">
                            <div id="jobVertical">|</div>
                            <div className="jobCategoryTitle">직군을 선택해주세요.</div>
                        </div>
                    </div>
                </div>
                <div id="jobListWrap">
                    <div className={'filterCnt_' + (scroll > 300? 'scrolled':'top')}>
                        <JobFilter />
                    </div>
                    <div id="jobList">
                        <div id="bookmark">
                            <button type="button">
                                <svg width="13" height="17" viewBox="0 0 13 17" style={{color: "rgb(51, 102, 255)"}}>
                                    <defs>
                                        <path id="bookmarkIconFill" d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"></path>
                                    </defs>
                                    <g fill="none" fillRule="evenodd" transform="translate(.188)">
                                        <use fill="currentColor" xlinkHref="#bookmarkIconFill"></use>
                                    </g>
                                </svg>
                                <span>북마크 모아보기</span>
                                <svg width="12" height="12" viewBox="0 0 12 12">
                                    <path fill="currentColor" d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"></path>
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