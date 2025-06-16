import Menu from "@/components/commons/Menu";
import Section1 from "@/components/parts/Section1";
import Section2 from "@/components/parts/Section2";
import Section3 from "@/components/parts/Section3";
import Section4 from "@/components/parts/Section4";
import Section5 from "@/components/parts/Section5";
import Section6 from "@/components/parts/Section6";
import { centerColumnBoxStyles } from "@/styles/modules";
import styled from "@emotion/styled";
import { useRef } from "react";
export default function Main() {
  const stackRef = useRef<HTMLElement>(null);
  const careerRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const coreRef = useRef<HTMLElement>(null);
  return (
    <StyledMainWrapper>
      <Section1 />
      <Menu
        sectionRefs={{
          core: coreRef,
          stack: stackRef,
          career: careerRef,
          project: projectRef,
          contact: contactRef,
        }}
      />
      <Section2 coreRef={coreRef} />
      <Section3 stackRef={stackRef} />
      <Section4 careerRef={careerRef} />
      <Section5 projectRef={projectRef} />
      <Section6 contactRef={contactRef} />
      <StyledGradient />
    </StyledMainWrapper>
  );
}

const StyledMainWrapper = styled.div`
  ${centerColumnBoxStyles};
  position: relative;
  padding: 5rem 0 0;
  max-width: 100vw;
`;
const StyledGradient = styled.div`
  height: 25rem;
  margin: 10rem 0 0 0;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(118, 138, 255, 0.84) 0%,
    rgba(24, 201, 127, 0.573) 50%,
    rgba(255, 255, 255, 1) 100%
  );
`;
