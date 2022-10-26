import React, {useRef} from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopBannerSlider.css";
import TopBanner from "./data/TopBanner.json";

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
      {TopBanner.topBannerItems.map(item => (
          <TopBannerItem key={item.id} href={item.href} src={item.src} bannerHeader={item.bannerHeader} bannerBody={item.bannerBody} />
        ))}
      </Slider>
    </div>
  );
}
