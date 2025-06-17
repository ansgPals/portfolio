import {
  StyledButtonWrapper,
  StyledMainSection,
  StyledNormalButton,
} from "@/styles/commons";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
const WavingCharacter = dynamic(() => import("@/components/parts/Waving"), {
  ssr: false,
});

export default function Section1() {
  return (
    <StyledSection1 isVisible={true} isFirstSection={true}>
      <MascotWrapper>
        <WavingCharacter />
      </MascotWrapper>
      <h1>
        안녕하세요!
        <br />
        프론트엔드 개발자
        <br />
        <strong>문혜민</strong>입니다.
      </h1>
      <p>
        React 중심으로 웹프론트엔드를 구축합니다. <br />
        퍼모먼스가 뛰어나다는 평을 자주듣는 개발자 입니다.
      </p>

      <StyledButtonWrapper>
        <a href="/FE-문혜민.pdf" download>
          <StyledNormalButton>이력서 다운로드</StyledNormalButton>
        </a>
      </StyledButtonWrapper>
    </StyledSection1>
  );
}

const StyledSection1 = styled(StyledMainSection)`
  > h1 {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.size40};
    line-height: 6rem;
    > strong {
      font-weight: 700;
      color: ${(props) => props.theme.colors.primary400};
    }
  }
  > p {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.size20};
    line-height: 3rem;
    margin: 4rem 0;
    color: ${(props) => props.theme.colors.grey200};
  }
  ${StyledNormalButton} {
    font-size: ${(props) => props.theme.fontSizes.size15};
  }
`;
const MascotWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 200px;
  margin: 0 auto 2rem;
  overflow: hidden;
  canvas {
    display: block;
    cursor: pointer;
  }
`;
