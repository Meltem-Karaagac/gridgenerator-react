/* eslint-disable react/prop-types */
import React from 'react';

function Modal(props) {
  const {
    modalStyle,
    closeModal,
    modalMessage,
  } = props;
  return (
    <div id="myModal" className="modal" style={{ display: modalStyle }}>
      <div className="modal-content" id="modal-content">
        <button type="submit" className="close" onClick={closeModal}>&times;</button>
        <p>{modalMessage}</p>
      </div>
    </div>
  );
}

export default Modal;
