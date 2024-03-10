import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding} from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
function SearchView({value, onChange}) {

    return (
        <div className="p-10 flex justify-center items-center">
            <div className="w-full max-w-2xl">
                <h2 className="text-38px font-normal font-sans mb-5 text-white">Interested Dealerships</h2>
                <div className="bg-white p-5 rounded-40 shadow-md">
                    <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faBuilding} style={{color: '#FF733C', marginRight: '5px'}}/>
                        <label className="font-bold text-16px font-sans text-1B1B1B">Search Company</label>
                    </div>
                    <input
                        placeholder={"Start typing name, company, phone or email for search"}
                        type={"text"}
                        value={value}
                        onChange={onChange}
                        className={'border-545454 border-1 rounded-27 px-3 w-full h-10'}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchView;