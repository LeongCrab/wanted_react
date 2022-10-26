import React, { useState} from 'react';
import Header from './Header';
import JobCard from './JobCard';
import './JobList.css';

function JobTagSlider({}){
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
            <button className="jobTag" style={{backgroundColor: `RGB(${backgroundColor})`}}>
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
                <JobTag content="연봉이 최고의 복지" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75" backgroundColor="242, 251, 245" />
                <JobTag content="재택근무" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75" backgroundColor="243, 249, 254" />
                <JobTag content="퇴사율 10% 이하" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75" backgroundColor="243, 242, 251" />
                <JobTag content="급성장 중" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75" backgroundColor="246, 248, 238" />
                <JobTag content="병역특례" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75" backgroundColor="247, 242, 249" />
                <JobTag content="50인 이하" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F3a965d18-c524-11ec-901c-acde48001122.png&amp;w=50&amp;q=75" backgroundColor="238, 250, 249" />
                <JobTag content="50인 이상" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&amp;w=50&amp;q=75" backgroundColor="239, 241, 251" />
                <JobTag content="업력 5년 이상" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&w=50&q=75" backgroundColor="242, 251, 245" />
                <JobTag content="유연근무" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F827f6146-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" backgroundColor="243, 249, 254" />
                <JobTag content="자유로운 휴가" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F68dadb80-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" backgroundColor="243, 242, 251" />
                <JobTag content="일한만큼 받는 보상" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F472333e8-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" backgroundColor="246, 248, 238" />
                <JobTag content="수평적 문화" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F78563d98-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" backgroundColor="247, 242, 249" />
                <JobTag content="요즘 뜨는 산업" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4e1b135a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" backgroundColor="238, 250, 249" />
                <JobTag content="식사·간식 제공" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F53ca893e-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" backgroundColor="239, 241, 251" />
                
            </div>
        </div>
        
    );
}


function FeaturedCard({href, src, logo, header, body}){
    return(
        <a className="featuredCard" href={href}>
            <div className="featuredHeader">
                <img src={src} alt={src} />
            </div>
            <div className="featuredFooter">
                <div className="featuredLogo" style={{backgroundImage: `url(${logo})`}} />
                <h4>{header}</h4>
                <h5>{body}</h5>
            </div>
        </a>
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
                        <h3 id="featured">적극 채용 중인 회사</h3>
                        <div id="featuredWrap">
                            <FeaturedCard href="https://www.wanted.co.kr/company/1355" src="https://static.wanted.co.kr/images/company/1355/16906_2_0.__1080_790.jpg" logo="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5_01c06ee3-c3ec-4c81-8f3f-ab7418f1d75a.jpg&amp;w=100&amp;q=75" header="탭조이코리아(Tapjoy)" body="8개 포지션"/>
                            <FeaturedCard href="https://www.wanted.co.kr/company/2299" src="https://static.wanted.co.kr/images/company/2299/csrdy9zbgjy5ne6d__1080_790.jpg" logo="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.e44c0a94.jpg&amp;w=100&amp;q=75" header="스페이스오디티(Space Oddity)" body="5개 포지션"/>
                            <FeaturedCard href="https://www.wanted.co.kr/company/35903" src="https://static.wanted.co.kr/images/company/35903/xbk7aqiygykq2crq__1080_790.jpg" logo="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.5654364d.jpg&amp;w=100&amp;q=75" header="롱기스트" body="3개 포지션"/>
                            <FeaturedCard href="https://www.wanted.co.kr/company/3430" src="https://static.wanted.co.kr/images/company/3430/4l6jjlieocixrohk__1080_790.jpg" logo="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.568317ca.png&amp;w=100&amp;q=75" header="스윗코리아" body="7개 포지션"/>
                            <FeaturedCard href="https://www.wanted.co.kr/company/2237" src="https://static.wanted.co.kr/images/company/2237/zya13wpnohi0uffa__1080_790.jpg" logo="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.ad446faf.jpg&amp;w=100&amp;q=75" header="스페이스워크" body="7개 포지션"/>
                        </div>
                        <ul className="jobCardList">
                            <JobCard href="https://www.wanted.co.kr/wd/91370" 
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F19077%2F6qu0vur51f7mcof7__1080_790.jpg&w=1000&q=75" 
                            position ="신약연구(바이오) 연구원" name="크리스탈지노믹스" label="응답률 매우 높음" location="경기" country="한국" reward="1,000,000"/>
                            <JobCard href="https://www.wanted.co.kr/wd/80693" 
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F19077%2F6qu0vur51f7mcof7__1080_790.jpg&w=1000&q=75" 
                            position ="의약화학 연구원" name="크리스탈지노믹스" label="응답률 매우 높음" location="경기" country="한국" reward="1,000,000"/>
                            <JobCard href="https://www.wanted.co.kr/wd/130144" 
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30722%2Fgyznvv4pwyjeuszp__1080_790.jpg&w=1000&q=75"
                            position ="법무팀 사원" name="태강대부" label="응답률 매우 높음" location="서울" country="한국" reward="1,000,000"/>
                            <JobCard href="https://www.wanted.co.kr/wd/126533" 
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F35428%2F6ba26d5ggqdwbh5l__1080_790.jpg&w=1000&q=75"
                            position ="F&B 크루" name="엠오디 호텔카푸치노(코오롱그룹 호텔사업부)" label="응답률 매우 높음" location="서울" country="한국" reward="1,000,000"/>
                            <JobCard href="https://www.wanted.co.kr/wd/69881" 
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F5466%2Fkhpxo8tk1emf8z1p__1080_790.jpg&w=1000&q=75"
                            position ="콘텐츠 디자이너" name="러닝스푼즈" label="응답률 매우 높음" location="서울" country="한국" reward="1,000,000"/>
                            <JobCard href="https://www.wanted.co.kr/wd/130924" 
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31170%2Frrjdg2wrtwbsypjv__1080_790.png&w=1000&q=75"
                            position ="그래픽 디자이너" name="아우스월드와이드" label="응답률 매우 높음" location="서울" country="한국" reward="1,000,000"/>
                            <JobCard href="https://www.wanted.co.kr/wd/132153" 
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31829%2Fjnpo0nc96whq3m5x__1080_790.jpg&w=1000&q=75"
                            position ="F/W 개발 엔지니어 (for RADAR system)" name="모본" label="응답률 매우 높음" location="서울" country="한국" reward="1,000,000"/>
                             <JobCard href="https://www.wanted.co.kr/wd/103801" 
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30705%2Fci4dbkqcqia7oogu__1080_790.jpg&w=1000&q=75"
                            position ="[병역특례] 웹 개발자/SW 엔지니어 전문연구요원" name="볼트앤너트" label="응답률 매우 높음" location="서울" country="한국" reward="1,000,000"/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobList;