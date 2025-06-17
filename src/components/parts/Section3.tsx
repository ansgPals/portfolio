import { stackImages } from "@/constants";
import {
  StyledMainSection,
  StyledSectionTitle,
  TooltipWrapper,
} from "@/styles/commons";
import { getFileName } from "@/utils";
import styled from "@emotion/styled";
export default function Section3({
  stackRef,
  isVisible,
}: {
  stackRef: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
}) {
  return (
    <StyledSection3 ref={stackRef} isVisible={isVisible}>
      <StyledSectionTitle>
        <p>기술 스택 및 도구</p>
        <h2>아래의 기술을 사용할 수 있습니다.</h2>
        <StyledStackWrapper>
          {stackImages.map((src) => (
            <TooltipWrapper key={src}>
              <img src={src} alt={getFileName(src)} />
              <span className="tooltip">{getFileName(src)}</span>
            </TooltipWrapper>
          ))}
        </StyledStackWrapper>
      </StyledSectionTitle>
    </StyledSection3>
  );
}

const StyledStackWrapper = styled.div`
  margin: 4rem 0 0 0;
  display: grid;
  width: 100%;
  max-width: 70rem;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  column-gap: 2rem;
  row-gap: 4rem;
  cursor: pointer;
  border: 10px solid ${(props) => props.theme.colors.primary200};
  border-radius: 1rem;
  padding: 4rem;
  > div {
    width: 7rem;
    height: 7rem;
  }

  img {
    width: 5rem;
    height: 5rem;
    display: block;
    overflow: visible;
    border: 1px solid ${(props) => props.theme.colors.line100};
    border-radius: 20px;
    object-fit: cover;
    overflow: hidden;
  }
`;
const StyledSection3 = styled(StyledMainSection)``;
