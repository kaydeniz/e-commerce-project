// src/components/LandingView/LandingView.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CustomButton from "@/components/CustomButton/CustomButton";

function LandingView() {
    return (
        <div className="relative w-full h-full min-h-screen" style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Car.jpg")',
            backgroundSize: 'cover'
        }}>
            <div className="absolute inset-0 flex flex-col justify-start items-start px-16 md:px-20 pt-8">
                <div className="flex items-center space-x-2">
                    <h1 className="text-white text-32px font-bold">Excellent</h1>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="bg-green-500 rounded px-2 py-1">
                            <FontAwesomeIcon icon={faStar} className="text-white"/>
                        </div>
                    ))}
                    <FontAwesomeIcon icon={faStar} className="text-green-500"/>
                    <p className="text-white font-universalsans">Trustpilot</p>
                </div>
                <h1 className="text-white text-77px font-bold">BECOME A BUMPER APPROVED</h1>
                <h1 className="text-white text-77px font-bold">DEPENDABLE DEALERSHIP</h1>
                <p className="text-white text-21px font-open-sans">Join our network of 3,000+ garages and dealerships
                    who already </p>
                <p className="text-white text-21px font-open-sans">offer Bumper to their customers.</p>
                <div className="pt-4">
                    <CustomButton label="Register Your Interest" selected={undefined} onSelect={undefined}
                                  type={undefined} className={undefined}/>
                </div>
                <div className="pt-4">
                    <p className="text-white text-16px font-open-sans">Already registered? <span
                        className="text-32BE50">Login</span></p>
                </div>
            </div>
        </div>
    );
}

export default LandingView;