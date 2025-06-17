import { StyledMainSection, StyledSectionTitle } from "@/styles/commons";
import { centerColumnBoxStyles } from "@/styles/modules";
import styled from "@emotion/styled";

export default function Section6({
  contactRef,
  isVisible,
}: {
  contactRef: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
}) {
  return (
    <StyledSection6 ref={contactRef} isVisible={isVisible}>
      <StyledSectionTitle>
        <p>Contact</p>
        <h2>궁금한 점이나 문의는 언제든 편하게 연락 주세요.</h2>
      </StyledSectionTitle>
      <ul>
        <li>
          mail: <a href="mailto:iamm71kr@gmail.com">iamm71kr@gmail.com</a>
        </li>
        <li>
          phone: <a href="tel:05068673861">050-6867-3861</a> (안심번호)
        </li>
      </ul>
    </StyledSection6>
  );
}

const StyledSection6 = styled(StyledMainSection)`
  ${centerColumnBoxStyles};
  > ul {
    margin: 4rem 0 0 0;
    li {
      font-size: ${(props) => props.theme.fontSizes.size20};
      line-height: 4rem;
      font-weight: 500;
    }
  }
`;
