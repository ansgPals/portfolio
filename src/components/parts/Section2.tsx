import CheckIcon from "@/asset/check.svg";
import { StyledMainSection, StyledSectionTitle } from "@/styles/commons";
import {
  centerColumnBoxStyles,
  columnBoxStyles,
  normalBoxStyles,
} from "@/styles/modules";
import styled from "@emotion/styled";
export default function Section2({
  coreRef,
}: {
  coreRef: React.RefObject<HTMLElement | null>;
}) {
  return (
    <StyledSection2 ref={coreRef}>
      <StyledSectionTitle>
        <p>핵심 역량</p>
        <h2>
          능동적으로 고민하고, <br />
          실용적인 결과를 빠르게 만듭니다.
        </h2>
      </StyledSectionTitle>

      <StyledCoreCard>
        <h3>퍼포먼스가 뛰어난 개발자</h3>
        <ul>
          <li>
            <CheckIcon />
            공통 UI 컴포넌트 및 커스텀 훅으로 반복 코드 최소화 → 유지보수성과
            생산성을 모두 높였습니다.
          </li>
          <li>
            <CheckIcon />
            기능 요청·버그 리포트는 우선순위 기반으로 정리 후 빠르게 대응하며,
            Slack 알림 연동으로 공유 효율도 함께 개선했습니다.
          </li>
          <li>
            <CheckIcon />
            실제 협업 환경에서 작업 속도가 빠르다는 피드백을 꾸준히 받아왔으며,
            빠르게 결과를 도출하는 실행력을 강점으로 합니다.
          </li>
        </ul>
      </StyledCoreCard>
      <StyledCoreCard>
        <h3>능동적인 업무 스타일과 커뮤니케이션</h3>
        <ul>
          <li>
            <CheckIcon />
            기획 리뷰 단계부터 개발 관점에서 흐름을 체크하며 누락되기 쉬운 예외
            처리나, 더 효율적인 플로우를 선제적으로 제안합니다.
          </li>
          <li>
            <CheckIcon />
            기획자·디자이너와의 논의 중 불명확한 사양은 정리해 문서화하고, 팀원
            간 원활한 개발 진행을 위한 조율자 역할도 맡습니다.
          </li>
          <li>
            <CheckIcon />
            주기적으로 프로젝트의 개선점을 정리해 기획팀에 제안하고, 우선순위
            선정 → 담당자 지정 → 직접 구현 및 릴리즈까지 주도합니다.
          </li>
        </ul>
      </StyledCoreCard>

      <StyledCoreCard>
        <h3>팀원들의 업무효율 UP을 위한 고민과 실행</h3>
        <ul>
          <li>
            🤔 매번 배포 시 에러 발생으로 인한 시간 낭비
            <br />
            👉 PR 생성 시 GitHub Action을 통한 pre-build → build 에러 발생 시
            Slack 알림 연동으로 배포 시간을 대폭 단축.
          </li>
          <li>
            🤔 일본어 기반 피그마 텍스트로 인한 빠른 UI 파악 어려움
            <br />
            👉 피그마 텍스트 자동 번역 플러그인 개발로 디자이너-개발자 간
            커뮤니케이션 속도 향상에 기여.
          </li>

          <li>
            🤔 PR 작성 시 반복되는 담당자/리뷰어/라벨 지정
            <br />
            👉 GitHub Action 자동화로 PR 작성 시 지정 자동화 및 템플릿 기본값
            설정 → 리뷰 프로세스를 효율적으로 표준화.
          </li>
        </ul>
      </StyledCoreCard>
    </StyledSection2>
  );
}

const StyledSection2 = styled(StyledMainSection)`
  ${centerColumnBoxStyles};
  margin: 4rem 0 0 0;
  row-gap: 2rem;
  ${StyledSectionTitle} {
    margin: 15rem 0 4rem 0;
  }
`;

const StyledCoreCard = styled.div`
  width: 90rem;
  max-width: 100%;
  padding: 3rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 10%) 0.4rem 0.6rem 1.8rem;

  h3 {
    ${normalBoxStyles};
    line-height: 3rem;
    font-size: ${(props) => props.theme.fontSizes.size20};
    font-weight: 600;
    margin: 0 0 1rem 0;
  }
  ul {
    font-size: ${(props) => props.theme.fontSizes.size16};
    line-height: 2.7rem;
  }

  &:not(:last-of-type) {
    li {
      display: flex;

      > svg {
        min-width: 2rem;
        margin: 0.1rem 1rem 0 0;
      }
    }
  }

  &:last-of-type {
    ul {
      ${columnBoxStyles};
      row-gap: 1.5rem;
    }
  }
`;
