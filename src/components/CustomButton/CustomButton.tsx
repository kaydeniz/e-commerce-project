import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// @ts-ignore
function CustomButton({ selected, onSelect, label, type, className }) {
    const buttonClass = selected ? 'bg-1B1B1B' : 'bg-32BE50 hover:bg-32BE50';
    const labelClass = selected ? 'text-white hover:text-white' : 'text-1B1B1B hover:text-white';
    const iconClass = selected ? 'text-white hover:text-white' : 'text-1B1B1B hover:text-white';

    return (
        <button
            className={`p-2 rounded-27 ${buttonClass} hover:text-white ${className}`}
            onClick={onSelect}
            type={type}
        >
            <div className="flex justify-center items-center space-x-2">
                <span className={labelClass}>{label}</span>
                <FontAwesomeIcon icon={faArrowRight} className={iconClass} />
            </div>
        </button>
    );
}

export default CustomButton;