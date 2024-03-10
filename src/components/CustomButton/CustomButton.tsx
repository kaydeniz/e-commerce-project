import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

// @ts-ignore
function CustomButton({selected, onSelect, label, type, className}) {
    const buttonClass = selected ? 'bg-1B1B1B hover:text-white' : 'bg-32BE50 hover:bg-32BE50 hover:text-white';
    const [color, setColor] = React.useState('text-1B1B1B');

    const handleMouseEnter = () => {
        setColor('text-white')
    };

    const handleMouseLeave = () => {
        setColor('text-1B1B1B')
    };

    return (
        <button
            className={`p-2 rounded-27 ${buttonClass} ${className}`}
            onClick={onSelect}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            type={type}
        >
            <div className="flex justify-center items-center space-x-2">
                <span className={color}>{label}</span>
                <FontAwesomeIcon icon={faArrowRight} className={color}/>
            </div>
        </button>
    );
}

export default CustomButton;