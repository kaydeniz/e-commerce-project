import React from 'react';
import NavBar from "@/components/NavBar/NavBar";
import LandingView from "@/components/LandingView/LandingView";
import InfoView from "@/components/InfoView/InfoView";

function Main() {
    return (
        <div>
            <NavBar/>
            <LandingView/>
            <InfoView/>
        </div>
    );
}

export default Main;