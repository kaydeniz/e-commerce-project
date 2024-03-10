import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWrench} from "@fortawesome/free-solid-svg-icons";
import MultiSelectButton from "@/components/MultiSelectButton/MultiSelectButton";

// @ts-ignore
function MultiSelectView({setPaymentOptions, paymentOptions}) {

    return (
        <div className="relative mb-4">
            <div className="flex items-center mb-1">
                <FontAwesomeIcon icon={faWrench} style={{color: '#FF733C', marginRight: '5px'}}/>
                <label className="font-bold text-16px font-sans text-1B1B1B">What Services are you interested
                    in?</label>
            </div>
            <p className="text-14px font-sans text-737373 mb-2">Please select the services you’re interested in offering
                your customers</p>
            <MultiSelectButton label="PayLater"
                               selected={paymentOptions.pay_later === true}
                               onSelect={() => setPaymentOptions({
                                   pay_later: !paymentOptions.pay_later,
                                   pay_now: false
                               })}
                               isError={paymentOptions.pay_later === false && paymentOptions.pay_now === false}/>
            <MultiSelectButton label="PayNow"
                               selected={paymentOptions.pay_now === true}
                               onSelect={() => setPaymentOptions({pay_later: false, pay_now: !paymentOptions.pay_now})}
                               isError={paymentOptions.pay_later === false && paymentOptions.pay_now === false}/>
        </div>
    );
}

export default MultiSelectView;