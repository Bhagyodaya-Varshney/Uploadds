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

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error:", errorText);
      throw new Error("Failed to Upload File");
    }

    const data = await res.json();
    toast.success("File Uploaded successfully!");
    return data.fileLink;

  } catch (e) {
    console.error(e);
    toast.error("Internal Error Occur Try after some time 😞");
  }
};