import React from "react";

import modalOverlayStyles from "./modalOverlay.module.css";

export default function ModalOverlay({ onClose }) {
  return <div className={modalOverlayStyles.overlay} onClick={onClose}></div>;
}
