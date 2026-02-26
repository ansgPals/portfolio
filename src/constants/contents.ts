import { ProjectName } from "@/types/types";

export const stackImages = [
  "/stack/NextJS.png",
  "/stack/TypeScript.png",
  "/stack/JavaScript.png",
  "/stack/React.png",
  "/stack/Emotion.png",
  "/stack/SCSS.png",
  "/stack/StyledComponent.png",
  "/stack/storybook.png",
  "/stack/Axios.png",
  "/stack/ApolloClient.png",
  "/stack/react-query.png",
  "/stack/useSWR.png",
  "/stack/react-hook-form.png",
  "/stack/Vercel.png",
  "/stack/Recoil.png",
  "/stack/Zustand.png",
  "/stack/docusaurus.png",
  "/stack/Jira.png",
  "/stack/VSCode.png",
  "/stack/Figma.png",
  "/stack/Github.png",
  "/stack/GitLab.png",
  "/stack/Slack.png",
];

export const careerStackImages = {
  interx: [
    "/stack/React.png",
    "/stack/TypeScript.png",
    "/stack/JavaScript.png",
    "/stack/Emotion.png",
    "/stack/react-query.png",
    "/stack/Zustand.png",
    "/stack/storybook.png",
    "/stack/docusaurus.png",
    "/stack/GitLab.png",
    "/stack/SCSS.png",
  ],
  heuron: [
    "/stack/React.png",
    "/stack/TypeScript.png",
    "/stack/JavaScript.png",
    "/stack/Emotion.png",
    "/stack/Axios.png",
    "/stack/Cornerstone.png",
    "/stack/Recoil.png",
    "/stack/GitLab.png",
  ],
  illuminarean: [
    "/stack/NextJS.png",
    "/stack/TypeScript.png",
    "/stack/JavaScript.png",
    "/stack/Emotion.png",
    "/stack/react-query.png",
    "/stack/useSWR.png",
    "/stack/react-hook-form.png",
    "/stack/Zustand.png",
    "/stack/Jira.png",
    "/stack/Github.png",
  ],
  dingco: [
    "/stack/NextJS.png",
    "/stack/TypeScript.png",
    "/stack/JavaScript.png",
    "/stack/StyledComponent.png",
    "/stack/ApolloClient.png",
    "/stack/Recoil.png",
    "/stack/Github.png",
  ],
};
export const projectStackImages: Record<ProjectName, string[]> = {
  ixmlops: [
    "/stack/React.png",
    "/stack/TypeScript.png",
    "/stack/JavaScript.png",
    "/stack/Emotion.png",
    "/stack/react-query.png",
    "/stack/Zustand.png",
    "/stack/GitLab.png",
  ],
  ixda: [
    "/stack/React.png",
    "/stack/TypeScript.png",
    "/stack/JavaScript.png",
    "/stack/Emotion.png",
    "/stack/react-query.png",
    "/stack/Zustand.png",
    "/stack/GitLab.png",
  ],
  fl: [
    "/stack/React.png",
    "/stack/TypeScript.png",
    "/stack/JavaScript.png",
    "/stack/Emotion.png",
    "/stack/SCSS.png",
    "/stack/Zustand.png",
    "/stack/storybook.png",
    "/stack/docusaurus.png",
    "/stack/GitLab.png",
  ],
  scs: [
    "/stack/React.png",
    "/stack/TypeScript.png",
    "/stack/JavaScript.png",
    "/stack/Emotion.png",
    "/stack/Axios.png",
    "/stack/Cornerstone.png",
    "/stack/Recoil.png",
  ],
  esjp: [
    "/stack/NextJS.png",
    "/stack/TypeScript.png",
    "/stack/JavaScript.png",
    "/stack/Emotion.png",
    "/stack/react-query.png",
    "/stack/react-hook-form.png",
    "/stack/Zustand.png",
  ],
  gvw: [
    "/stack/NextJS.png",
    "/stack/TypeScript.png",
    "/stack/JavaScript.png",
    "/stack/Emotion.png",
    "/stack/Axios.png",
    "/stack/useSWR.png",
    "/stack/Recoil.png",
  ],
  codeCamp: [
    "/stack/NextJS.png",
    "/stack/TypeScript.png",
    "/stack/JavaScript.png",
    "/stack/StyledComponent.png",
    "/stack/ApolloClient.png",
    "/stack/Recoil.png",
  ],
};

export const projects = [
  {
    logo: "/logo/da.png",
    logoHeight: "24px",
    projectName: "ixda",
    title: "InterX Data Analytics",
    description: "데이터 수집 플랫폼 (데이터 수집 및 실시간 모니터링 플랫폼)",
    memberCount: "FE 2명, BE 1명",
    period: "2025.09 ~",
    mainTask: ["데이터 수집 프로젝트 FE개발/화면기획"],
    detail: [
      {
        task: "SSE 기반 실시간 데이터 통신 및 모니터링 UI 구현",
        result: [
          "데이터 수집 이후 지연 없이 화면에 반영되도록 구성하여 실시간 상태 변화 및 이상 상황을 즉시 인지할 수 있는 환경을 구축",
        ],
      },
      {
        task: "시간 차트(Line / Bar / Pie / Stacked Bar) 및 Heatmap을 통한 상태 가시화",
        result: [
          "다양한 형태의 차트를 활용해 데이터 흐름과 분포를 직관적으로 표현",
          "센서 및 기기 연결 상태 가시성을 높여 모니터링 피로도 및 대응 시간 감소",
        ],
      },
      {
        task: "react-hook-form + yup 활용한 폼 성능 최적화",
        result: [
          "입력값 유효성 실시간 확인 및 버튼 활성화 UX 개선",
          "페이지전반 렌더링 전후의 UI 흔들림 현상 수정",
        ],
      },
      {
        task: "사용자 맞춤용 대시보드 제공",
        result: [
          "유저가 요청할 데이터셋, 차트유형, 파라미터를 직접 선택해 위젯 생성 가능 (ECharts 사용)",
          "react-grid-layout을 활용해 위젯의 크기 및 위치를 드래그앤드롭으로 조정 가능하도록 구현",
        ],
      },
    ],
  },
  {
    logo: "/logo/mlops.png",
    logoHeight: "24px",
    projectName: "ixmlops",
    title: "InterX Mlops",
    description: "데이터 전처리 프로젝트",
    memberCount: "FE 2명, BE 1명",
    period: "2025.09 ~",
    mainTask: ["정부과제용 데이터 전처리 프로젝트 개발/화면기획"],
    detail: [
      {
        task: "화면기획 및 분산되어있는 개발문서 정리",
        result: [
          "Figjam을 활용한 화면구성안 wire-frame 작성해 타 파트와의 커뮤니케이션툴로 사용",
        ],
      },
      {
        task: "온프레미스 환경 고려한 개발 셋팅",
        result: [
          "내부 네트워크 환경에서 원활한 설치를 위해 Yarn v4 + PnP mode 도입",
        ],
      },
      {
        task: "워크플로우 생성 에디터 개발",
        result: [
          "Node-tree 기반의 시각적 에디터를 통해 파이프라인(DAGs) 작성 가능하도록 구현",
          "좌측 패널에서 Operator 선택 후 Canvas Drop으로 Node 생성하는 UI 구성 (react-flow 기반)",
          "워크플로우 저장/불러오기 기능 제공",
          "노드 간 데이터 흐름을 시각적으로 표현해 워크플로우 이해도 향상",
        ],
      },
      {
        task: "사용자 맞춤용 대시보드 제공",
        result: [
          "유저가 요청할 데이터셋, 차트유형, 파라미터를 직접 선택해 위젯 생성 가능 (ECharts 사용)",
          "react-grid-layout을 활용해 위젯의 크기 및 위치를 드래그앤드롭으로 조정 가능하도록 구현",
        ],
      },
    ],
  },
  {
    logo: "/logo/fl.png",
    logoHeight: "24px",
    projectName: "fl",
    title: "InterX Frontend Library",
    description: "사내용 프론트엔드 라이브러리",
    memberCount: "FE 1명",
    period: "2025.09 ~",
    mainTask: [
      "SI project, 자체 solution 프로젝트에 사용할 사내용 프론트엔드 라이브러리생성",
      "입사예정 프론트엔드 팀원들과의 효율적인 작업을 위한 코드컨벤션 확립",
      "프론트엔드 작업을 위한 boiler-plate 셋팅/생성",
    ],
    detail: [
      {
        task: "Components, Hooks 생성",
        result: [
          "작업되어있던 디자인 컴포넌트 기반으로 모든 Components 신규생성",
          "모든 프로젝트에서 공통으로 적용되는 theme 설정, font설정등을 담고있는 Provider제공",
          "모든 프로젝트에서 필수로 사용될만한 Hooks생성(useInputs, useValidation 등)",
        ],
      },
      {
        task: "프론트엔드 개발자를 위한 Docs, 디자이너와의 협업을 위한 storybook 제공",
        result: [
          "docusaurus를 도입, mdx 파일 작성만으로도 깔끔한 UI의 Docs 구현",
          "storybook에서도 components의 light/dark 모드를 확인할수있도록 구현",
          "Storybook 내 글로벌 스타일 및 Provider 설정 반영으로 실제 환경과 동일한 미리보기 제공",
          "Docs와 Storybook 모두 CI/CD로 자동 빌드 및 배포 가능하도록 구성",
        ],
      },
      {
        task: "Monorepo기반 작업",
        result: [
          "Components, hooks, Docs, storybook를 하나의 레포에서 관리",
          "CI/CD 용이, 버저닝 용이 하도록 작업",
          "패키지 간 의존성 관리 및 캐시 최적화를 통한 빌드 속도 개선",
          "패키지별 버전 관리 및 릴리즈 자동화를 위한 changeset 도입 고려",
        ],
      },
    ],
  },

  // {
  //   logo: "/logo/scs.png",
  //   logoHeight: "24px",
  //   projectName: "scs",
  //   title: "Heuron StroCare Suite",
  //   description: "뇌졸중 진단 보조 AI 서비스(SCS)",
  //   memberCount: "FE 3명 BE2명 AI3명",
  //   period: "2025.06 ~ 09",
  //   mainTask: [
  //     "Cornerstone 라이브러리를 활용한 DICOM 파일 시각화 기능 구현",
  //     "VTK.js 라이브러리를 활용한 NIfTI 및 DICOM 파일의 3D 볼륨 렌더링",
  //   ],
  //   detail: [
  //     {
  //       task: "기능구현 중심의 DICOM render를 유지/보수성이 용이하도록 컴포넌트화",
  //       result: [
  //         "Viewer 기능별(Zoom, Pan, WindowLevel 등) 커스텀 훅 분리",
  //         "공통 유틸 함수(데이터 변환, 파일 파서 등) 분리",
  //         "파일 업로드/뷰어 초기화 로직 컴포넌트화",
  //         "레이아웃/툴바/뷰어 영역 컴포넌트 단위로 분리",
  //       ],
  //     },
  //     {
  //       task: "어색한 플로우 및 UI/UX를 기록하고, 기획자에게 개선을 제안",
  //       result: [
  //         "입력값 유효성 실시간 확인 및 버튼 활성화 UX 개선",
  //         "페이지전반 렌더링 전후의 UI 흔들림 현상 수정",
  //       ],
  //     },
  //   ],
  // },
  {
    logo: "/logo/esjp.png",
    logoHeight: "20px",
    projectName: "esjp",
    title: "Energy Shared Japan",
    description: "일본 신재생에너지 크라우드 펀딩 플랫폼",
    memberCount: "FE 3명 BE3명",
    period: "2024.03 ~ 2025.01",
    mainTask: [
      "개인/법인 회원가입 및 인증 기능 구현",
      "크라우드 펀딩 상품 리스트 및 상세 페이지 구성 (상품 노출, 필터, 상태 구분)",
      "펀딩 상품 결제 및 구매 플로우 구현",
      "입금/출금 처리 기능 구현",
      "사용자 행동 기반 이메일 템플릿 생성",
      "개인/법인 마이페이지 내 펀딩 참여 이력 조회 기능 개발",
      "SEO 최적화",
      "Google Tag Manager 및 GA 연동을 통한 사용자 행동 데이터 수집",
      "관리자(Admin) 기능 구현 (상품 등록/수정, 회원 관리, 통계 대시보드 등)",
    ],
    detail: [
      {
        task: "html 로만 작성되어있던 이메일 템플릿을 전부 mjml화 ",
        result: ["코드의 가독성과 유지 보수성 향상"],
      },
      {
        task: "복잡한 컴포넌트를 합성 컴포넌트 패턴으로 리팩토링",
        result: ["코드 구조 개선 및 유지 보수성 향상"],
      },
      {
        task: "일본어 작업 효율화를 위한 Figma 번역 플러그인 개발",
        result: ["관련 작업자들의 업무 이해도 및 속도 상승"],
      },
      {
        task: "중복 API 요청 최소화를 위해 React Query 도입 및 캐싱 적용",
        result: [
          "15건 이상의 중복 요청 방지, 서버 부하 감소 및 응답 속도 개선",
        ],
      },
      {
        task: "사용자 편의성 향상 사항 주기 점검 및 문서화, 개선안 건의와 업무 분배 주도",
        result: ["효율적인 기능 향상 주도"],
      },
    ],
  },
  {
    logo: "/logo/gvw.png",
    logoHeight: "14px",
    projectName: "gvw",
    title: "Good Vibe Works",
    description: "엔터테인먼트 정산 관리 플랫폼",
    memberCount: "FE 3명 BE2명",
    period: "2022.09 ~ 2024.02",
    mainTask: [
      "Recharts 라이브러리를 활용한 비용/수익 그래프 시각화",
      "엔터테인먼트 회사 내 아티스트 및 매니저 관리 화면 구축 (리스트, 상세, 권한별 접근 제어 포함)",
      "아티스트/매니저/관리자의 프로필 정보(프로필사진, Role, 생일, 입사일) CRUD 기능 구현",
      "비용 항목 CRUD 기능 구현",
      "수익 항목 CRUD 기능 개발",
      "수익/비용 데이터를 기반으로 한 정산 화면 구성",
      "정산 생성 시, 아티스트 결제 여부에 따른 상태 구분 리스트 제공",
      "아임포트를 활용한 플랫폼 구독/결제 기능 구현 (정기 결제 및 상태 반영)",
      "관리자(Admin) 기능 구현(회사관리, 회사결제상태, 공지사항 등)",
    ],
    detail: [
      {
        task: "Zustand를 활용해 모든 커스텀 Alert 및 Toast 팝업을 전역 상태로 관리하고, app.tsx에서 일괄 제어",
        result: ["alert, toast 관련 로직의 70%감소"],
      },
      {
        task: "복잡한 폼 관리를 위해 react-hook-from과 yup도입",
        result: ["validation로직을 최소화하여 1500줄 이상 축소"],
      },
      {
        task: "React.memo, useMemo, useCallbak 적극활용해 리팩토링",
        result: ["불필요한 리렌더링을 최소화하고, 컴포넌트 성능 최적화"],
      },
    ],
  },
  {
    logo: "/logo/code-camp.png",
    logoHeight: "20px",
    projectName: "codeCamp",
    title: "Code Camp Online",
    description: "온라인 코딩 클래스 서비스",
    memberCount: "FE 3명 BE2명",
    period: "2022.05 ~ 2022.07",
    mainTask: [
      "회원가입 및 로그인 기능 구현",
      "아임포트를 활용한 결제 기능 연동",
      "마이페이지 구현 (수강중인 강의, 수강률, 추천 강의, 개인 메모 기능 포함)",
      "메인 페이지 구성 (카테고리별 인기 강의 노출)",
      "강의 리스트 및 강의 상세 페이지 구현",
      "수강생 간 팔로우/언팔로우 기능 구현",
      "수강생 커뮤니티 기능 구현 (게시글, 댓글, 좋아요 등)",
    ],
    detail: [
      {
        task: "media-query와 rem을 사용해 반응형 UI구축",
        result: ["다양한 화면 크기에서 일관된 사용자 경험을 제공, 접근성 향상"],
      },
      {
        task: "강좌 수강화면을 제외한 모든 유저화면의 주요 작업을 한달 반만에 빠르게 구현",
        result: [
          "대규모 화면 작업을 효율적이고 신속하게 수행하여 개발 속도와 품질 향상에 기여",
        ],
      },
    ],
  },
];
