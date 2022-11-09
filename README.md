# Wanted를 React로 클론 코딩하는 프로젝트

## 파일 소개
data 폴더에는 json 파일, css 폴더에는 CSS 파일, modules에는 Redux와 useReducer + useContext와 관련된 js파일, components 폴더에는 컴포넌트 js파일들이 있다.
컴포넌트는 js파일 이름과 pathname을 넣어 설명한다.

### MainPage.js(/)

wanted 메인 페이지.

### WDList.js(/wdlist)

wanted 채용 페이지. 기업 목록을 클릭하면 채용 상세 페이지로 넘어간다.

### WD.js(wd/company_id)

wanted 채용 상세 페이지.(company_id에 기업의 id number를 입력하면 된다. 구현된 id는 91536)

### Search.js(/search)

검색 결과를 나타내주는 페이지. dummy data에서 채용 중인 포지션 검색이 가능한 상태이다.

### Bookmark.js(/bookmark)

북마크 중인 채용 포지션들을 나타내주는 페이지. Redux로 상태 관리한다.

### Header.js

wanted 사이트의 Header 부분으로 회원가입/로그인 버튼과 햄버거 모양 메뉴, 검색 기능이 구현된 상태이다.

### SearchBar.js

Header의 검색 아이콘을 누르면 뜨는 모달창으로, 검색 시 쿼리 스트링으로 검색 페이지로 이동한다.
useReducer + useContext로 모달창 상태(on/off)를 관리한다.

### Modal.js

회원가입 기능과 로그인 기능이 있는 모달창이다. useReducer + useContext로 모달창 상태(on/off)를 관리한다.


