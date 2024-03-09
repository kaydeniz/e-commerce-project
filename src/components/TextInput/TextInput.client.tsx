import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
function TextInput({ value, onChange, validationRegex, errorMessage, onBlur, label, icon }) {
    const [isValid, setIsValid] = useState(true);

    console.log(icon, 'icon')

    const handleBlur = (e: any) => {
        if (validationRegex) {
            setIsValid(validationRegex.test(value));
        }
        if (onBlur) {
            onBlur(e);
        }
    };

    return (
        <div className="relative">
            {label && (
                <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faUser} style={{ color: '#FF733C', marginRight: '5px' }} />
                    <label className="text-gray-700" style={{ color: '#1B1B1B' }}>{label}</label>
                </div>
            )}
            <input
                type="text"
                value={value}
                onChange={onChange}
                onBlur={handleBlur}
                className={`border ${isValid ? 'border-green-500' : 'border-red-500'} border-1 rounded-27 px-3 w-full h-10`}
            />
            {isValid && value !== '' && <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-500">✓</span>}
            {!isValid && <span className="absolute top-1 right-0 pr-3 flex items-center text-red-500">!</span>}
            {!isValid && <p className="text-red-500">{errorMessage}</p>}
        </div>
    );
}

export default TextInput;