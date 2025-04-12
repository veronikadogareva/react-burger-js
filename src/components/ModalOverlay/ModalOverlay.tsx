import modalOverlayStyles from "./modalOverlay.module.css";

type ModalOverlayProps = {
  onClose: () => void;
};

export default function ModalOverlay({ onClose }: ModalOverlayProps) {
  return <div className={modalOverlayStyles.overlay} onClick={onClose}></div>;
}
