import toast from "react-hot-toast";

export const handleFileUpload = async (file,token) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("token",token);

    const res = await fetch("http://localhost:4000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    toast.success(`${data.message}`);
    return data.fileLink;

  } catch (e) {
    console.error(e);
    toast.error("Internal Error Occur Try after some time 😞");
  }
};