import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// @ts-ignore
function Snackbar({ message, type }) {
    const [show, setShow] = useState(true);

    return (
        <div
            className={`fixed bottom-4 right-4 flex items-center ${
                type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white px-4 py-2 rounded`}
            style={{ display: show ? 'flex' : 'none' }}
        >
            <p>{message}</p>
            <button className="ml-2" onClick={() => setShow(false)}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    );
}

export default Snackbar;
