import { careerStackImages } from "@/constants";
import {
  StyledMainSection,
  StyledSectionTitle,
  TooltipWrapper,
} from "@/styles/commons";
import { centerBoxStyles, centerColumnBoxStyles } from "@/styles/modules";
import { getFileName } from "@/utils";
import styled from "@emotion/styled";

export default function Section4({
  careerRef,
}: {
  careerRef: React.RefObject<HTMLElement | null>;
}) {
  return (
    <StyledSection4 ref={careerRef}>
      <StyledSectionTitle>
        <p>경력 사항</p>
        <h2>
          다양한 업무와 프로젝트를 통해
          <br />
          경험과 노하우를 쌓고 있습니다.
        </h2>
      </StyledSectionTitle>
      <p> 업무경험 </p>
      <StyledCareerCard>
        <p>❇️ 2025.06 ~ 재직중</p>
        <div>
          <h3>휴런</h3>
          <p>
            뇌신경계질환 전문 인공지능 의료기기 개발 기업
            <br />
            AI 기반 뇌질환(뇌졸중/뇌출혈/파킨슨병/알츠하이머) 자동진단
            소프트웨어 개발 (프론트엔드)
          </p>
          <StyledStackBox>
            {careerStackImages.heuron.map((src) => (
              <TooltipWrapper key={src}>
                <img src={src} alt={getFileName(src)} />
                <span className="tooltip">{getFileName(src)}</span>
              </TooltipWrapper>
            ))}
          </StyledStackBox>
        </div>
      </StyledCareerCard>
      <StyledCareerCard>
        <p>❇️ 2022.09 ~ 2025.01</p>
        <div>
          <h3>일루미나리안</h3>
          <p>
            모기업인 미국 Solariant Capital에 필요한 상품을 개발하는 IT 스타트업
            <br />
            크라우드 펀딩 플랫폼 및 엔터테인먼트 전문 정산 플랫폼 개발
            (프론트엔드)
          </p>
          <StyledStackBox>
            {careerStackImages.illuminarean.map((src) => (
              <TooltipWrapper key={src}>
                <img src={src} alt={getFileName(src)} />
                <span className="tooltip">{getFileName(src)}</span>
              </TooltipWrapper>
            ))}
          </StyledStackBox>
        </div>
      </StyledCareerCard>
      <StyledCareerCard>
        <p>❇️ 2022.05 ~ 2025.07</p>
        <div>
          <h3>딩코</h3>
          <p>
            개발 부트캠프 학원
            <br />
            온라인 코딩클래스 플랫폼 개발 (프론트엔드/인턴)
          </p>
          <StyledStackBox>
            {careerStackImages.dingco.map((src) => (
              <TooltipWrapper key={src}>
                <img src={src} alt={getFileName(src)} />
                <span className="tooltip">{getFileName(src)}</span>
              </TooltipWrapper>
            ))}
          </StyledStackBox>
        </div>
      </StyledCareerCard>
    </StyledSection4>
  );
}
const StyledStackBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 2rem 0 0 0;
  max-width: 100%;
  .tooltip {
    bottom: -3rem;
    transform: translateX(calc(-50% - 0.5rem));
  }
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 1rem;
    border: 1px solid ${(props) => props.theme.colors.line100};
  }
`;
const StyledCareerCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 71rem;
  column-gap: 1.5rem;
  > p {
    font-size: ${(props) => props.theme.fontSizes.size15};
    line-height: 3.5rem;
    min-width: 15rem;
  }
  > div {
    width: calc(100% - 16.5rem);
    > h3 {
      font-size: ${(props) => props.theme.fontSizes.size20};
      line-height: 3.5rem;
      font-weight: 700;
    }
    > p {
      font-size: ${(props) => props.theme.fontSizes.size15};
      line-height: 2.5rem;
      color: ${(props) => props.theme.colors.grey500};
    }
  }
`;
const StyledSection4 = styled(StyledMainSection)`
  ${centerColumnBoxStyles};
  row-gap: 3.5rem;
  > p {
    width: 100%;
    ${centerBoxStyles};
    line-height: 3rem;
    font-size: ${(props) => props.theme.fontSizes.size20};
    color: ${(props) => props.theme.colors.grey200};
    column-gap: 1rem;
    margin: 1rem 0 1rem 0;

    &::before {
      content: "";
      width: 40%;
      max-width: 30rem;
      height: 0.1rem;
      background-color: ${(props) => props.theme.colors.grey200};
      display: block;
    }
    &::after {
      content: "";
      width: 40%;
      max-width: 30rem;
      height: 0.1rem;
      background-color: ${(props) => props.theme.colors.grey200};
      display: block;
    }
  }
`;
