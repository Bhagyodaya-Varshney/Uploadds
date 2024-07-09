import toast from "react-hot-toast";

export const handleFilePassword = async (file, password, token) => {
  const success = handleInputError(password);
  if (!success) return;
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("password", password);
    formData.append("token",token);

    const res = await fetch("http://localhost:4000/passUpload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error:", errorText);
      throw new Error("Failed to Generate Share Link");
    }

    const data = await res.json();
    toast.success("Share Link Generated successfully!");
    return data.fileLink;

  } catch (e) {
    console.error(e);
    toast.error("Internal Error Occur Try after some time 😞");
  }
};

function handleInputError(password) {
  if (!password) {
    toast.error("Please Enter Password");
    return false;
  }
  return true;
}
