import toast from 'react-hot-toast';

export const registerHook = async(fullname,email,password,confirmPassword) =>{

    const inputError = validate(fullname,email,password,confirmPassword);
    if(!inputError) return;
    try{
        const res = await fetch("http://localhost:4000/register",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({fullname,email,password,confirmPassword})
        })
        const data = await res.json();
        toast.success(`${data.message}`);

        return data.message;
    }
    catch(e){
        console.log(e);
        toast.error("Internal Error Occur😞");
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