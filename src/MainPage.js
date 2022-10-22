import Header from './Header';
import Footer from './Footer';
import './MainPage.css';

function TopBannerItem({href, src, bannerHeader, bannerBody}) {
  return(
    <div className="topBannerItem">
      <a href={href}>
        <img src={src} style={{width: 1060, height: 300}} alt='No banner'/>
      </a>
      <div className="topBannerInform">
        <h2>{bannerHeader}</h2>
        <h3>{bannerBody}</h3>
        <hr />
        <a href={href}>바로 가기 &gt;</a>
      </div>
    </div>
  );
}

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

function EventCard({href, src, tag1, tag2, title, date}) {
  return(
  <a className="eventItem" href={href}>
    <img src={src} style={{width: 522, height: 273}} alt="No img"/>
    <div className="eventContent">
      <div className="eventTag">
        <span className="eventTagOnline">{tag1}</span>
        <span className="eventTagVOD">{tag2}</span>
      </div>
      <div className="eventTitle">{title}</div>
      <div className="eventDate">{date}</div>
    </div>
  </a>
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
          <div id="topBanner">
            <button type="button" className="topBanner_arrow topBanner_arrow_left">&lt;</button>
            <button type="button" className="topBanner_arrow topBanner_arrow_right">&gt;</button>
            <div className="topBannerWrap">
              <TopBannerItem href="https://www.wanted.co.kr/events/wantedgigs_find" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1843%2F6e4ca95f.jpg&w=1060&q=100" bannerHeader="원티드긱스 &lt;개발자의 달&gt;" bannerBody="프리랜서 개발자를 위한 이벤트" />
              <TopBannerItem href="https://www.wanted.co.kr/events/wantedcon29" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1837%2F4259e885.jpg&w=1060&q=100" bannerHeader="HR 리더들의 진짜 HR 이야기" bannerBody="HR 리더들의 효율적인 업무 비결" />
              <TopBannerItem href="https://www.wanted.co.kr/events/Lead_coaching2210" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1835%2F487d8bb0.jpg&w=1060&q=100" bannerHeader="Startup Lead Group Coaching" bannerBody="팀장을 위한 그룹코칭" />
              <TopBannerItem href="https://www.wanted.co.kr/events/gdsc-jobfair-live-2022" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1844%2F3d999be3.jpg&w=1060&q=100" bannerHeader="[FREE] GDSC Job Fair Live" bannerBody="국내 최고 스타트업 채용소식을 볼 수 있는 기회!" />
            </div>
          </div>
          <div className="section" id="career">
            <div className="sectionWrap" id="careerWrap">
              <div id="careerTitle">
                <h2>나에게 필요한 커리어 인사이트</h2>
                <button type="button">
                  <img src="./img/questionMark.png" style={{width:24, height:24}} alt="No img" />
                </button>
              </div>
              <div id="careerTagList">
                <div className="scrollWrap">
                  <div className="scrollSnap" id="career_scrollSnap">
                    <div className="scroll_slides" id="career_slides">
                      <button type="button" className="careerTag_selected">회사생활</button>
                      <button type="button" className="careerTag">조직문화</button>
                      <button type="button" className="careerTag">취업/이직</button>
                      <button type="button" className="careerTag">IT/기술</button>
                      <button type="button" className="careerTag">라이프스타일</button>
                      <button type="button" className="careerTag">리더십</button>
                      <button type="button" className="careerTag">인간관계</button>
                      <button type="button" className="careerTag">커리어고민</button>
                      <button type="button" className="careerTag">디자인</button>
                      <button type="button" className="careerTag">콘텐츠 제작</button>
                      <button type="button" className="careerTag">마케팅</button>
                      <button type="button" className="careerTag">서비스기획</button>
                      <button type="button" className="careerTag">경영/전략</button>
                      <button type="button" className="careerTag">노무</button>
                      <button type="button" className="careerTag">개발</button>
                      <button type="button" className="careerTag">데이터</button>
                      <button type="button" className="careerTag">UX/UI</button>
                      <button type="button" className="careerTag">MD</button>
                      <button type="button" className="careerTag">HR</button>
                      <button type="button" className="careerTag">브랜딩</button>
                    </div>
                    <button type="button" className="arrowButton arrowLeft">&lt;</button>
                    <button type="button" className="arrowButton arrowRight">&gt;</button>
                  </div>
                  <button type="button" className="tagMoreButton">. . .</button>
                </div>
              </div>
              <ul>
                <CareerCard href="https://www.wanted.co.kr/career-video/201" 
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220204%2F6%2F92347876.jpg&w=500&q=75" 
                title="성장하는 인하우스 디자이너 되기 - 사이드 프로젝트편" 
                content="본업 못지 않게 열심히 사이드 프로젝트를 하는 분들이 있습니다. 이분들은 과연 어떤 갈증이 있었기에 사이드 프로젝트를 하게 되었을까요? 그리고 사이드 프로젝트를 진행하면 어떤 점이 좋을까요? 사이드 프로젝트의 장점과, 프로젝트를 진행하며 느낀 점에 대해서 솔직하게 이야기를 나눠봤습니다." 
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" 
                author="캐치패션 최규성, 제주맥주 안소현, 샵백 나예성, 차봇 모빌리티 이은지" />
                <CareerCard href="https://www.wanted.co.kr/career-video/210" 
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220204%2F6%2F10465818.jpg&w=500&q=75" 
                title="경영기획&amp;전략기획 지침서 08 - 기획러의 이직과 커리어패스" 
                content="경영 기획, 전략 직무의 사람들은 어떻게 커리어를 쌓아가고 있을까요?경영 기획 직군은 멋있어 보이는 동시에, 구체적으로 어떤 일을 하는지 외부에서 알기 어려운 직무이기도 한데요.금융/화악/화장품 등 다양한 산업군에서 경영기획 업무로 커리어를 쌓고 있는 네 분의 연사님을 모시고 기획인의 이직과 커리어패스에 대해 솔직한 이야기를 나눴습니다." 
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" 
                author="조로, 라이언, 메이, 앨리스" />
                <CareerCard href="https://www.wanted.co.kr/career-video/86" 
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210915%2F2%2F16220799.jpg&w=500&q=75" 
                title="돌댕이 리더십 부수기 - 피승재" 
                content="코로나 19로 모든 직장인들이 힘든 시간을 가지고 있습니다.대한민국 리더도 역시 힘든 시간을 가지고 있습니다.MZ세대와 기성세대의 다리 역할을 해야 하는 지금 우리의 리더의 모습을 바라보고 특히, 한국 애브비에서 진행한 힐링 리더십에 대한 소개를 드리고자 합니다." 
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" 
                author="한국 애브비 피승재" />
                <CareerCard href="https://www.wanted.co.kr/career-video/137" 
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211124%2F7%2F27374484.jpg&w=500&q=75" 
                title="XYZ가 함께 행복하게 일하는 법" 
                content="XYZ 각 세대를 대표하는 75년생 X, 85년생 Y, 95년생 Z가 회사와 조직 생활을 중심으로 서로의 차이를 이해하고, 함께 신뢰, 존중하며 성공적인 내 일(‘미래’ 그리고 ‘나의 일’)에 대해 이야기 합니다. 각 세대의 특성을 알아보고 세대별로 추구하는 리더십과 팔로워십, 그리고 함께 어울려 만들어가는 조직 문화가 어떤 것인지 확인해보세요!" 
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" 
                author="최원설, 이재하, 고은비" />
                <CareerCard href="https://brunch.co.kr/@vicotorlee/179" 
                img="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F246x%2Fimage%2Fk1QGoMDua3otuviA0T8vPb5jMqw.png&w=500&q=75" 
                title="포트폴리오 사이트 개선하기" 
                content="최근에 웹 매거진 Montage.gif를 만들어서 포트폴리오 사이트를 업데이트했다. 근데 업데이트하면서 지금 쓰고 있는 포트폴리오 사이트가 거의 2년이나 되었다는 사실을 알게 됐다.  연말이기도 하여 2년 동안 써온 포트폴리오 사이트를 둘러봤다. 그간 나름 잘 써왔는데 분명 아쉬운 부분도 있었다.  그래서 새해 기념으로 포트폴리오 사이트를 개선해봐야겠다는" 
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90" 
                author="이준우" />
                <CareerCard href="https://www.wanted.co.kr/career-video/288" 
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220703%2F14%2F51209230.jpg&w=500&q=75" 
                title="Talk : 면접을부탁해 - 전체직군" 
                content="다수의 면접에 참여하면서 알게 된 합격하는 vs 불합격하는 면접자의 차이,면접관이 궁금해하는 점 등 면접자가 면접을 준비할 때 도움이 될만한 이야기를 공유합니다." 
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" 
                author="원티드랩 이하나" />
                <CareerCard href="https://www.youtube.com/watch?v=1bcmmc2rTBE" 
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2F1bcmmc2rTBE%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLBUsMnUeSTKHgkoMhEqrwmFAOSFpQ&w=500&q=75" 
                title="주니어 개발자 ‘실제’ 이력서 첨삭해 보았습니다 | 개발자 특집 5편" 
                content="" 
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&w=60&q=90" 
                author="eo" />
                <CareerCard href="https://www.wanted.co.kr/career-video/37" 
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F4%2F00307525.jpg&w=500&q=75" 
                title="서류전형, 실제로 그러할까? - 임휘진" 
                content="머리로는 이해했지만, 막상 활용하기에는 어려웠던 이력서 작성 노하우들...커리어를 고민하는 또 한 사람의 직장인으로서, 그리고 호기심 많은 데이터분석가로서, '잘 쓴' 이력서에서는 그 노하우들이 어떻게 구현되었는지 늘 궁금했습니다.오늘은 이력서 분석 콘텐츠의 두 번째 영상으로 서류전형의 비밀에 대해 살펴봤습니다.이 영상의 여러분의 서류 합격률을 높이는 데 도움이 되기를 바랍니다." 
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" 
                author="원티드랩 임휘진" />
              </ul>
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
              <ul>
                <ArticleCard href="https://www.wanted.co.kr/events/22_09_s14_b01" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2427%2F9d71c6cc.jpg&w=800&q=75" title="애써 모셔온 시니어, 우리 조직엔 안 맞는 사람?" tags="#HR #조직문화 #리더십" />
                <ArticleCard href="https://www.wanted.co.kr/events/monthlypick10" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2432%2Fbf1903f2.jpg&w=800&q=75" title="선선한 가을 날씨에 어울릴 아티클 추천 리스트" tags="#마케팅·광고 #커리어고민 #시리즈" />
                <ArticleCard href="https://www.wanted.co.kr/events/22_10_s01_b02" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2440%2F22cd7b04.jpg&w=800&q=75" title="냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요" tags="#프리랜서 #커리어고민 #취업/이직" />
                <ArticleCard href="https://www.wanted.co.kr/events/22_09_s18_b01" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2438%2F9890601e.jpg&w=800&q=75" title="CX 팀 조직 구조 설계부터 채용 공고 작성법까지" tags="#프리랜서 #커리어고민 #취업/이직" />
              </ul>
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
              <ul>
                <VODCard href="https://www.wanted.co.kr/wantedplus/video/qn0639PI" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210713%2F1%2F22621559.jpg&w=800&q=75" time="1:25:16" author="인터비즈 팀장클럽 김진영" title="팀장으로 산다는 건" series="팀장으로 산다는 건 : Live Talk #30"/>
                <VODCard href="https://www.wanted.co.kr/wantedplus/video/PQh4w9cI" src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210413%2F2%2F39565343.jpg&w=800&q=75" time="24:02" author="전) 원티드랩 최보명" title="포트폴리오를 부탁해" series="[무료] 포트폴리오를 부탁해 by 원티드"/>
                <VODCard href="https://www.wanted.co.kr/wantedplus/video/j8urU6y3" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210618%2F2%2F34753914.jpg&w=800&q=75" time="1:34:40" author="노무법인 예담HR컨설팅 장내석" title="회사를 구하는 인사" series="회사를 구하는 인사 : Live Talk #27"/>
                <VODCard href="https://www.wanted.co.kr/wantedplus/video/BCkWLkZC" src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211111%2F10%2F24788089.jpg&w=800&q=75" time="58:29" author="피플펀드 권순관, 드림어스 제정민" title="신입 개발자의 취업 성공기" series="신입 개발자의 취업 성공기 : Live Talk #50"/>
              </ul>
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
              <div id="eventContainer">
                <EventCard href="https://www.wanted.co.kr/events/talk85" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2406%2F6aae1a5c.jpg&amp;w=1200&amp;q=100" tag1="온라인" tag2="VOD" title="[무료] 인간관계, 회사생활, 커리어고민 1분만에 해결하기" date="" />
                <EventCard href="https://www.wanted.co.kr/events/wantedsalon221026" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2421%2F7065bb13.jpg&amp;w=1200&amp;q=100" tag1="온라인" tag2="VOD" title="10월 원티드살롱(평가보상편)" date="" />
              </div>
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
