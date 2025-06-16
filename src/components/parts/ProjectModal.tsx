import CheckIcon from "@/asset/check.svg";
import { projects, projectStackImages } from "@/constants";
import { TooltipWrapper } from "@/styles/commons";
import { columnBoxStyles, normalBoxStyles } from "@/styles/modules";
import { ProjectModalProps } from "@/types/interfaces/components";
import { ProjectName } from "@/types/types";
import { getFileName } from "@/utils";
import styled from "@emotion/styled";

import Modal from "../commons/Modal";
export default function ProjectModal(props: ProjectModalProps) {
  const { isOpen, handleClose, project } = props;
  const contents = projects.filter((p) => p.projectName === project)[0];
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <StyledProjectModal>
        <img
          src={contents.logo}
          height={contents.logoHeight}
          alt={getFileName(contents.logo)}
        />
        <h3>{contents.title}</h3>
        <div>
          <label>프로젝트 설명</label>
          <p>{contents.description}</p>
        </div>
        <div>
          <label>기술 스택</label>

          <StyledStackBox>
            {projectStackImages[contents.projectName as ProjectName].map(
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
          </StyledStackBox>
        </div>
        <StyledProjectDes>
          <div>
            <label>참여인원</label>
            <p>{contents.memberCount}</p>
          </div>
          <div>
            <label>기간</label>
            <p>{contents.period}</p>
          </div>
        </StyledProjectDes>
        <div>
          <label>주요 업무</label>
          <StyledMainTask>
            {contents.mainTask.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </StyledMainTask>
        </div>
        <div>
          <label>주요 성과</label>
          <StyledResult>
            {contents.detail.map(({ task, result }, i) => (
              <ul key={i}>
                <li>{task}</li>
                {result.map((item, index) => (
                  <li key={index}>
                    <CheckIcon />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            ))}
          </StyledResult>
        </div>
      </StyledProjectModal>
    </Modal>
  );
}

const StyledResult = styled.div`
  ${columnBoxStyles};
  row-gap: 2rem;
  > ul {
    > li {
      display: flex;
      font-size: ${(props) => props.theme.fontSizes.size18};
      line-height: 2.5rem;

      &:first-of-type {
        font-weight: 600;
      }
      > p {
        color: ${(props) => props.theme.colors.line300};
      }
      > svg {
        margin: 0.1rem 0.8rem 0 0;
      }
    }
  }
`;
const StyledMainTask = styled.ul`
  ${columnBoxStyles};
  > li {
    display: flex;
    &::before {
      content: "";
      display: block;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: black;
      margin: 1.1rem 0.8rem 0 0;
    }
    font-size: ${(props) => props.theme.fontSizes.size18};
    line-height: 3.5rem;
  }
`;
const StyledProjectDes = styled.div`
  ${normalBoxStyles};
  column-gap: 4rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.line100};
  padding: 0 0 2rem 0;
  > div > p {
    font-size: ${(props) => props.theme.fontSizes.size18};
  }
`;
const StyledProjectModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 2rem;
  padding: 3rem;
  > img {
    width: fit-content;
    object-fit: contain;
  }
  > h3 {
    font-size: ${(props) => props.theme.fontSizes.size24};
    font-weight: 700;
    line-height: 2.7rem;
  }
  > div {
    label {
      font-size: ${(props) => props.theme.fontSizes.size15};
      color: ${(props) => props.theme.colors.grey200};
      line-height: 3rem;
    }
    > p {
      font-size: ${(props) => props.theme.fontSizes.size18};
      line-height: 3rem;
    }
  }
`;
const StyledStackBox = styled.div`
  display: flex;
  flex-direction: wrap;
  column-gap: 0rem;
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
