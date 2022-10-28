import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SearchBar.css';

function SearchBar({setSearchOpen}){
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        if(!searchQuery)
            alert("검색어를 입력해주세요");
        else{
            navigate(`/search?query=${searchQuery}`);
            setSearchOpen(false);
        }  
    }
    return(
        <>
            <div className="searchCnt">
                <div className="searchBarWrap">
                    <form onSubmit={onSubmit}>
                        <input type="search" name='q' placeholder="#태그, 회사, 포지션 검색" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18" className="SearchBar_SearchBar_searchIcon__I9wXL"><defs><path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path></defs><g fill="none" fillRule="evenodd"><use fill="#333" fillRule="nonzero" stroke="#333" strokeWidth=".3" xlinkHref="#qt2dnsql4a"></use></g></svg>
                    </form>
                    <div className="result">
                        <div className="resultWrap">
                            <h4 className="resultLabel">추천태그로 검색해보세요</h4>
                            <a href="https://www.wanted.co.kr/tag_search" >기업태그 홈 이동하기 &gt;</a>
                            <div className="tagList">
                                <button type="button">#단체보험</button>
                                <button type="button">#연봉상위2~5%</button>
                                <button type="button">#퇴사율5%이하</button>
                                <button type="button">#설립3년이하</button>
                                <button type="button">#자율복장</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='searchOverlay' onClick={() => setSearchOpen(false)}></div>
        </>
    );
}

export default SearchBar;