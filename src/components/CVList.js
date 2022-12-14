import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL, deleteObject, listAll, getMetadata } from "firebase/storage";
import styled from "styled-components";

import Header from "./Header";
import { storage } from '../firebase';

import { ImFilesEmpty } from 'react-icons/im';
import { BiInfoCircle, BiUpload, BiFile } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import "../css/CVList.css";

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

const CVList = () => {
  const inputRef = useRef(null);
  const [fileInfo, setFileInfo] = useState([]);
  const [state, setState] = useState("");
  const listRef = ref(storage, 'resume/');

  useEffect(() => {
    setFileInfo([]);
    const listFiles = () => {
      listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            getMetadata(itemRef)
              .then((metadata) => {
                const info = {
                  name: metadata.name,
                  date: metadata.timeCreated,
                };
                setFileInfo(prev => [...prev, info]);
              })
              .catch((error) => {
                console.log(error.message);
              });
          })
        }).catch((error) => {
          console.log(error.message);
      });
    };
    
    listFiles();
  }, [state]);

  const ResumeItem = ({name, date}) => {
    const deleteItem = (e) => {
      e.stopPropagation();
      
      const desertRef = ref(storage, `resume/${name}`);

      deleteObject(desertRef).then(() => {
        setState(`delete ${name}`);
      }).catch((error) => {
        console.log(error.message);
      });
    };
  
    const download = () => {
      getDownloadURL(ref(storage, `resume/${name}`))
        .then((url) => {
          window.open(url, '_blank');
        })
        .catch((error) => {
          console.log(error.message);
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
          <span>?????? ??????</span>
          <div>
            <button onClick={deleteItem}>
              <MdClose />
            </button>
          </div>
        </Info>
      </div>
    );
  }

  const handleClick = () => {
    inputRef.current.click();
  }

  const handleChange = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `/resume/${file.name}`);
    uploadBytes(storageRef, file).then(() => setState(`upload ${file.name}`));
  };

  return(
    <>
      <Header />
      <div className="resumeList">
        <div className="resumeList_header">
          <h4>?????? ??????</h4>
          <Link to="/cv/intro">
            ????????? ????????? ??????
            <BiInfoCircle className="icon-info"/>
          </Link>
        </div>
        <div className="resumeList_wrap">
          <div className="resumeItem">
            <div className="resumeIcon">
              <div className="icon add">
                <ImFilesEmpty />
              </div>
              <p>??? ????????? ??????</p>
            </div>
          </div>
          <div className="resumeItem">
            <div className="resumeIcon" onClick={handleClick}>
              <input type="file" className="upload" ref={inputRef} onChange={handleChange} />
              <div className="icon upload">
                <BiUpload />
              </div>
              <p>?????? ?????????</p>
            </div>
          </div>
          {fileInfo.map((info) => <ResumeItem key={info.name + info.date} name={info.name} date={info.date} />)}
        </div>
      </div>
    </>
  );
};

export default CVList;