import React from "react";
import "./modal.scss";
import propTypes from "prop-types";
import ReactDOM from "react-dom";

const Modal = props => {
  const Portal = props => {
    const node = document.createElement("div");
    document.body.appendChild(node);
    return ReactDOM.createPortal(props.children, node);
  };
  return (
    <Portal>
      <div className="dark" onClick={props.isClose}>
        <div className="modal" tabIndex="-1">
          <div
            className="modal-dialog"
            onClick={event => event.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{props.header}</h5>
                {props.closeButton && (
                  <button
                    onClick={props.isClose}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                )}
              </div>
              <div className="modal-body">
                <p>{props.text}</p>
              </div>
              <div className="modal-footer">{props.actions}</div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

Modal.propTypes = {
  closeButton: propTypes.bool,
  text: propTypes.string,
  header: propTypes.string,
  isClose: propTypes.func,
  actions: propTypes.object,
};
export default Modal;
