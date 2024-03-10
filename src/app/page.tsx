"use client";
import {SetStateAction, useState} from "react";
import TextInput from "@/components/TextInput/TextInput.client";
import MultiSelectButton from "@/components/MultiSelectButton/MultiSelectButton";
import CustomButton from "@/components/CustomButton/CustomButton";
import SearchableDropdown from "@/components/SearchableDropdown/SearchableDropdown";

export default function Home() {
    const [email, setEmail] = useState('');
    const [selected, setSelected] = useState(false);

    const handleBlur = (e: any) => {
        console.log(e)
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                {/*<form onSubmit={handleSubmit}>
                    <TextInput
                        value={email}
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
                        validationRegex={/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/}
                        errorMessage="Error"
                        onBlur={handleBlur} label={'Name'} icon={"fa-solid fa-user"}/>
                    <TextInput
                        value={email}
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
                        validationRegex={/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/}
                        errorMessage="Error"
                        onBlur={handleBlur} label={'Company'} icon={"fa-solid fa-user"}/>
                    <TextInput
                        value={email}
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
                        validationRegex={/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/}
                        errorMessage="Error"
                        onBlur={handleBlur} label={'Email'} icon={"fa-solid fa-user"}/>

                    <button type="submit">Submit</button>
                </form>*/}
                <SearchableDropdown items={['Option 1', 'Option 2', 'Option 3']} label={"Postcode"}/>
                <CustomButton selected={selected} onSelect={() => setSelected(!selected)} label={'Button 1'}/>
                <MultiSelectButton selected={selected} onSelect={() => setSelected(!selected)} label={'Option 1'}
                                   onSubmit={false}/>
            </div>
        </main>
    );
}
