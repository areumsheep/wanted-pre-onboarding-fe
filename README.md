# :: 원티드 프리온보딩 프론트엔드 코스 사전과제

## 🏃[결과물 미리보기](https://wanted-pre-onboarding-fe-areum.vercel.app/)
※ 화면 아래가 잘리는 점 양해 부탁드립니다!   

https://user-images.githubusercontent.com/48716298/176335689-d4e5d216-9378-4593-96c9-a06c288c53b0.mp4

## 🐏 소개
안녕하세요! 프론트엔드 공부 시작한 지 4개월 정도 된 양아름입니다.  
고등학교 때부터 개발을 시작했지만 디자인에 관심이 많고 다양한 역할을 할 수 있는 **javascript 언어**에 빠져 프론트엔드를 처음부터 공부하고 있습니다.   

## 🛠 구현 사항
### Assignment 1 - `Login`
- **로그인 컴포넌트를 분리**하여 개발하였습니다.
- `useRef`를 사용해 **렌더링 최적화**를 고려하였습니다.
- form의 `onSubmit`이벤트에서 localStorage에 **입력값 저장** 후 `useNavigate`를 사용해 **메인 페이지 이동**되도록 구현하였습니다.
- `useEffect`를 사용하여 localStorage에 값이 있을 경우 **바로 메인 페이지 이동**되도록 구현하였습니다.

### Assignment2 - `GNB`
- `position: sticky`를 사용해 스크롤에 관계없이 화면 상단에 고정되도록 구현하였습니다.
- 화면의 요소들은 css의 `space-between`속성으로 **양 옆 정렬**되도록 구현하였습니다.
- 모바일 화면의 경우 **검색창 사라지도록** 구현하였습니다.
- 오른쪽 아이콘들은 이미지로 구현하였으며 가장 오른쪽 아이콘은 **Logout**(localStorage 저장값 삭제)**기능**으로 구현하였습니다.

### Assignment3 - `Validation`
- 로그인 화면에서 **정규 표현식**을 사용해 이메일과 비밀번호 유효성 검사를 진행하여 **border 색**이 달라지도록 구현하였습니다.
- 만약 이메일과 비밀번호가 정상적으로 입력되었을 경우에만 **로그인 버튼의 배경색**이 달라지도록 구현하였으며 만약 정상적으로 입력되지 않았다면 **alert 창을 호출**하도록 하였습니다.

### Assignment4 - `Routing`
- `react-router-dom`을 사용해 **라우팅되도록 구현**하였습니다.
- history push 대신 `useNavigate`를 사용해 로그인, 로그아웃 시 페이지 이동되도록 구현하였습니다.

### Assignment5 - `Feeds`
- 피드 컴포넌트를 분리하여 개발하였습니다.
- `Media Query`를 사용해 **모바일 화면을 고려**하여 개발하였습니다.
- 피드의 데이터는 `axios`를 사용해 `public/data/feed.json`의 데이터를 가져오도록 개발하였습니다. ([데이터 형식 확인](https://github.com/areumsheep/wanted-pre-onboarding-fe/blob/main/public/data/feed.json))
- 댓글을 구현하기 위해 **기존 댓글 상태값에 새로운 댓글 상태값을 추가**하는 식으로 구현하였습니다.
- 이미지의 `onLoad` 이벤트를 이용해 피드 이미지가 로딩된 이후 **컴포넌트가 로딩**되도록 구현하였습니다.

---

## Quick Overview

```
npm install

npm start
```

\*\* React를 구동할 수 있는 기본적인 환경이 필요합니다.

## 진행 가이드

- 위의 Repository를 포크(`fork`) 하여 개발 URL 제출해주세요.
  - [URL 제출 링크](https://forms.gle/LcXnfrgtQp5MRrdU8)
- fork 레파지토리 명은 `wanted-pre-onboarding-fe`로 생성해 주세요.
- 과제 수행 개수에 따라 기본적인 평가가 이루어집니다.
- 코드의 일관성, 가독성, 함수 분리,컴포넌트 설계, 코드 퀄리티 등을 기준으로 세부적인 평가가 이루어집니다.
- 해당 과제에 대한 해설은 개강 후 진행될 예정입니다.
- 선발하는 과정에서 최소한의 수준을 평가하기 위한 과제로 아래 Assignment 외 다른 부분을 완벽하게 구현하지 않으셔도 됩니다. (평가에 반영하지 않습니다.)
- README.md를 꼭 작성해 주세요. 본인에 대한 소개나 과제 풀이에 관한 것 등 자유롭게 작성해주시면 됩니다.
- 함수형 컴포넌트로 개발해주세요. (React Hooks)

\*문의 사항은 사전 과제 Repository의 Issue로 등록해 주세요.

## 참고 이미지

[참고 이미지 링크](https://bclef25.notion.site/1ed6d5b2192b45eeb4104a67f6a77250)
