import React from "react";

import modalOverlayStyles from "./modalOverlay.module.css";
import PropTypes from "prop-types";

export default function ModalOverlay({ onClose }) {
  return <div className={modalOverlayStyles.overlay} onClick={onClose}></div>;
}
ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};
