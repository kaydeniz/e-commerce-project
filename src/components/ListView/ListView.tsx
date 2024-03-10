import React from 'react';

interface FormData {
    name: string;
    company: string;
    mobile_phone: string;
    email_address: string;
    postcode: string;
    pay_later: string;
    pay_now: string;
}

interface ListViewProps {
    list: FormData[];
}

function ListView({list}: ListViewProps) {
    return (
        <div className="p-10 flex justify-center items-center">
            <div className="w-full max-w-2xl">
                {list.map((item, index) => (
                    <div className="bg-white p-5 rounded-40 shadow-md mb-4" key={index}>
                        <p className="font-oswald font-bold text-21px">{item.name}</p>
                        <hr className="border-0.5 border-CDD2DC"/>
                        <div className="flex justify-between pb-2 pt-2">
                            <p className="font-oswald font-bold text-16px">Company</p>
                            <p className="font-open-sans font-light text-16px">{item.company}</p>
                        </div>
                        <hr className="border-0.5 border-CDD2DC"/>
                        <div className="flex justify-between pb-2 pt-2">
                            <p className="font-oswald font-bold text-16px">Mobile Phone Number</p>
                            <p className="font-open-sans text-16px">{item.mobile_phone}</p>
                        </div>
                        <hr className="border-0.5 border-CDD2DC"/>
                        <div className="flex justify-between pb-2 pt-2">
                            <p className="font-oswald font-bold text-16px">Email Address</p>
                            <p className="font-open-sans text-16px">{item.email_address}</p>
                        </div>
                        <hr className="border-0.5 border-CDD2DC"/>
                        <div className="flex justify-between pb-2 pt-2">
                            <p className="font-oswald font-bold text-16px">Postcode</p>
                            <p className="font-open-sans text-16px">{item.postcode}</p>
                        </div>
                        <hr className="border-0.5 border-CDD2DC"/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListView;