import React from 'react';

function NavBar() {
    return (
        <nav className="w-full bg-1B1B1B">
            <div className="flex justify-between items-center px-16 md:px-20 py-4">
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-white border-b-2 border-transparent hover:border-white pb-1">For Business</a>
                    <a href="#" className="text-white border-b-2 border-transparent hover:border-white pb-1">For Drivers</a>
                </div>
                <button className="border-2 border-white text-white flex items-center space-x-2 px-4 py-2">
                    <span>Partner Login</span>
                    <i className="fas fa-sign-in-alt"></i>
                </button>
            </div>
            <div className="w-full h-2 bg-1B1B1B rounded-l-md rounded-r-md"></div>
            <div className="w-full h-2 bg-FF733C rounded-l-md rounded-r-md"></div>
            <div className="w-full bg-FF733C flex justify-between items-center px-16 md:px-20 py-4">
                <div className="flex items-center space-x-4">
                    <img src="/BumperLogo.svg" alt="Bumper Logo" />
                    <span className="text-black font-oswald font-bold">for business</span>
                </div>
                <button className="bg-32BE50 border-2 border-black text-black px-4 py-2 font-open-sans">Register</button>
            </div>
        </nav>
    );
}

export default NavBar;