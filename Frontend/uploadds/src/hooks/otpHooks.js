import toast from "react-hot-toast";

export const otpHook = async(fullname,email,password,confirmPassword,setOtpShow,otpShow) =>{
    const inputError = validate(fullname,email,password,confirmPassword);
    if(!inputError) return "error";
    try {
        const res = await fetch("http://localhost:4000/otp", {
            method: "POST",
            body: JSON.stringify({ email}),
            headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
            setOtpShow(!otpShow);
            const data = await res.json();
            toast.success(data.message);
            return data.otp; // You can use this message to show a notification to the user
        } else {
            const errorData = await res.json();
            toast.error("Failed to send OTP:", errorData.message);
            return;
        }
    }
    catch (error) {
        toast.error("Error sending OTP:", error);
    }

}

const validate = (fullname,email,password,confirmPassword) =>{
    if(!fullname){
        toast.error("Please Enter FullName😞");
        return false;
    }
    if(!email){
        toast.error("Please Enter Email😞");
        return false;
    }
    if(!password){
        toast.error("Please Enter Password😞");
        return false;
    }
    if (password.length < 5) {
        toast.error("Password must be at least 5 characters long 😞");
        return false;
      }
    if(!confirmPassword){
        toast.error("Please Enter Confirm Password😞");
        return false;
    }
    if(password != confirmPassword){
        toast.error("Password not match to Confirm Password😞");
        return false;
    }
    return true;
}