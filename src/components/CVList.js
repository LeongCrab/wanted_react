import React from "react";
import { Link } from "react-router-dom";

import "../css/CVList.css";
import styled from "styled-components";
import Header from "./Header";
import { ImFilesEmpty } from 'react-icons/im';
import { BiInfoCircle, BiUpload, BiDotsVerticalRounded } from 'react-icons/bi';

const Badge = styled.div`
  padding-left: 18px;
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 5px;
  gap: 5px;
  div{
    height: 24px;
    background-color: #f3f9fe;
    color: #36f;
    font-size: 11px;
    font-weight: 700;
    line-height: 13.2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 6px;
  }
`;
const Title = styled.div`
  padding: 6px 20px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  text-align: left;
  h3{
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    max-height: 46px;
    max-width: 100%;
    letter-spacing: normal;
    text-align: left;
    color: #999;
    overflow: hidden;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    border: none;
  }
  p{
    color: #999;
    margin-top: 5px;
  }
`;
const Info = styled.div`
    position: absolute;
    bottom: 0;
    height: 41px;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 12px 0 20px;
    align-items: center;
    border-top: 1px solid #e0e0e0;
    .lang{
      color: #999;
      width: 20px;
      height: 20px;
      border-radius: 2px;
      border: 1px solid #999;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      font-weight: 600;
      margin-right: 10px;
    }
    span{
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: normal;
      text-align: left;
      color: #999;
    }
    & > div:last-child{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      button{
        font-size: 24px;
        color: #76797e;
        height: 100%;
        width: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    
`;
const ResumeItem = ({badge, name, date, lang, state}) => {
  return(
    <div className="resumeItem">
      <Badge>
        <div>
          <p>{badge}</p>
        </div>
      </Badge>
      <Title>
        <h3>{name}</h3>
        <p>{date}</p>
      </Title>
      <Info>
        <div className="lang">{lang}</div>
        <span>{state}</span>
        <div>
          <button>
            <BiDotsVerticalRounded />
          </button>
        </div>
      </Info>
    </div>
  );
}

const CVList = () => {
  return(
    <>
      <Header />
      <div className="resumeList">
        <div className="resumeList_header">
          <h4>최근 문서</h4>
          <Link to="/cv/intro">
            원티드 이력서 소개
            <BiInfoCircle className="icon-info"/>
          </Link>
        </div>
        <div className="resumeList_wrap">
          <div className="resumeItem">
            <div className="resumeIcon">
              <div className="icon add">
                <ImFilesEmpty />
              </div>
              <p>새 이력서 작성</p>
            </div>
          </div>
          <div className="resumeItem">
            <div className="resumeIcon">
              <div className="icon upload">
                <BiUpload />
              </div>
              <p>파일 업로드</p>
            </div>
          </div>
          <ResumeItem badge="매치업 이력서" name="이름" date="날짜" lang="한" state="작성 중"/>
        </div>
      </div>
    </>
  );
};

export default CVList;