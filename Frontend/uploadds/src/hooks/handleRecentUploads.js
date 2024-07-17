import toast from "react-hot-toast";


export const handleRecentUpload = async(token) =>{
    try{
        const res = await fetch("http://localhost:4000/handleRecentUpload",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({token}),
        })
        const data = await res.json();
        return data.data;

    }
    catch(e){
        toast.error("Internal Error Occur😞");
        return;
    }
}