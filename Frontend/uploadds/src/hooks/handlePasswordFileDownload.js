import toast from "react-hot-toast";

export const handlePasswordFileDownload = async (DLink, DPassword) => {
  if (!validate(DLink, DPassword)) return;

  try {
    const parts = DLink.split("/");
    const id = parts[parts.length - 1];

    const res = await fetch(`http://localhost:4000/download/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ DPassword }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      toast.error(errorData.message || "Internal Error Occurred😞");
      return;
    }
    console.log(res);
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
  } catch (e) {
    toast.error("Internal Error Occurred😞");
  }
};

function validate(DLink, DPassword) {
  if (!DLink) {
    toast.error("Please Enter Download Link😞");
    return false;
  }
  if (!DPassword) {
    toast.error("Please Enter Download Password😞");
    return false;
  }
  return true;
}
