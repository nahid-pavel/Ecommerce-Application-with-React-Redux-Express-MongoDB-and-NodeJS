import React from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const Edit = () => {
  return (
    <OverlayTrigger overlay={<Tooltip id="edit-icon">Edit</Tooltip>}>
      <span style={{cursor: 'pointer'}}>
        <i className={`fas fa-pen-square pointer`}></i>
      </span>
      </OverlayTrigger>
  );
};

export default Edit;