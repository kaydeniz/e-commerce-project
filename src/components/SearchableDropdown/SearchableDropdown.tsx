import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
function SearchableDropdown({ items, label }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');

    useEffect(() => {
        if (searchTerm === '') {
            setResults([]);
        } else {
            setResults(items.filter((item: string) => item.toLowerCase().includes(searchTerm.toLowerCase())));
        }
    }, [searchTerm, items]);

    const handleSelectItem = (item: string) => {
        setSelectedItem(item);
        setSearchTerm(item);
        setResults([]);
    };

    return (
        <div className="flex flex-col space-y-2">
            <label className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faUser} style={{ color: '#FF733C', marginRight: '5px' }} />
                <span>{label}</span>
            </label>
            <div className="relative w-64">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Start typing to match your address"
                    className="border-2 border-545454 rounded-27 p-2 w-full"
                />
                {results.length > 0 && (
                    <div className="absolute top-full mt-2 w-full border-2 border-545454 rounded-27 p-2 bg-white z-10">
                        {results.map((result : string, index) => (
                            <div key={index} className="dropdown-item cursor-pointer" onClick={() => handleSelectItem(result)}>
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