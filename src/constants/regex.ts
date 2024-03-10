// src/constants/regex.ts
export const REGEX = {
    NAME: /^[a-zA-Z0-9\s]{1,255}$/,
    COMPANY: /^.{1,255}$/,
    MOBILE_PHONE_NUMBER: /^0(\s*)(7)(\s*)(\d(\s*)){9}$/,
    EMAIL_ADDRESS: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    POSTCODE: /^[a-zA-Z0-9\s]{1,30}$/,
    PAY_LATER: /^(true|false)$/,
    PAY_NOW: /^(true|false)$/
};