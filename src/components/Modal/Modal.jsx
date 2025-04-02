import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");
export default function Modal({ children, onClose, title }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={modalStyles.modal}>
        <div className={modalStyles.top}>
          {/* <h2 className="text text_type_main-large">{title}</h2> */}
          <button type="button" onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        <div className={modalStyles.content}>{children}</div>
      </div>
      <ModalOverlay onClose={onClose} />
    </React.Fragment>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
