import "./otp.css";
import React, { useState } from "react";
import { Btn } from "../Component/Btn";
import { AuthBtn } from "../Component/authBtn";

export const Otp = ({ handleOtpShow,registerHandle,setUserOtp }) => {

    return (
        <div className="OtpMain">
            <div className="otpDiv">
                <div className="otpHead">
                    <h1>Verify your Account</h1>
                    <button className="closeButton" onClick={handleOtpShow}>
                        ❌
                    </button>
                </div>
                <div className="otpSlogan">
                    <h2>
                        We emailed you a four-digit OTP to ********@gmail.com
                    </h2>
                    <h2>Enter the code to continue</h2>
                </div>
                <div className="otpInput">
                    <input placeholder="4 Digit OTP" onChange={(e)=>setUserOtp(e.target.value)}/>
                </div>
                <AuthBtn text={"Verify"} width={"100%"} height={"2rem"}/>
            </div>
        </div>
    );
};
