import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../css/CVList.css";
import styled from "styled-components";
import Header from "./Header";
import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ImFilesEmpty } from 'react-icons/im';
import { BiInfoCircle, BiUpload, BiFile } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

const Title = styled.div`
  padding: 20px 20px 6px;
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
    color: #333;
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
    .icon{
      width: 20px;
      height: 20px;
      text-align: center;
      margin-right: 10px;
    }
    span{
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: normal;
      text-align: left;
      color: #333;
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
        cursor: pointer;
      }
    }
    
`;
const ResumeItem = ({name, date}) => {
  const deleteItem = (e) => {
    e.stopPropagation();
    console.log("delete");
  };

  const download = () => {
    getDownloadURL(ref(storage, `resume/${name}`))
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return(
    <div className="resumeItem" onClick={download}>
      <Title>
        <h3>{name}</h3>
        <p>{date}</p>
      </Title>
      <Info>
        <BiFile className="icon"/>
        <span>첨부 완료</span>
        <div>
          <button onClick={deleteItem}>
            <MdClose />
          </button>
        </div>
      </Info>
    </div>
  );
}

const CVList = () => {
  const inputRef = useRef(null);
  const [percent, setPercent] = useState(0);
  const [fileInfo, setFileInfo] = useState([]);

  const handleClick = () => {
    inputRef.current.click();
  }

  const handleChange = (e) => {
    const file = e.target.files[0];

    if(file) {
      const storageRef = ref(storage, `/resume/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        "파일 업로드 중...",
        (snapshot) => {
          const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          const date = new Date();
          const info = {
            name: file.name,
            date: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
          };
          setFileInfo(prev => prev.concat(info));
        }
      );
    }
  };

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
            <div className="resumeIcon" onClick={handleClick}>
              <input type="file" className="upload" ref={inputRef} onChange={handleChange}/>
              <div className="icon upload">
                <BiUpload />
              </div>
              <p>파일 업로드</p>
            </div>
          </div>
          {fileInfo.map((info,idx) => <ResumeItem key={idx+info.name} name={info.name} date={info.date} />)}
        </div>
      </div>
    </>
  );
};

export default CVList;