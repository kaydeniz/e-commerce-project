// src/components/FormView/FormView.tsx
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
function FormView({children}) {

    return (
        <div className="p-10 flex justify-center items-center">
            <div className="w-full max-w-2xl">
                <div className="flex items-center mb-5 cursor-pointer text-white">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </div>
                <h2 className="text-38px font-normal mb-5 text-white">Join our network</h2>
                <p className="text-sm font-normal mb-5 text-white">
                    Offer <span className="font-bold">PayLater</span> to split servicing and repair work into monthly
                    instalments - interest-free.
                    Use <span className="font-bold">PayNow</span> to take secure payments online.
                </p>
                <div className="bg-white p-5 rounded-40 shadow-md">
                    <h2 className="text-21px font-bold mb-2 text-000000">Join our
                        network</h2>
                    <p className="text-21px font-normal mb-5 text-000000">Free to join, no monthly
                        fees</p>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default FormView;