import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';

// @ts-ignore
function MultiSelectButton({ selected, onSelect, label, isError }) {
    const buttonClass = selected ? 'bg-1B1B1B hover:bg-1B1B1B' : 'bg-white hover:bg-DCE6E6';
    const labelClass = selected ? 'text-white' : 'text-1B1B1B';
    const iconClass = selected ? 'text-white' : 'text-1B1B1B';

    return (
        <button
            className={`p-2 rounded-27 mr-1 border-1B1B1B border-1 ${buttonClass} ${isError && !selected ? 'border-DC3545' : ''}`}
            onClick={onSelect}
            type={"button"}
        >
            <div className="flex justify-between items-center space-x-2">
                <span className={labelClass}>{label}</span>
                <div>
                    {selected ? <FontAwesomeIcon icon={faCheck} className={iconClass}/> :
                        <FontAwesomeIcon icon={faPlus} className={iconClass}/>}
                    {isError && !selected && <FontAwesomeIcon icon={faExclamation} className="text-DC3545 pl-2"/>}
                </div>
            </div>
        </button>
    );
}

export default MultiSelectButton;