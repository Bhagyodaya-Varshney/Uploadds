import toast from "react-hot-toast";

export const handlePasswordFileDownload = async (DLink, DPassword) => {
  if (!validate(DLink, DPassword)) return;
  try {
    const parts = DLink.split("/");
    const id = parts[parts.length - 1];
    const res = await fetch(`http://localhost:4000/download/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({DPassword}),
    });
    console.log(res,1);
    const data = await res.json();
    toast.success(`${data.message}`);

    return data.message;
  } catch (e) {
    toast.error("Internal Error Occur😞");
    return;
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
