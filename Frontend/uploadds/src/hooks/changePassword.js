import toast from "react-hot-toast";


export const changePassHook = async(oldPass,newPass,confirmNewPass,token) =>{
    if(!validate(oldPass,newPass,confirmNewPass)) return;
    try{
        const res = await fetch("http://localhost:4000/changePassword",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({oldPass,newPass,token})
        });
        const data = await res.json();
        toast.success(`${data.message}`);

        return data.message;
    }
    catch(e){
        toast.error("Internal Error Occur 😞");
    }
}

const validate = (oldPass,newPass,confirmNewPass) =>{
    if(!oldPass){
        toast.error("Please Enter Your old Password 😞");
        return false;
    }
    if(!newPass){
        toast.error("Please Enter Your New Password 😞");
        return false;
    }
    if(!confirmNewPass){
        toast.error("Please Enter Your Confirm New Password 😞");
        return false;
    }
    if(newPass != confirmNewPass){
        toast.error("New and Confirm New Password Not Match 😞")
    }
    return true;
}