import React from 'react';
import NavBar from "@/components/NavBar/NavBar";
import LandingView from "@/components/LandingView/LandingView";
import InfoView from "@/components/InfoView/InfoView";

function Page() {
    return (
        <div className="relative w-full h-full min-h-screen" style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Car.jpg")',
            backgroundSize: 'contain'
        }}>
            <NavBar/>
            <LandingView/>
            <InfoView/>
        </div>
    );
}

export default Page;