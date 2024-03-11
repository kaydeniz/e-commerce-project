import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

function NavBar() {
    const router = useRouter();

    function goHome() {
        router.push('/');
    }

    return (
        <div className="w-full rounded-b-27 bg-FF733C">
            <div className="flex justify-between bg-1B1B1B items-center px-16 md:px-20 py-4 relative rounded-b-27">
                <div className="flex items-center space-x-4 h-full">
                    <div className="relative">
                        <p className="text-white border-b-2 border-transparent pb-1">For Business</p>
                        <div className="w-full h-3 bg-FF733C absolute -bottom-6 rounded-t-md"></div>
                    </div>
                    <div className="border-l-2 border-545454 h-full mx-2"></div>
                    <p className="text-white border-b-2 border-transparent hover:border-white pb-1">For Drivers</p>
                </div>
                <button className="border-2 border-white text-white hidden md:flex items-center space-x-2 px-4 py-2">
                    <span>Partner Login</span>
                    <div className="flex items-center cursor-pointer text-white">
                        <FontAwesomeIcon icon={faRightToBracket}/>
                    </div>
                </button>
            </div>
            <div className="w-full flex justify-between items-center px-16 md:px-20 py-4 rounded-b-27">
                <div className="flex items-center space-x-4">
                    <img src="/BumperLogo.svg" alt="Bumper Logo" onClick={goHome} style={{ cursor: 'pointer' }}/>
                    <span className="text-black font-oswald font-bold">for business</span>
                </div>
                <button className="bg-32BE50 border-2 border-black text-black px-4 py-2 font-open-sans">Register</button>
            </div>
        </div>
    );
}

export default NavBar;
