import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default function Delete() {
    return (
        <div>
            <OverlayTrigger overlay={<Tooltip id="delete-icon">Delete</Tooltip>}>
                <span style={{ cursor: 'pointer' }}>
                    <i className='fas fa-trash mx-1' aria-hidden="true"></i>
                </span>
            </OverlayTrigger>

        </div>
    )
}
