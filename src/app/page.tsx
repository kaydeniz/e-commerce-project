"use client";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from "@/pages/Main";

export default function Home() {

    // @ts-ignore
    return (
        <Router>
            <Routes >
                <Route path="/" Component={Main} />
            </Routes>
        </Router>
    );
}
