import "./css/Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div id="footerWrap">
        <div id="footerTop">
          <div id="footerTopLeft">
            <div id="footerLogo">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                alt="no img"
              />
            </div>
            <a
              href="https://www.wantedlab.com/"
              target="_blank"
              rel="nooopener noreferrer"
            >
              기업소개
            </a>
            <a
              href="https://www.wanted.co.kr/terms"
              target="_blank"
              rel="nooopener noreferrer"
            >
              이용약관
            </a>
            <a
              href="https://www.wanted.co.kr/privacy"
              target="_blank"
              rel="nooopener noreferrer"
            >
              개인정보 처리방침
            </a>
            <a
              href="https://www.wantedlab.com/hc/ko"
              target="_blank"
              rel="nooopener noreferrer"
            >
              고객센터
            </a>
          </div>
          <div id="socialLink">
            <a href="https://www.instagram.com/wantedjobs.kr/">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100"
                alt="no img"
              />
            </a>
            <a href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100"
                alt="no img"
              />
            </a>
            <a href="https://www.facebook.com/wantedkr">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100"
                alt="no img"
              />
            </a>
            <a href="https://blog.naver.com/wantedlab">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100"
                alt="no img"
              />
            </a>
            <a href="https://pf.kakao.com/_XqCIxl">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&w=19&q=100"
                alt="no img"
              />
            </a>
            <a href="https://post.naver.com/my.nhn?memberNo=18284175">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=100"
                alt="no img"
              />
            </a>
            <a href="https://apps.apple.com/kr/app/id1074569961">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100"
                alt="no img"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.wanted.android.wanted">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100"
                alt="no img"
              />
            </a>
          </div>
        </div>
        <hr />
        <div id="footerBottom">
          <p id="footerText">
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
            롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
            <br />
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
            (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 |
            02-539-7118
            <br />© Wantedlab, Inc.
          </p>
          <div>
            <img
              className="countryFlag"
              src="https://static.wanted.co.kr/images/userweb/ico_KR.svg"
              style={{ width: 24, height: 17 }}
              alt="no img"
            />
            <select id="lang">
              <option value="Korea">한국 (한국어)</option>
              <option value="Japan">日本 (日本語)</option>
              <option value="Worldwide">Worldwide (English)</option>
              <option value="Singapore">Singapore (English)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
