import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
function SearchableDropdown({ items, label, onSelect }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);

    useEffect(() => {
        if (searchTerm === '' && !isInputFocused) {
            setResults([]);
            setSelectedItem(''); // Set selectedItem to null when searchTerm is empty
        } else {
            setResults(items.filter((item: string) => item.toLowerCase().includes(searchTerm.toLowerCase())));
        }
    }, [searchTerm, items, isInputFocused]);

    const handleSelectItem = (item: string) => {
        setSelectedItem(item);
        setSearchTerm(item);
        setResults([]);
        setIsInputFocused(false);
        onSelect(item);
    };

    return (
        <div className="relative w-full mb-3">
            <label className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faHouse} style={{color: '#FF733C', marginRight: '5px'}}/>
                <label className="font-bold text-16px font-sans text-1B1B1B">{label}</label>
            </label>
            <div className="relative w-full">
                <input
                    type="text"
                    name={'postcode'}
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                    placeholder="Start typing to match your address"
                    className="border-1 border-545454 rounded-27 p-2 w-full"
                />
                {(results.length > 0 || isInputFocused) && (
                    <div className="absolute top-full mt-2 w-full border-1 border-545454 rounded-27 p-2 bg-white z-10">
                        {results.map((result: string, index) => (
                            <div key={index} className="dropdown-item cursor-pointer"
                                 onClick={() => handleSelectItem(result)}>
                                <strong>{result.substring(0, result.toLowerCase().indexOf(searchTerm.toLowerCase()) + searchTerm.length)}</strong>
                                {result.substring(result.toLowerCase().indexOf(searchTerm.toLowerCase()) + searchTerm.length)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchableDropdown;