import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

import { cromanResume } from '../../public';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const ResumeModal = () => {
  const [showModal, setShowModal] = useState(false);
  const className =
    document.documentElement.clientWidth > 768 ? 'resumeDesktop' : '';
  const defaultScale = className === 'resumeDesktop' ? 1 : 0.6;

  const toggleModal = (e) => {
    if (
      !(
        e.target.nodeName === 'SPAN' || e.target.classList.contains('textLayer')
      )
    ) {
      setShowModal(!showModal);
    }
  };

  return (
    <>
      <button className="buttonModal" onClick={toggleModal}>
        Resume
      </button>

      {showModal && (
        <div className="modal">
          <div className="modalOverlay" onClick={(e) => toggleModal(e)}>
            <div className="modalContent">
              <Document file={cromanResume} externalLinkTarget="_blank">
                <Page
                  className={className}
                  pageNumber={1}
                  scale={defaultScale}
                />
              </Document>

              {/* TODO: Revisit styling this button
              <button className="closeModal" onClick={toggleModal}>
                Close
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeModal;
