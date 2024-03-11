"use client";
import React, {useState} from 'react';
import NavBar from "@/components/NavBar/NavBar";
import ListView from "@/components/ListView/ListView";
import SearchView from "@/components/SearchView/SearchView";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@/app/GlobalRedux/store";
import {addData} from "@/app/GlobalRedux/Features/dealerships/dealershipsSlice";

function Page() {
    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.dealerships.list);
    if (list.length === 0) {
        const localStorageData = localStorage.getItem('dealershipsList');
        if (localStorageData) {
            const parsedData = JSON.parse(localStorageData);
            parsedData.forEach((item: any) => {
                const parsedItem = JSON.parse(item);
                dispatch(addData(parsedItem));
            });
        }
    }
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = list.filter((item: { company: string; }) => item.company.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="relative w-full h-full min-h-screen bg-5A698C">
            <NavBar/>
            <SearchView value={searchTerm} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSearchTerm(e.target.value)}/>
            <ListView list={filteredData}/>
        </div>
    );
}

export default Page;