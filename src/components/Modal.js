import React, { useState, useEffect, useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import { ModalContext } from '../modules/ModalStore';

import "../css/Modal.css";

const LogIn = ({ email, setEmail }) => {
  const {contextDispatch} = useContext(ModalContext);

  const emailInput = useRef(null);
  const [password, setPassword] = useState("");
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    emailInput.current.focus();
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const reg_email =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (reg_email.test(e.target.value)) setEmailValid(true);
    else setEmailValid(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setLoginError(false);
  };
  const onSubmitEmail = (e) => {
    e.preventDefault();
    if (email && emailValid) {
      if (localStorage.getItem(email) !== null) {
        if (passwordOpen) {
          if (localStorage.getItem(email) !== null && JSON.parse(localStorage.getItem(email)).password === password) {
            alert(`환영합니다. ${JSON.parse(localStorage.getItem(email)).name}님!`);
            dispatch({type:'LOG_IN', email});
            contextDispatch({type: "MODAL_CLOSE"});
          } else {
            setLoginError(true);
          }
        } else {
          setPasswordOpen(true);
        }
      } else {
        contextDispatch({type: "JOIN_OPEN"});
      }
    }
  };
  return (
    <div className="inputPanel">
      <form onSubmit={onSubmitEmail}>
        <div className="inputWrap">
          <label>이메일</label>
          <div className="inputBody">
            <input
              type="text"
              className={
                (!emailValid && email) || loginError ? "inputError" : "notError"
              }
              ref = {emailInput}
              placeholder="이메일을 입력해 주세요."
              value={email}
              onChange={handleEmail}
            />
          </div>
          {!emailValid && email && (
            <div className="modalError">올바른 이메일 형식을 입력해주세요.</div>
          )}
        </div>
        {passwordOpen && (
          <div className="inputWrap">
            <label>비밀번호</label>
            <div className="inputBody">
              <input
                type="password"
                className={loginError ? "inputError" : "notError"}
                placeholder="비밀번호를 입력해 주세요."
                value={password}
                onChange={handlePassword}
              />
            </div>
            {loginError && (
              <div className="modalError">
                이메일 주소 혹은 비밀번호가 일치하지 않습니다.
              </div>
            )}
          </div>
        )}
        <div id="inputPanelButtons">
          <button id="mailLogin" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd" stroke="#FFF" strokeWidth="2">
                <rect width="17.2" height="14" x="3.4" y="5" rx="3"></rect>
                <path d="M3.2 5.6L12 12l8.8-6.4"></path>
              </g>
            </svg>
            이메일로 계속하기
          </button>
          <div id="modalOr">or</div>
          <div id="modalSocialLogins">다음 계정으로 계속하기</div>
          <div id="modalSocialWrap">
            <div className="modalSocial">
              <button id="kakao">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                >
                  <path
                    fill="#000"
                    fillRule="nonzero"
                    d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"
                  ></path>
                </svg>
              </button>
              <div className="modalSocialTitle">Kakao</div>
            </div>
            <div className="modalSocial">
              <button id="facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="23"
                  viewBox="0 0 12 23"
                >
                  <path
                    fill="#fff"
                    fillRule="nonzero"
                    d="M11.214 12.603l.622-4.055h-3.89V5.917c0-1.11.543-2.191 2.285-2.191H12V.274S10.395 0 8.86 0C5.656 0 3.562 1.942 3.562 5.458v3.09H0v4.055h3.562v9.802c.714.112 1.446.17 2.191.17.746 0 1.478-.058 2.192-.17v-9.802h3.269"
                  ></path>
                </svg>
              </button>
              <div className="modalSocialTitle">Facebook</div>
            </div>
            <div className="modalSocial">
              <button id="google">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                >
                  <g fill="none" fillRule="nonzero">
                    <path
                      fill="#EA4335"
                      d="M11.5 4.574c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.203 1.14 14.6 0 11.5 0 7.005 0 3.115 2.577 1.223 6.335l3.842 2.98c.905-2.718 3.44-4.741 6.435-4.741z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M22.54 11.761c0-.815-.073-1.6-.21-2.352H11.5v4.448h6.19c-.268 1.438-1.078 2.656-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M5.065 13.685c-.23-.69-.36-1.427-.36-2.185s.13-1.495.36-2.185v-2.98H1.223C.444 7.888 0 9.645 0 11.5c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M11.5 23c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.223v2.98C3.115 20.423 7.005 23 11.5 23z"
                    ></path>
                    <path d="M0 0L23 0 23 23 0 23z"></path>
                  </g>
                </svg>
              </button>
              <div className="modalSocialTitle">Google</div>
            </div>
            <div className="modalSocial">
              <button id="apple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="24"
                  viewBox="0 0 19 24"
                >
                  <path
                    fill="#fff"
                    fillRule="nonzero"
                    d="M15.868 12.55c.033 3.574 3.098 4.764 3.132 4.779-.026.084-.49 1.695-1.615 3.36-.972 1.439-1.982 2.872-3.572 2.902-1.562.03-2.065-.938-3.851-.938s-2.344.908-3.823.967c-1.535.059-2.704-1.556-3.684-2.99C.45 17.698-1.08 12.343.975 8.73c1.022-1.795 2.848-2.932 4.83-2.96 1.506-.03 2.929 1.026 3.85 1.026.921 0 2.65-1.27 4.467-1.083.761.032 2.897.31 4.268 2.343-.11.07-2.548 1.506-2.522 4.494m-2.936-8.777c.815-.999 1.363-2.389 1.213-3.772-1.174.048-2.594.792-3.437 1.79-.755.884-1.416 2.298-1.238 3.654 1.31.103 2.647-.673 3.462-1.672"
                  ></path>
                </svg>
              </button>
              <div className="modalSocialTitle">Apple</div>
            </div>
          </div>
        </div>
        <p className="modalInfo">
          걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
          <br />
          회원가입 시{" "}
          <a
            href="https://help.wanted.co.kr/hc/ko/articles/360035484292"
            rel="noopener noreferrer"
            target="_blank"
          >
            개인정보 처리방침
          </a>
          과{" "}
          <a
            href="https://help.wanted.co.kr/hc/ko/articles/360035844551"
            rel="noopener noreferrer"
            target="_blank"
          >
            이용약관
          </a>
          을 확인하였으며, 동의합니다.
        </p>
      </form>
    </div>
  );
};
const CheckBox = ({ agreePrivacy, setAgreePrivacy }) => {
  const [agreeEvent, setAgreeEvent] = useState(false);
  const handleAllAgree = (e) => {
    if (e.target.checked) {
      setAgreePrivacy(true);
      setAgreeEvent(true);
    } else {
      setAgreePrivacy(false);
      setAgreeEvent(false);
    }
  };

  return (
    <div className="agreeWrap">
      <div className="allCheckWrap">
        <div className="labelStyle">
          <input
            type="checkbox"
            onChange={handleAllAgree}
            checked={agreePrivacy && agreeEvent}
          />{" "}
          전체 동의
        </div>
      </div>
      <div className="checkWrap">
        <div className="labelStyle">
          <input
            type="checkbox"
            onChange={(e) => setAgreePrivacy(e.target.checked)}
            checked={agreePrivacy}
          />{" "}
          개인정보 수집 및 이용 동의 (필수)
          <a
            href="https://help.wanted.co.kr/hc/ko/articles/360040127872"
            rel="noopener noreferrer"
            target="_blank"
            className="agreeLink"
          >
            자세히
          </a>
        </div>
      </div>
      <div className="checkWrap">
        <div className="labelStyle">
          <input
            type="checkbox"
            onChange={(e) =>
              e.target.checked ? setAgreeEvent(true) : setAgreeEvent(false)
            }
            checked={agreeEvent}
          />{" "}
          이벤트 소식 등 알림 정보 받기
          <a
            href="https://help.wanted.co.kr/hc/ko/articles/360040540111"
            rel="noopener noreferrer"
            target="_blank"
            className="agreeLink"
          >
            자세히
          </a>
        </div>
      </div>
    </div>
  );
};
const Timer = ({ timeCount, setTimeCount, setGetCodeBtn }) => {
  const timer = useRef(null);
  const time = useRef(300);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (timeCount !== "0:00") {
        time.current -= 1;
        setTimeCount(secToMin(time.current));
      } else {
        time.current = 300;
        setGetCodeBtn(false);
      }
    }, 1000);
    return () => clearInterval(timer.current);
  }, [{ timeCount }]);

  function secToMin(sec) {
    const mm = parseInt(sec / 60);
    const ss = sec % 60;
    return ss < 10 ? `${mm}:0${ss}` : `${mm}:${ss}`;
  }

  return (
    <>
      {timeCount !== "0:00" && (
        <div className="inputGuide valid">인증번호가 요청되었습니다.</div>
      )}
      {timeCount === "0:00" && (
        <div className="inputGuide expired">
          인증 시간이 만료됐어요. 다시 시도해 주세요.
        </div>
      )}
      <span
        className={"timeCode " + (timeCount === "0:00" ? "expired" : "valid")}
      >
        유효시간 {timeCount}
      </span>
    </>
  );
};

function Modal() {
  const { modalOpen, contextDispatch } = useContext(ModalContext);
  const [timeCount, setTimeCount] = useState("5:00");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileCode, setMobileCode] = useState("");
  const [PW, setPW] = useState("");
  const [PWAgain, setPWAgain] = useState("");
  const [country, setCountry] = useState("+82");

  const [nameCheck, setNameCheck] = useState(true);
  const [mobileCheck, setMobileCheck] = useState(true);
  const [mobileValid, setMobileValid] = useState(false);
  const [PWValid, setPWValid] = useState(false);
  const [PWAgainValid, setPWAgainValid] = useState(false);

  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [codeBtn, setCodeBtn] = useState(false);
  const [getCodeBtn, setGetCodeBtn] = useState(false);
  const [inputMobile, setInputMobile] = useState(false);

  useEffect(() => {
    document.body.style = "overflow: hidden";
    return () => (document.body.style = "overflow: auto");
  }, []);
  
  const handleName = (e) => {
    setName(e.target.value);
    setNameCheck(true);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
    setMobileCheck(true);
    const reg_mobile_number1 = /^01[1,6,7,8,9]([0-9]{7,8})$/;
    const reg_mobile_number2 = /^010([0-9]{8})$/;
    if (
      reg_mobile_number1.test(e.target.value) ||
      reg_mobile_number2.test(e.target.value)
    )
      setMobileValid(true);
    else setMobileValid(false);
  };

  const handlePW = (e) => {
    setPW(e.target.value);
    const reg_password =
      /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if (reg_password.test(e.target.value)) setPWValid(true);
    else setPWValid(false);
  };
  const handlePWAgain = (e) => {
    setPWAgain(e.target.value);
    if (PW === e.target.value) setPWAgainValid(true);
    else setPWAgainValid(false);
  };
  const handleJoin = (e) => {
    e.preventDefault();
    if (!name) {
      setNameCheck(false);
    } else if (!mobile) {
      setMobileCheck(false);
    } else if (mobileValid && PWValid && PWAgainValid) {
      const joinUserInfo = {
        name: name,
        country: country,
        password: PW,
        mobile: mobile,
      };
      window.localStorage.setItem(email, JSON.stringify(joinUserInfo));
      alert("회원가입이 완료되었습니다.");
      contextDispatch({type: "MODAL_CLOSE"});
    }
  };

  return (
    <>
      {modalOpen === 1 && (
        <div className="modal">
          <div className="modalCnt">
            <div className="modalHeader">
              <img src="/img/wanted_BI_logotype.png" alt="No Logo" />
              <button
                className="modalCloseButton"
                id="signUpCloseButton"
                type="button"
                onClick={() => contextDispatch({type: "MODAL_CLOSE"})}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
                  <path
                    fill="currentColor"
                    d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="modalBody">
              <div id="textPanel">
                <h1>
                  직장인을 위한
                  <br />
                  커리어 플랫폼, 원티드!
                </h1>
                <h2>
                  커리어 성장과 행복을 위한 여정
                  <br /> 지금 원티드에서 시작하세요.
                </h2>
              </div>
              <LogIn
                email={email}
                setEmail={setEmail}
              />
            </div>
          </div>
          <div className="modalOverlay" onClick={() => contextDispatch({type: "MODAL_CLOSE"})}></div>
        </div>
      )}
      {modalOpen === 2 && (
        <div className="modal joinModal">
          <div className="modalCnt">
            <div className="modalHeader">
              회원가입
              <button
                className="modalCloseButton"
                id="joinCloseButton"
                type="button"
                onClick={() => contextDispatch({type: "MODAL_CLOSE"})}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
                  <path
                    fill="currentColor"
                    d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
                  ></path>
                </svg>
              </button>
            </div>
            <form onSubmit={handleJoin}>
              <div className="modalBody" id="joinModalBody">
                <div className="inputPanel">
                  <div className="inputWrap">
                    <label>이메일</label>
                    <div className="inputBody">
                      <input
                        value={email}
                        className="notError"
                        type="text"
                        placeholder={email}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="inputWrap">
                    <label>이름</label>
                    <div className="inputBody">
                      <input
                        value={name}
                        className={!nameCheck ? "inputError" : "notError"}
                        type="text"
                        placeholder="이름을 입력해 주세요."
                        onChange={handleName}
                      />
                    </div>
                    {!nameCheck && (
                      <div className="modalError">이름은 필수정보입니다.</div>
                    )}
                  </div>
                  <div className="inputWrap">
                    <label>휴대폰 번호</label>
                    <div className="inputBody">
                      <div className="mobileInputSelect">
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        >
                          <option value="+82">+82 South Korea</option>
                          <option value="+81">+81 Japan</option>
                          <option value="+886">+886 Taiwan</option>
                          <option value="+852">+852 Hong Kong</option>
                          <option value="+65">+65 Singapore</option>
                          <option value="+93">+93 Afghanistan</option>
                          <option value="+355">+355 Albania</option>
                          <option value="+213">+213 Algeria</option>
                          <option value="+244">+244 Angola</option>
                          <option value="+54">+54 Argentina</option>
                          <option value="+374">+374 Armenia</option>
                          <option value="+297">+297 Aruba</option>
                          <option value="+61">+61 Australia</option>
                          <option value="+43">+43 Austria</option>
                          <option value="+994">+994 Azerbaijan</option>
                          <option value="+973">+973 Bahrain</option>
                          <option value="+880">+880 Bangladesh</option>
                          <option value="+375">+375 Belarus</option>
                          <option value="+32">+32 Belgium</option>
                          <option value="+501">+501 Belize</option>
                          <option value="+229">+229 Benin</option>
                          <option value="+975">+975 Bhutan</option>
                          <option value="+591">+591 Bolivia</option>
                          <option value="+267">+267 Botswana</option>
                          <option value="+55">+55 Brazil</option>
                          <option value="+673">+673 Brunei</option>
                          <option value="+359">+359 Bulgaria</option>
                          <option value="+226">+226 Burkina Faso</option>
                          <option value="+855">+855 Cambodia</option>
                          <option value="+237">+237 Cameroon</option>
                          <option value=" +1"> +1 Canada</option>
                          <option value="+56">+56 Chile</option>
                          <option value="+86">+86 China</option>
                          <option value="+61">+61 Christmas Island</option>
                          <option value="+61">+61 Cocos Islands</option>
                          <option value="+57">+57 Colombia</option>
                          <option value="+269">+269 Comoros</option>
                          <option value="+506">+506 Costa Rica</option>
                          <option value="+385">+385 Croatia</option>
                          <option value="+53">+53 Cuba</option>
                          <option value="+599">+599 Curacao</option>
                          <option value="+357">+357 Cyprus</option>
                          <option value="+420">+420 Czech Republic</option>
                          <option value="+45">+45 Denmark</option>
                          <option value="+253">+253 Djibouti</option>
                          <option value="+593">+593 Ecuador</option>
                          <option value="+20">+20 Egypt</option>
                          <option value="+503">+503 El Salvador</option>
                          <option value="+240">+240 Equatorial Guinea</option>
                          <option value="+372">+372 Estonia</option>
                          <option value="+251">+251 Ethiopia</option>
                          <option value="+298">+298 Faroe Islands</option>
                          <option value="+679">+679 Fiji</option>
                          <option value="+358">+358 Finland</option>
                          <option value="+33">+33 France</option>
                          <option value="+689">+689 French Polynesia</option>
                          <option value="+220">+220 Gambia</option>
                          <option value="+995">+995 Georgia</option>
                          <option value="+49">+49 Germany</option>
                          <option value="+233">+233 Ghana</option>
                          <option value="+30">+30 Greece</option>
                          <option value="+299">+299 Greenland</option>
                          <option value="+502">+502 Guatemala</option>
                          <option value="+224">+224 Guinea</option>
                          <option value="+592">+592 Guyana</option>
                          <option value="+509">+509 Haiti</option>
                          <option value="+504">+504 Honduras</option>
                          <option value="+36">+36 Hungary</option>
                          <option value="+354">+354 Iceland</option>
                          <option value="+91">+91 India</option>
                          <option value="+62">+62 Indonesia</option>
                          <option value="+98">+98 Iran</option>
                          <option value="+964">+964 Iraq</option>
                          <option value="+353">+353 Ireland</option>
                          <option value="+972">+972 Israel</option>
                          <option value="+39">+39 Italy</option>
                          <option value="+962">+962 Jordan</option>
                          <option value="+7">+7 Kazakhstan</option>
                          <option value="+254">+254 Kenya</option>
                          <option value="+383">+383 Kosovo</option>
                          <option value="+965">+965 Kuwait</option>
                          <option value="+996">+996 Kyrgyzstan</option>
                          <option value="+856">+856 Laos</option>
                          <option value="+371">+371 Latvia</option>
                          <option value="+961">+961 Lebanon</option>
                          <option value="+218">+218 Libya</option>
                          <option value="+423">+423 Liechtenstein</option>
                          <option value="+370">+370 Lithuania</option>
                          <option value="+352">+352 Luxembourg</option>
                          <option value="+853">+853 Macau</option>
                          <option value="+389">+389 Macedonia</option>
                          <option value="+261">+261 Madagascar</option>
                          <option value="+265">+265 Malawi</option>
                          <option value="+60">+60 Malaysia</option>
                          <option value="+960">+960 Maldives</option>
                          <option value="+223">+223 Mali</option>
                          <option value="+356">+356 Malta</option>
                          <option value="+692">+692 Marshall Islands</option>
                          <option value="+222">+222 Mauritania</option>
                          <option value="+230">+230 Mauritius</option>
                          <option value="+52">+52 Mexico</option>
                          <option value="+373">+373 Moldova</option>
                          <option value="+976">+976 Mongolia</option>
                          <option value="+382">+382 Montenegro</option>
                          <option value="+212">+212 Morocco</option>
                          <option value="+258">+258 Mozambique</option>
                          <option value="+95">+95 Myanmar</option>
                          <option value="+264">+264 Namibia</option>
                          <option value="+977">+977 Nepal</option>
                          <option value="+31">+31 Netherlands</option>
                          <option value="+687">+687 New Caledonia</option>
                          <option value="+64">+64 New Zealand</option>
                          <option value="+505">+505 Nicaragua</option>
                          <option value="+227">+227 Niger</option>
                          <option value="+234">+234 Nigeria</option>
                          <option value="+47">+47 Norway</option>
                          <option value="+968">+968 Oman</option>
                          <option value="+92">+92 Pakistan</option>
                          <option value="+680">+680 Palau</option>
                          <option value="+970">+970 Palestine</option>
                          <option value="+507">+507 Panama</option>
                          <option value="+675">+675 Papua New Guinea</option>
                          <option value="+595">+595 Paraguay</option>
                          <option value="+51">+51 Peru</option>
                          <option value="+63">+63 Philippines</option>
                          <option value="+48">+48 Poland</option>
                          <option value="+351">+351 Portugal</option>
                          <option value="+974">+974 Qatar</option>
                          <option value="+262">+262 Reunion</option>
                          <option value="+40">+40 Romania</option>
                          <option value="+7">+7 Russia</option>
                          <option value="+250">+250 Rwanda</option>
                          <option value="+685">+685 Samoa</option>
                          <option value="+966">+966 Saudi Arabia</option>
                          <option value="+221">+221 Senegal</option>
                          <option value="+381">+381 Serbia</option>
                          <option value="+248">+248 Seychelles</option>
                          <option value="+232">+232 Sierra Leone</option>
                          <option value="+421">+421 Slovakia</option>
                          <option value="+386">+386 Slovenia</option>
                          <option value="+677">+677 Solomon Islands</option>
                          <option value="+252">+252 Somalia</option>
                          <option value="+27">+27 South Africa</option>
                          <option value="+211">+211 South Sudan</option>
                          <option value="+34">+34 Spain</option>
                          <option value="+94">+94 Sri Lanka</option>
                          <option value="+249">+249 Sudan</option>
                          <option value="+597">+597 Suriname</option>
                          <option value="+46">+46 Sweden</option>
                          <option value="+41">+41 Switzerland</option>
                          <option value="+963">+963 Syria</option>
                          <option value="+992">+992 Tajikistan</option>
                          <option value="+255">+255 Tanzania</option>
                          <option value="+66">+66 Thailand</option>
                          <option value="+228">+228 Togo</option>
                          <option value="+676">+676 Tonga</option>
                          <option value="+216">+216 Tunisia</option>
                          <option value="+90">+90 Turkey</option>
                          <option value="+993">+993 Turkmenistan</option>
                          <option value="+256">+256 Uganda</option>
                          <option value="+380">+380 Ukraine</option>
                          <option value="+971">+971 United Arab Emirates</option>
                          <option value="+44">+44 United Kingdom</option>
                          <option value="+1">+1 United States</option>
                          <option value="+598">+598 Uruguay</option>
                          <option value="+998">+998 Uzbekistan</option>
                          <option value="+678">+678 Vanuatu</option>
                          <option value="+58">+58 Venezuela</option>
                          <option value="+84">+84 Vietnam</option>
                          <option value="+967">+967 Yemen</option>
                          <option value="+260">+260 Zambia</option>
                          <option value="+263">+263 Zimbabwe</option>
                        </select>
                        <span>&gt;</span>
                      </div>
                      <div className="mobileInput">
                        <input
                          value={mobile}
                          className={
                            !mobileCheck || (mobile && !mobileValid)
                              ? "inputError"
                              : "notError"
                          }
                          disabled={inputMobile}
                          onChange={handleMobile}
                          placeholder="(예시) 01034567890"
                        />
                        {country === "+82" && (
                          <button
                            className="mobileCodeButton"
                            type="button"
                            disabled={!mobileValid || getCodeBtn}
                            onClick={() => {
                              setTimeCount("5:00");
                              setCodeBtn(true);
                              setGetCodeBtn(true);
                              setInputMobile(true);
                            }}
                          >
                            인증번호 받기
                          </button>
                        )}
                      </div>
                      {country === "+82" && (
                        <div className="mobileCode">
                          <input
                            value={mobileCode}
                            placeholder="인증번호를 입력해 주세요."
                            onChange={(e) => setMobileCode(e.target.value)}
                            disabled={!codeBtn}
                          />
                          {codeBtn && (
                            <button
                              type="button"
                              className="mobileCodeSubmit"
                              onClick={() => {
                                setCodeBtn(false);
                                setGetCodeBtn(true);
                              }}
                              disabled={!mobileCode}
                            >
                              확인
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                    {codeBtn && (
                      <Timer
                        timeCount={timeCount}
                        setTimeCount={setTimeCount}
                        setGetCodeBtn={setGetCodeBtn}
                      />
                    )}
                    {!mobileCheck && (
                      <div className="modalError">
                        휴대폰 번호는 필수정보 입니다.
                      </div>
                    )}
                    {mobile && !mobileValid && (
                      <div className="modalError">
                        올바른 전화번호를 입력해 주세요.
                      </div>
                    )}
                  </div>
                  <div className="inputWrap">
                    <label>비밀번호</label>
                    <div className="inputBody">
                      <input
                        name="password"
                        value={PW}
                        className={PW && !PWValid ? "inputError" : "notError"}
                        type="password"
                        onChange={handlePW}
                        placeholder="비밀번호를 입력해 주세요."
                      />
                      <div className="inputGuide">
                        영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여
                        8자 이상 입력해 주세요.
                      </div>
                    </div>
                    {PW && !PWValid && (
                      <div className="modalError">
                        올바르지 않은 비밀번호입니다.
                      </div>
                    )}
                  </div>
                  <div className="inputWrap">
                    <label>비밀번호 확인</label>
                    <div className="inputBody">
                      <input
                        value={PWAgain}
                        className={
                          PWAgain && !PWAgainValid ? "inputError" : "notError"
                        }
                        type="password"
                        onChange={handlePWAgain}
                        placeholder="비밀번호를 다시 한번 입력해 주세요."
                      />
                    </div>
                    {PWAgain && !PWAgainValid && (
                      <div className="modalError">
                        비밀번호가 서로 일치하지 않습니다.
                      </div>
                    )}
                  </div>
                  <CheckBox
                    agreePrivacy={agreePrivacy}
                    setAgreePrivacy={setAgreePrivacy}
                  />
                </div>
              </div>
              <div className="modalFooter">
                <div className="modalFooterWrap">
                  <button
                    type="submit"
                    className="modalFooterButton"
                    disabled={agreePrivacy ? false : true}
                  >
                    회원가입하기
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="modalOverlay"></div>
        </div>
      )}
    </>
  );
}

export default Modal;
