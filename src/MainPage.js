import React, { useState } from 'react';

import Header from './Header';
import TopBannerSlider from './TopBannerSlider';
import Footer from './Footer';
import './css/MainPage.css';
import MainPageData from './data/MainPage.json';

function CareerTagList() {
  const [clicked, setClicked] = useState(0);
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
    if (slideX - 300 <= -1110){
      setNextBtn(false);
      setSlideX(-1110);
    }
  };
  return(
    <div id="careerTagList">
      <div className="scrollWrap">
        <div className="scrollSnap">
          <div className="scroll_slides" style={style}>
            {MainPageData.tagList.map((tag, i) => (
              <button type="button" key={tag + i} onClick={() => setClicked(i)} className={"careerTag" + (clicked === i ? "_selected" : "")}>{tag}</button>
            ))}
          </div>
          {prevBtn && (<button type="button" onClick={toPrev} className="arrowButton arrowLeft">&lt;</button>)}
          {nextBtn && (<button type="button" onClick={toNext} className="arrowButton arrowRight">&gt;</button>)}
        </div>
        <button type="button" className="tagMoreButton">. . .</button>
      </div>
    </div>
  );
}
function CareerCardList(){
  function CareerCard({href, img, title, content, icon, author}) {
    return(
      <li>
        <a href={href}>
          <img src={img} alt="No img"/>
          <p className="careerTitle">{title}</p>
          <p className="careerContent">{content}</p>
          <div className="careerCardInfo">
            <img src={icon} alt="No icon"/>
            <p>{author}</p>
          </div>
        </a>
      </li>
    );
  }
  CareerCard.defaultProps = {
    icon: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
  }
  return(
    <ul>
       {MainPageData.careerCardList.map(card => (
          <CareerCard key={card.id} href={card.href} img={card.img} title={card.title} content={card.content} icon={card.icon} author={card.author} />
        ))}
    </ul>
  );
}

function ArticleCardList() {
  function ArticleCard({href, src, title, tags}) {
    return(
      <li>
        <a href={href}>
          <img src={src} style={{width: 250, height: 175}} alt="No img"/>
          <p className="articleTitle">{title}</p>
          <p className="articleCategory">{tags}</p>
        </a>
      </li>
    );
  }

  return(
    <ul>
      {MainPageData.articleCardList.map(card => (
        <ArticleCard key={card.id} href={card.href} src={card.src} title={card.title} tags={card.tags} />
      ))}
    </ul>
  );

}

function VODCardList() {
  function VODCard({href, src, time, author, title, series}) {
    return(
      <li>
        <a href={href}>
          <div className="thumbnail">
            <img src={src} style={{width: 250, height: 175}} alt="No img"/>
            <span>{time}</span>
          </div>
          <p className="vodAuthor">{author}</p>
          <p className="vodTitle">{title}</p>
          <p className="vodNumber">{series}</p>
        </a>
      </li>
    );
  }
  return(
    <ul>
      {MainPageData.VODCardList.map(card => (
        <VODCard key={card.id} href={card.href} src={card.src} time={card.time} author={card.author} title={card.title} series={card.series} />
      ))}
    </ul>
  );

}

function EventCardList(){
  function EventCard({href, src, tags, title, date}) {
    return(
    <a className="eventItem" href={href}>
      <img src={src} style={{width: 522, height: 273}} alt="No img"/>
      <div className="eventContent">
        <div className="eventTag">
          {tags.map((tag,idx) => (
            <span key={idx} className={`eventTag${tag.id}`}>{tag.content}</span>
          ))}
        </div>
        <div className="eventTitle">{title}</div>
        <div className="eventDate">{date}</div>
      </div>
    </a>
    );
  }

  return(
    <div id="eventContainer">
      {MainPageData.eventCardList.map(card => (
        <EventCard key={card.id} href={card.href} src={card.src} tags={card.tags} title={card.title} date={card.date} />       
      ))}
    </div>
  );

}

function InfoBtn({href, src, title}) {
  return(
    <a href={href}>
      <div><img src={src} style={{width: 32, height: 32}} alt="No img" /></div>
      <div>{title} &gt;</div>
    </a>
  );
}

function MainPage() {
  return (
    <>
      <div className="headerDummy" style={{height: 50}} />
      <Header />
      <div id="main">
        <div id="mainWrap">
          <TopBannerSlider />
          <div className="section" id="career">
            <div className="sectionWrap" id="careerWrap">
              <div id="careerTitle">
                <h2>나에게 필요한 커리어 인사이트</h2>
                <button type="button">
                  <img src="./img/questionMark.png" style={{width:24, height:24}} alt="No img" />
                </button>
              </div>
              <CareerTagList />
              <CareerCardList />
              <div id="careerMore">
                <button type="button">
                  <p>더 많은 콘텐츠 보기</p>
                  <img src="./img/check.png" alt="No Check" />
                </button>
              </div>
            </div>
          </div>
          <hr className="divider" />
          <div className="section" id="article">
            <div className="sectionWrap" id="articleWrap">
              <button type="button" className="arrowButton arrowLeft">&lt;</button>
              <button type="button" className="arrowButton arrowRight">&gt;</button>
              <div className="bannerHead">
                <div className="bannerTitle">
                  <div>3분만에 읽는 Wanted+ 아티클</div>
                  <a href="https://www.wanted.co.kr/events?sort=deadline&label=article&payable=all">아티클 전체 보기 &gt;</a>
                </div>
              </div>
              <ArticleCardList />
            </div>
          </div>
          <hr className="divider" />
          <div className="section" id="vod">
            <div className="sectionWrap" id="vodWrap">
              <button type="button" className="arrowButton arrowLeft">&lt;</button>
              <button type="button" className="arrowButton arrowRight">&gt;</button>
              <div className="bannerHead">
                <div className="bannerTitle">
                  <div>직장인을 위한 Wanted+ VOD</div>
                  <a href="https://www.wanted.co.kr/wantedplus">VOD 전체 보기 &gt;</a>
                </div>
              </div>
              <VODCardList />
            </div>
          </div>
          <div className="lineBanner">
            <a href="https://www.wanted.co.kr/profile">직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요. 👀 &gt;</a>
          </div>
          <div className="section" id="event">
            <div className="sectionWrap" id="eventWrap">
              <button type="button" className="arrowButton arrowLeft">&lt;</button>
              <button type="button" className="arrowButton arrowRight">&gt;</button>
              <div className="bannerHead">
                <div className="bannerTitle">
                  <div>커리어 성장을 위한 맞춤 이벤트</div>
                  <a href="https://www.wanted.co.kr/events">이벤트 전체 보기 &gt;</a>
                </div>
              </div>
              <EventCardList />
            </div>
          </div>
          <div className="section" id="ad">
            <div className="sectionWrap" id="adWrap">
              <div className="adLeft">
                <div className="adTop">
                  <svg className="SvgIcon_SvgIcon__root__svg__DKYBi FirstWantedPlusSubscribe_FirstWantedPlusSubscribe__title__Logo__Svg__ivrbt" viewBox="0 0 160 31">
                    <path d="M0.140625 10.0156L6.11719 29H11.4258L15.5391 16.5547L19.6172 29H24.9609L30.9375 10.0156H25.6289L22.1133 21.8984L18.2461 10.0156H12.7969L8.92969 21.8984L5.41406 10.0156H0.140625ZM46.5469 29H51.6094V10.0156H46.5469V11.9844C45.1758 10.2441 43.1895 9.3125 40.6406 9.3125C35.2969 9.3125 31.4121 13.6016 31.4297 19.5078C31.4121 25.4141 35.2969 29.7031 40.6406 29.7031C43.1895 29.7031 45.1758 28.7891 46.5469 27.0664V29ZM36.4922 19.5078C36.4746 16.2559 38.6016 13.8828 41.5547 13.8828C44.543 13.8828 46.5117 16.0977 46.5469 19.5078C46.5117 22.918 44.543 25.1328 41.5547 25.1328C38.6016 25.1328 36.4746 22.7598 36.4922 19.5078ZM60.0469 29V17.75C60.082 15.7285 61.6289 14.0234 63.7383 14.0234C66.041 14.0234 67.2188 15.5527 67.2188 18.1719V29H72.2812V16.7656C72.2812 12.125 69.6445 9.3125 65.5312 9.3125C63.2285 9.3125 61.3125 10.4023 60.0469 12.1953V10.0156H54.9844V29H60.0469ZM86.6602 10.0156H82.8633V3.72266L77.8008 5.76172V10.0156H74.3906V14.5156H77.8008V22.7422C77.8008 28.1035 81.3867 30.2305 86.6602 29.1758V24.5352C83.7949 25.0801 82.8633 24.1836 82.8633 22.7422V14.5156H86.6602V10.0156ZM89.1211 19.5078C89.1211 25.4141 93.2871 29.7031 99 29.7031C103.078 29.7031 106.418 27.5762 108.035 23.832L103.148 22.6367C102.34 24.2012 100.881 25.1328 99 25.1328C96.4863 25.1328 94.7285 23.4805 94.2891 20.8438H108.809C108.844 20.4043 108.879 19.9648 108.879 19.5078C108.861 13.6016 104.713 9.3125 99 9.3125C93.2871 9.3125 89.1211 13.6016 89.1211 19.5078ZM94.5176 17.3281C94.834 15.377 96.4688 13.8828 99 13.8828C101.496 13.8828 103.113 15.377 103.465 17.3281H94.5176ZM130.746 29V0.804688L125.684 2.84375V11.9844C124.312 10.2441 122.326 9.3125 119.777 9.3125C114.434 9.3125 110.549 13.6016 110.566 19.5078C110.549 25.4141 114.434 29.7031 119.777 29.7031C122.326 29.7031 124.312 28.7891 125.684 27.0664V29H130.746ZM115.629 19.5078C115.611 16.2559 117.738 13.8828 120.691 13.8828C123.68 13.8828 125.648 16.0977 125.684 19.5078C125.648 22.918 123.68 25.1328 120.691 25.1328C117.738 25.1328 115.611 22.7598 115.629 19.5078ZM148.148 16.4141H141.363V20.3164H148.148V27.3828H152.191V20.3164H159.012V16.4141H152.191V9.41797H148.148V16.4141Z" fill="#000000"></path>
                  </svg>
                  <div>구독해야하는 이유</div>
                </div>
                <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
                <a href="https://www.wanted.co.kr/events/wantedplus"> V 첫 구독 0원 신청하기</a>
              </div>
              <div>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90" style={{width: 544.81, height: 158}} alt="No img"/>
              </div>
            </div>
          </div>
          <div className="section" id="info">
            <div className="sectionWrap">
              <div id="infoTitle">채용 정보를 찾고 계셨나요?</div>
              <div id="infoContainer">
                <InfoBtn href="https://www.wanted.co.kr/wdlist" src="./img/search.png" title="채용공고"/>
                <InfoBtn href="https://www.wanted.co.kr/profile" src="./img/profile.png" title="내 프로필"/>
                <InfoBtn href="https://www.wanted.co.kr/matchup/intro" src="./img/matchup.png" title="매치업"/>
                <InfoBtn href="https://www.wanted.co.kr/salary" src="./img/earn.png" title="직군별 연봉"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
