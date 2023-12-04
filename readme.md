# Hongflix 🎬
- 단순 OTT 플랫폼 클론 코딩을 넘어 다양한 기능을 더한 홍삼 팀만의 OTT 플랫폼입니다.
- ADMIN/USER를 분리해 ADMIN 권한으로 콘텐츠 CRUD / 회차 등록을 할 수 있습니다.
- 회원가입 시 기성 서비스와 동일하게 문자 인증으로 가입을 할 수 있습니다.
- 카카오페이 API와 아임포트 API로 테스트 결제 및 구독권을 갱신할 수 있습니다.
- 로그인 & 구독한 회원이라면 콘텐츠 클릭 시 회차 정보 페이지로 라우팅됩니다.
- 회차 정보 페이지에서 등록된 회차 썸네일을 클릭하면 영상이 재생됩니다.

## R&R
- FE 강경규: 회원가입/로그인
- **FE 황윤: UI/콘텐츠 조회 및 검색/마이페이지/구독 기능/최근 시청한 콘텐츠**
- BE 박서연: 회원가입/로그인/최근 시청한 콘텐츠/인프라 및 CICD
- BE 이동우: 마이페이지/구독 기능/인프라 및 CICD
- BE 정윤수: 콘텐츠 조회 및 검색/ADMIN 콘텐츠 CRUD/인프라 및 CICD

## 기술 스택
- FE: React, Tailwind, CSS module
- BE: Java Spring boot, Mybatis, Mysql
- DevOps: Docker, Jenkins, AWS
- Com: Github, Slack, Discord, Notion

## 폴더 구조
```plaintext
📦src
┣ 📂admin
┃ ┣ 📂components
┃ ┃ ┣ 📜AdminContentCreateModal.js
┃ ┃ ┣ 📜AdminContentDeleteModal.js
┃ ┃ ┣ 📜AdminContentUpdateModal.js
┃ ┃ ┣ 📜AdminContentsTable.js
┃ ┃ ┣ 📜AdminMovieCreateModal.js
┃ ┃ ┣ 📜AdminMovieDeleteModal.js
┃ ┃ ┣ 📜AdminMovieDetail.js
┃ ┃ ┣ 📜AdminMovieUpdateModal.js
┃ ┃ ┣ 📜AdminMoviesTable.js
┃ ┃ ┗ 📜AdminNavBar.js
┃ ┣ 📜Admin.module.css
┃ ┣ 📜AdminContents.js
┃ ┣ 📜AdminHome.js
┃ ┣ 📜AdminMembers.js
┃ ┣ 📜AdminMovies.js
┃ ┗ 📜AdminSetting.js
┣ 📂home
┃ ┣ 📜Banner.js
┃ ┣ 📜Footer.js
┃ ┣ 📜Header.js
┃ ┣ 📜Home.js
┃ ┗ 📜Main.js
┣ 📂pages
┃ ┣ 📜Auth.module.css
┃ ┣ 📜Category.js
┃ ┣ 📜List.js
┃ ┣ 📜Login.js
┃ ┣ 📜LoginForAdmin.js
┃ ┣ 📜Modal.js
┃ ┣ 📜MyPage.js
┃ ┣ 📜Search.js
┃ ┣ 📜SignUp.js
┃ ┗ 📜SignUpForAdmin.js
┣ 📜App.css
┣ 📜App.js
┣ 📜index.css
┗ 📜index.js
```

## 시연 영상 (이미지 클릭 시 새 페이지에서 재생됩니다.)
- 콘텐츠 조회 및 검색
[![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6rIkz%2FbtsyHbVKiIF%2FO7FmFC2w8Ru7EcO8KTkIb0%2Fimg.png)](https://tv.kakao.com/v/442042525)

- 결제 및 전체 흐름
[![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcxkffw%2FbtsyGqlmgVm%2FBwW9bcFiI7ygctrXarxgkk%2Fimg.png)](https://tv.kakao.com/v/442042915)

코드 및 자세한 내용은 블로그에 정리되어 있습니다. (https://summermong.tistory.com/419)
