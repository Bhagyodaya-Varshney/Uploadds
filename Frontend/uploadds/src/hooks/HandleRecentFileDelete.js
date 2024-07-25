import toast from "react-hot-toast";

export const HandleRecentFileDelete = async (id) => {
    console.log(id);
    try {
        const res = await fetch(`http://localhost:4000/${id}/recentDelete`, {
            method: "POST",
        });

        if (!res.ok) {
            const errorMessage = `Error: ${res.status} ${res.statusText}`;
            toast.error(errorMessage);
            throw new Error(errorMessage);
        }

        const data = await res.json();
        console.log(data.message);
        toast.success("File deleted successfully");
        return data.message;
    } catch (e) {
        toast.error(`An error occurred: ${e.message}`);
        console.error(e);
    }
};
