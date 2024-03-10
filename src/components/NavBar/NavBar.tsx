import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    return (
        <nav className="w-full bg-1B1B1B">
            <div className="flex justify-between items-center px-16 md:px-20 py-4 relative">
                <div className="flex items-center space-x-4 h-full">
                    <div className="relative">
                        <p className="text-white border-b-2 border-transparent pb-1">For Business</p>
                        <div className="w-full h-3 bg-FF733C absolute -bottom-6 rounded-t-md"></div>
                    </div>
                    <div className="border-l-2 border-545454 h-full mx-2"></div>
                    <p className="text-white border-b-2 border-transparent hover:border-white pb-1">For Drivers</p>
                </div>
                <button className="border-2 border-white text-white flex items-center space-x-2 px-4 py-2">
                    <span>Partner Login</span>
                    <div className="flex items-centercursor-pointer text-white">
                        <FontAwesomeIcon icon={faRightToBracket}/>
                    </div>
                </button>
            </div>
            <div className="w-full bg-FF733C flex justify-between items-center px-16 md:px-20 py-4">
                <div className="flex items-center space-x-4">
                    <img src="/BumperLogo.svg" alt="Bumper Logo"/>
                    <span className="text-black font-oswald font-bold">for business</span>
                </div>
                <button className="bg-32BE50 border-2 border-black text-black px-4 py-2 font-open-sans">Register
                </button>
            </div>
        </nav>
    );
}

export default NavBar;