import React, { useState} from 'react';
import Header from './Header';
import JobCard from './JobCard';
import './JobList.css';
import JobListData from './data/JobList.json';
import JobCardListData from './data/JobCardList.json';

function JobTagSlider(){
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
        if (slideX + 300 >= 0){
            setPrevBtn(false);
            setSlideX(0);
        }
    };
      const toNext = () => {
        setPrevBtn(true);
        setSlideX(slideX - 300);
        if (slideX - 300 <= -1000){
            setNextBtn(false);
            setSlideX(-1000);
        }
    };
    function JobTag({content, src, backgroundColor}){
        return(
            <button className="jobTag" style={{backgroundColor: backgroundColor}}>
                {content}
                <img src={src} alt={content} />
            </button>
        );
    }

    return(
        <div className="tagWrap">
            {prevBtn && (<button type="button" onClick={toPrev} className="arrowButton arrowLeft">&lt;</button>)}
            {nextBtn && (<button type="button" onClick={toNext} className="arrowButton arrowRight">&gt;</button>)}
            <div className="tagFilter" style={style}>
                {JobListData.jobTagList.map(tag => (
                    <JobTag key={tag.id} content={tag.content} src={tag.src} backgroundColor={tag.backgroundColor} />
                ))}
            </div>
        </div>
        
    );
}
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
                {JobListData.featuredList.map(featured => (
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
function JobList() {
    return (
        <>
            <div className="headerDummy" style={{height: 50}} />
            <Header />
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
                    <div id="filter">
                        <div id="filterWrap">
                            <div className="buttonGroup">
                                <button className="filterButton">
                                    <span className="buttonTitle">
                                        지역
                                        <span className="filterCount">1</span>
                                    </span>
                                    <span className="buttonDisplay">한국</span>
                                </button>
                                <div>
                                    <button className="filterButton" >
                                        <span className="buttonTitle">경력</span>
                                        <span className="buttonDisplay">신입</span>
                                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
                                            <path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <button className="filterButton" >
                                        <span className="buttonTitle">
                                            기술스택
                                        </span>
                                        <span className="buttonDisplay"></span>
                                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
                                            <path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <select id="customSelect">
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

export default JobList;