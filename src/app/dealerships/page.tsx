"use client";
import React, {useState} from 'react';
import NavBar from "@/components/NavBar/NavBar";
import ListView from "@/components/ListView/ListView";
import SearchView from "@/components/SearchView/SearchView";

function Page() {
    const mockData = [
        {
            name: 'John Doe',
            company: 'Bumper',
            mobile_phone: '1234567890',
            email_address: 'john.doe@example.com',
            postcode: '12345',
            pay_later: 'Yes',
            pay_now: 'No',
        },
        {
            name: 'Jane Doe',
            company: 'Apple',
            mobile_phone: '0987654321',
            email_address: 'jane.doe@example.com',
            postcode: '67890',
            pay_later: 'No',
            pay_now: 'Yes',
        },
        {
            name: 'Bob Smith',
            company: 'Amazon',
            mobile_phone: '1122334455',
            email_address: 'bob.smith@example.com',
            postcode: '54321',
            pay_later: 'Yes',
            pay_now: 'Yes',
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = mockData.filter(item => item.company.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="relative w-full h-full min-h-screen bg-5A698C">
            <NavBar/>
            <SearchView value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <ListView list={filteredData}/>
        </div>
    );
}

export default Page;