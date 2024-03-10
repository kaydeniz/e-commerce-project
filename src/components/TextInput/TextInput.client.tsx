// src/components/TextInput/TextInput.client.tsx
import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faExclamation} from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
function TextInput({ name, value, type,  onChange, regex, errorMessage, label, icon }) {
    const [isValid, setIsValid] = useState(null);
    const [error, setError] = useState('');

    const handleBlur = (e: any) => {
        if (regex) {
            const valid = regex.test(e.target.value);
            setIsValid(valid);
            setError(valid ? '' : errorMessage);
        }
    };

    return (
        <div className="relative mb-3">
            {label && (
                <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={icon} style={{ color: '#FF733C', marginRight: '5px' }} />
                    <label className="font-bold text-16px font-sans text-1B1B1B">{label}</label>
                </div>
            )}
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={handleBlur}
                className={`border ${isValid === null ? 'border-545454' : isValid ? 'border-32BE50' : 'border-DC3545'} border-1 rounded-27 px-3 w-full h-10`}
            />
            {isValid === true && value !== '' && <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-32BE50" style={{ top: '70%', transform: 'translateY(-50%)' }}><FontAwesomeIcon icon={faCheck} /></span>}
            {isValid === false && <span className="absolute top-1 right-0 pr-3 flex items-center text-DC3545" style={{ top: '70%', transform: 'translateY(-50%)' }}><FontAwesomeIcon icon={faExclamation} /></span>}
            {isValid === false && <p className="text-red-500">{error}</p>}
        </div>
    );
}

export default TextInput;