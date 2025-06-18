import { ModalProps } from "@/types/interfaces/components";
import styled from "@emotion/styled";
import { useEffect } from "react";

export default function Modal(props: ModalProps) {
  const { children, handleClose, isOpen } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    isOpen && (
      <StyledModalBg
        onClick={() => {
          handleClose();
          document.body.style.overflow = "auto";
        }}
        role="dialog"
        aria-modal="true"
      >
        <StyledModalWrapper onClick={(e) => e.stopPropagation()}>
          <header>
            <button
              onClick={() => {
                handleClose();
                document.body.style.overflow = "auto";
              }}
            >
              X
            </button>
          </header>
          <div>{children}</div>
        </StyledModalWrapper>
      </StyledModalBg>
    )
  );
}

const StyledModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const StyledModalWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;
  padding: 0 0 1.5rem 0;
  position: relative;
  > header {
    display: flex;
    justify-content: end;
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.line100};
    > button {
      border: unset;
      background-color: unset;
      font-size: ${(props) => props.theme.fontSizes.size20};
      padding: 1rem 1.5rem;
      cursor: pointer;
    }
  }
  > div {
    max-width: 90rem;
    width: calc(100vw - 10rem);
    height: calc(100vh - 40rem);
    overflow-y: auto;
    padding: 0 1.2rem 0 1.5rem;
    margin: 1rem 0 0 0;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    height: 4rem;
    background: linear-gradient(
      to top,
      ${(props) => props.theme.colors.white} 0%,
      rgba(255, 255, 255, 0.9) 30%,
      rgba(255, 255, 255, 0.6) 70%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;
