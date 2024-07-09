// loginHook.js
import toast from "react-hot-toast";
import { useAuth } from "../context/authContext";

const useLogin = () => {
  const { storeTokenInLS } = useAuth();

  const login = async (email, password) => {
    const success = handleInputErrors(email, password);
    if (!success) return;

    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        storeTokenInLS(data.token);
        toast.success(`${data.message}`);
        return data.message;
      } else {
        const errorData = await res.json();
        toast.error(`${errorData.message}`);
      }
    } catch (e) {
      toast.error("Internal Error Occur Try after some time 😞");
      console.log(e);
    }
  };

  return { login };
};

function handleInputErrors(email, password) {
  if (!email) {
    toast.error("Please enter Email😞");
    return false;
  }
  if (!password) {
    toast.error("Please enter Password😞");
    return false;
  }
  return true;
}

export default useLogin;
