import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// @ts-ignore
function MultiSelectButton({ selected, onSelect, label, isError }) {
    const buttonClass = selected ? 'bg-1B1B1B hover:bg-1B1B1B' : 'bg-white hover:bg-DCE6E6';
    const labelClass = selected ? 'text-white' : 'text-1B1B1B';
    const iconClass = selected ? 'text-white' : 'text-1B1B1B';

    return (
        <button
            className={`p-2 rounded-27 mr-1 border-1B1B1B border-1 ${buttonClass}`}
            onClick={onSelect}
            type={"button"}
        >
            <div className="flex justify-between items-center space-x-2">
                <span className={labelClass}>{label}</span>
                <div>
                    {selected ? <FontAwesomeIcon icon={faMinus} className={iconClass}/> :
                        <FontAwesomeIcon icon={faPlus} className={iconClass}/>}
                </div>
            </div>
        </button>
    );
}

export default MultiSelectButton;