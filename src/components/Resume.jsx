import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

import { cromanResume } from '../../public';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const ModalContent = ({ onClose }) => {
  return (
    <div className="modal">
      <Document file={cromanResume}>
        <Page pageNumber={1} />
      </Document>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <>
      {showModal &&
        createPortal(
          <ModalContent onClose={handleClose} />,
          document.getElementById('portal')
        )}
    </>
  );
};

const Resume = () => {
  return (
    <div>
      <Modal />
    </div>
  );
};

export default Resume;
