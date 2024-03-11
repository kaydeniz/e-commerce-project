"use client";
import Page from "./main/page";
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { Dispatch, UnknownAction } from "redux";
import {addData} from "@/app/GlobalRedux/Features/dealerships/dealershipsSlice";

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        syncLocalStorageToRedux(dispatch);
    }, []);

    const syncLocalStorageToRedux = (dispatch: Dispatch<UnknownAction>) => {
        const localStorageData = localStorage.getItem('dealershipsList');
        if (localStorageData) {
            const parsedData = JSON.parse(localStorageData);
            parsedData.forEach((item: any) => {
                const parsedItem = JSON.parse(item);
                dispatch(addData(parsedItem));
            });
        }
    };

    return <Page/>;
}

export default Home;