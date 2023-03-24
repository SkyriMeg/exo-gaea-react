import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.js';

export default function PortalExample() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Nouvel utilisateur
            </button>
            {showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} />,
                document.body
            )}
        </>
    );
}