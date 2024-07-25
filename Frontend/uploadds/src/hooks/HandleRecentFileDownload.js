import toast from "react-hot-toast";

export const HandleRecentFileDownload = async(id)=>{
    try{
        const res = await fetch(`http://localhost:4000/${id}/recentDownload`,{
            method:"POST",
        })
        if (!res.ok) {
            const errorData = await res.json();
            toast.error(errorData.message || "Internal Error Occurred😞");
            return;
        }
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "uploadds-file"; // You can set the file name dynamically if needed
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    
        toast.success("File Downloading");
    }
    catch(e){toast.error(e);}
}