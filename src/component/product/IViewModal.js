import React from "react";
import { Modal } from "react-bootstrap";

export default function IViewModal({ show, onHide, children, title }) {
  return (
    <div className="viewModal">
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="example-modal-sizes-title-xl"
        centered

      >
        <Modal.Header className="bg-custom">
          <Modal.Title className="text-center">{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body id="example-modal-sizes-title-xl">{children}</Modal.Body>
        <Modal.Footer>
          <div>
            <button
              type="button"
              onClick={() => onHide()}
              className="btn btn-light btn-elevate"
            >
              Cancel
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
