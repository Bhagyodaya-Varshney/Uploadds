import React, { useState } from 'react';
import "./forgetPassword.css";
import { Input } from '../Component/Input';
import { Btn } from "../Component/Btn";

export default function ForgetPassword({ handleShowForgetPassDiv, showForgetPassDiv }) {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Send email to backend
            const response = await fetch("http://localhost:4000/forgetPassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Something went wrong");
            }
            const data = await response.json();
            console.log(data.message);
            alert("Password reset email has been sent.");
            handleShowForgetPassDiv(!showForgetPassDiv);
        } catch (error) {
            console.error("Error occurred during fetch operation:", error);
            alert("Failed to send email. Please try again later.");
        }
    };

    return (
        <div className="forgetPasswordContainer">
            <button type="button" onClick={() => handleShowForgetPassDiv(!showForgetPassDiv)} className="closeBtn">
                ❌
            </button>
            <div className="forgetPasswordMain">
                <h2 id="FPH">Forget Password</h2>
                <Input id="FPI" label="Email" variant="outlined" width="95%" value={email} set={setEmail} />
                <Btn text="Reset Password" width="95%" height="40px" onClick={handleSubmit} />
            </div>
        </div>
    );
}
