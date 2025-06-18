
## 개발 환경

- Node.js: v22.14.0
- 패키지 매니저: yarn

## 프로젝트 실행 방법

```bash
# 패키지 설치
yarn install
# 로컬 개발 서버 실행
yarn dev
```

## 프로젝트 구조

    src
    ┣ components
    ┃ ┣ commons > 공통 컴포넌트
    ┃ ┗ parts > 페이지 전용 컴포넌트
    ┣ constants > 상수모음
    ┣ hooks > 커스텀 훅 및 커스텀 훅 설명문서
    ┣ layouts > 레이아웃
    ┣ pages
    ┣ styles
    ┣ types
    ┃ ┣ enums
    ┃ ┃ ┗ commons.ts > 공통 enum타입
    ┃ ┣ globals > 타입 보강 관련
    ┃ ┃ ┗ emotion.d.ts
    ┃ ┣ interfaces > src 하위 디렉토리별 interface
    ┃ ┃ ┣ components.ts
    ┃ ┃ ┣ data.ts
    ┃ ┃ ┣ hooks.ts
    ┃ ┃ ┗ pages.ts
    ┃ ┣ types > 공통 type선언
    ┃ ┗ index.ts
    ┗ dummyData.ts > 과제3 필터링용 더미데이터
