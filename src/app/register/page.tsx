"use client";
import React, {useState} from 'react';
import NavBar from "@/components/NavBar/NavBar";
import FormView from "@/components/FormView/FormView";
import TextInput from "@/components/TextInput/TextInput.client";
import {REGEX} from "@/constants/regex";
import {postcodeList} from "@/constants/postcodeList";
import {faUser, faBuilding, faMobileAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import SearchableDropdown from "@/components/SearchableDropdown/SearchableDropdown";
import MultiSelectView from "@/components/FormView/MultiSelectView";
import CustomButton from "@/components/CustomButton/CustomButton";
import {registerUser} from "@/api/register";
import {useDispatch} from "react-redux";
import {addData} from "@/app/GlobalRedux/Features/dealerships/dealershipsSlice";
import {useRouter} from "next/navigation";

function Page() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [mobilePhoneNumber, setMobilePhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [paymentOptions, setPaymentOptions] = useState({pay_later: false, pay_now: false});
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (!REGEX.NAME.test(name) || !REGEX.COMPANY.test(company) || !REGEX.MOBILE_PHONE_NUMBER.test(mobilePhoneNumber) || !REGEX.EMAIL_ADDRESS.test(emailAddress)) {
            alert('Please fill in the form correctly.');
            return;
        }

        const formData = {
            name,
            company,
            mobile_phone: mobilePhoneNumber,
            email_address: emailAddress,
            postcode,
            pay_later: paymentOptions.pay_later ? 'true' : 'false',
            pay_now: paymentOptions.pay_now ? 'true' : 'false'
        };

        try {
            const response = await registerUser(formData);
            dispatch(addData(formData))
            const localStorageData = localStorage.getItem('dealershipsList');
            const arr = localStorageData ? JSON.parse(localStorageData) : [];
            arr.push(JSON.stringify(formData));
            localStorage.setItem('dealershipsList', JSON.stringify(arr));
            console.log(response);
            router.push('/dealerships');
        } catch (error) {
            console.error('Error during registration', error);
        }
    };

    return (
        <div className="relative w-full h-full min-h-screen bg-5A698C">
            <NavBar/>
            <FormView>
                <form onSubmit={handleSubmit}>
                    <TextInput name="name" label="Name" type="text" icon={faUser} regex={REGEX.NAME} value={name}
                               onChange={(e: {
                                   target: { value: React.SetStateAction<string>; };
                               }) => setName(e.target.value)} errorMessage={undefined}/>
                    <TextInput name="company" label="Company" type="text" icon={faBuilding} regex={REGEX.COMPANY}
                               value={company}
                               onChange={(e: {
                                   target: { value: React.SetStateAction<string>; };
                               }) => setCompany(e.target.value)} errorMessage={undefined}/>
                    <TextInput name="mobilePhoneNumber" label="Mobile Phone Number" type="tel" icon={faMobileAlt}
                               regex={REGEX.MOBILE_PHONE_NUMBER} value={mobilePhoneNumber}
                               onChange={(e: {
                                   target: { value: React.SetStateAction<string>; };
                               }) => setMobilePhoneNumber(e.target.value)} errorMessage={undefined}/>
                    <TextInput name="emailAddress" label="Email Address" type="email" icon={faEnvelope}
                               regex={REGEX.EMAIL_ADDRESS} value={emailAddress}
                               onChange={(e: {
                                   target: { value: React.SetStateAction<string>; };
                               }) => setEmailAddress(e.target.value)} errorMessage={undefined}/>
                    <SearchableDropdown label={"Postcode"} items={postcodeList} onSelect={setPostcode}/>
                    <MultiSelectView setPaymentOptions={setPaymentOptions} paymentOptions={paymentOptions}/>
                    <div className="relative w-full mb-3">
                        <CustomButton type="submit" label="Register" selected={undefined} onSelect={undefined}
                                      className="w-full"/>
                    </div>
                    <div className="pt-4 flex justify-center items-center">
                        <p className="text-000000 text-16px font-open-sans">Already registered? <span
                            className="text-32BE50">Login</span></p>
                    </div>
                </form>
            </FormView>
        </div>
    );
}

export default Page;