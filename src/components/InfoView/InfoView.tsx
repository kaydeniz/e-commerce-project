import React from 'react';
import CustomButton from "@/components/CustomButton/CustomButton";
import Link from 'next/link';

function InfoView() {

    const list = [{
        title: "FIX IT",
        description: "Your customers bring their vehicle to you. You repair and service the car. Everything just like it works right now."
    }, {
        title: "SPLIT IT",
        description: "When the customer gets their bill or quote, your customer chooses the option to ‘PayLater’ and in just a few clicks they’ve been approved and have paid."
    }, {
        title: "SORTED",
        description: "You and your customer part ways happy. You’re paid upfront, directly from Bumper, the customer repays Bumper over their chosen payment plan."

    }]

    return (
        <div className="flex flex-col lg:flex-row w-full bg-white p-8 lg:p-48">
            <div className="lg:w-1/2 flex flex-col items-start">
                <img src="/BumperLogo.svg" alt="Bumper Logo" style={{height: '19px', width: '74.82px'}}/>
                <h1 className="text-1B1B1B text-58px font-oswald font-bold">PAYLATER</h1>
                <p className="text-1B1B1B text-21px font-open-sans font-normal pt-4">
                    Give customers more flexibility at checkout, online and in store. Let them spread the cost with
                    interest-free monthly payments.
                </p>
                <p className="text-FF733C text-38px font-universalsans font-normal pt-4">
                    No risk to your business.
                </p>
                <p className="text-FF733C text-38px font-universalsans font-normal pt-4">
                    No worries for your customers.
                </p>
                <p className="text-1B1B1B text-16px font-open-sans font-bold pt-4">
                    It’s as simple as:
                </p>
                <div className="pt-4">
                    {list.map((item, index) => (
                        <div key={index} className="flex w-full mb-3">
                            <div className="w-1/12">
                                <div
                                    className="flex items-center justify-center w-8 h-8 rounded-full bg-FF733C border-1 border-1B1B1B mr-4">
                                    <span className="text-1B1B1B font-bold">{index + 1}</span>
                                </div>
                            </div>
                            <div className="w-11/12">
                                <div>
                                    <h2 className="text-1B1B1B text-21px font-open-sans font-bold">{item.title}</h2>
                                    <p className="text-1B1B1B text-16px font-open-sans">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-4">
                    <Link href="/register">
                        <CustomButton label="Register Your Interest" selected={undefined} onSelect={undefined}
                                      type={undefined} className={undefined}/>
                    </Link>
                </div>
            </div>
            <div className="lg:w-1/2 pt-8 md:pt-0 flex justify-center sm:p-0 md:p-0 lg:p-20 xl:p-40">
                <img src="/Phone.png" alt="Phone" className="w-full h-auto lg:max-w-400 lg:max-h-400"/>
            </div>
        </div>
    );
}

export default InfoView;
