// src/api/register.ts
import axios from 'axios';

const ENDPOINT = 'https://demo.bumper.co/core/dealership/reg/sandbox';

interface FormData {
    name: string;
    company: string;
    mobile_phone: string;
    email_address: string;
    postcode: string;
    pay_later: string;
    pay_now: string;
}

export const registerUser = async (formData: FormData) => {
    try {
        const response = await axios.post(ENDPOINT, formData);
        return response.data;
    } catch (error) {
        console.error('Error during API call', error);
        throw error;
    }
};
