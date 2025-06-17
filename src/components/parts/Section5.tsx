import { projects, projectStackImages } from "@/constants";
import {
  StyledMainSection,
  StyledSectionTitle,
  TooltipWrapper,
} from "@/styles/commons";
import { centerColumnBoxStyles, normalBoxStyles } from "@/styles/modules";
import { ProjectName } from "@/types/types";
import { getFileName } from "@/utils";
import styled from "@emotion/styled";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Section5({
  projectRef,
  isVisible,
}: {
  projectRef: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
}) {
  const [modalState, setModalState] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectName | null>(
    "esjp"
  );
  return (
    <StyledSection5 ref={projectRef} isVisible={isVisible}>
      <StyledSectionTitle>
        <p>프로젝트 상세</p>
        <h2>주요 프로젝트의 세부 사항을 확인해보세요</h2>
      </StyledSectionTitle>
      <ul>
        {projects.map((item) => (
          <StyledProjectLi
            onClick={() => {
              setModalState(true);
              setSelectedProject(item.projectName as unknown as ProjectName);
            }}
            key={item.projectName}
          >
            <div>
              <img src={item.logo} height={item.logoHeight} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <StyledProjectStackBox>
                {projectStackImages[item.projectName as ProjectName].map(
                  (src) => {
                    const stackName = getFileName(src);
                    return (
                      <TooltipWrapper key={src}>
                        <img src={src} alt={stackName} />
                        <span className="tooltip">{stackName}</span>
                      </TooltipWrapper>
                    );
                  }
                )}
              </StyledProjectStackBox>
            </div>
          </StyledProjectLi>
        ))}
      </ul>

      {modalState && selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={modalState}
          handleClose={() => setModalState(false)}
        />
      )}
    </StyledSection5>
  );
}

const StyledSection5 = styled(StyledMainSection)`
  ${centerColumnBoxStyles};
  > ul {
    width: 100%;
    max-width: 80rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    gap: 2rem;
    margin: 4rem 0 0 0;
  }
`;
const StyledProjectLi = styled.li`
  box-shadow: rgb(0 0 0 / 10%) 0.4rem 0.6rem 1.8rem;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: rgb(0 0 0 / 40%) 0.4rem 0.6rem 1.8rem;
  }

  > div:first-of-type {
    height: 5rem;
    ${normalBoxStyles};
    padding: 0 0 0 2rem;
  }
  > div:last-of-type {
    border-top: 1px solid ${(props) => props.theme.colors.line100};
    padding: 2rem;
    > h3 {
      font-size: ${(props) => props.theme.fontSizes.size20};
      line-height: 2.7rem;
      font-weight: 700;
    }
    > p {
      font-size: ${(props) => props.theme.fontSizes.size16};
      line-height: 2.7rem;
    }
  }
`;
const StyledProjectStackBox = styled.div`
  display: flex;
  flex-direction: wrap;
  column-gap: 0.4rem;
  margin: 2rem 0 0 0;
  width: 100%;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 1rem;
    border: 1px solid ${(props) => props.theme.colors.line100};
  }
  .tooltip {
    bottom: -3rem;
  }
`;
