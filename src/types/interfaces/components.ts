import { ProjectName } from "../types";

export interface ModalProps {
  children: React.ReactNode;
  handleClose: () => void;
  isOpen: boolean;
}
export interface ProjectModalProps {
  handleClose: () => void;
  isOpen: boolean;
  project: ProjectName;
}
