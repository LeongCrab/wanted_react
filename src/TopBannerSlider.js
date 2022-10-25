import React, {useRef} from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopBannerSlider.css";

export default function TopBannerSlider () {
  const sliderRef = useRef();

  const TopBannerItem = ({href, src, bannerHeader, bannerBody}) => {
    return(
      <div className="topBannerItem">
        <a href={href}>
          <img src={src} alt='No banner'/>
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

  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: false,
    autoplaySpeed: 4000,
    speed: 300,
    pauseOnHover: true,
    variableWidth: true,
  };
  return (
    <div className="topBannerCnt">
      <button type="button" className="topBanner_arrow topBanner_arrow_left" onClick={() => sliderRef.current.slickPrev()}>&lt;</button>
      <button type="button" className="topBanner_arrow topBanner_arrow_right" onClick={() => sliderRef.current.slickNext()}>&gt;</button>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <TopBannerItem href="https://www.wanted.co.kr/events/wantedgigs_find" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1843%2F6e4ca95f.jpg&w=1060&q=100" bannerHeader="원티드긱스 &lt;개발자의 달&gt;" bannerBody="프리랜서 개발자를 위한 이벤트" />
        </div>
        <div>
          <TopBannerItem href="https://www.wanted.co.kr/events/wantedcon29" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1837%2F4259e885.jpg&w=1060&q=100" bannerHeader="HR 리더들의 진짜 HR 이야기" bannerBody="HR 리더들의 효율적인 업무 비결" />
        </div>
        <div>
          <TopBannerItem href="https://www.wanted.co.kr/events/Lead_coaching2210" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1835%2F487d8bb0.jpg&w=1060&q=100" bannerHeader="Startup Lead Group Coaching" bannerBody="팀장을 위한 그룹코칭" />
        </div>
        <div>
          <TopBannerItem href="https://www.wanted.co.kr/events/gdsc-jobfair-live-2022" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1844%2F3d999be3.jpg&w=1060&q=100" bannerHeader="[FREE] GDSC Job Fair Live" bannerBody="국내 최고 스타트업 채용소식을 볼 수 있는 기회!" />
        </div>
      </Slider>
    </div>
  );
}
