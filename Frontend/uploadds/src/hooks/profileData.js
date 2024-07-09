export const profileData = async(token) =>{
    try{
        const res = await fetch("http://localhost:4000/userProfile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({token}),
          });
        const data = await res.json();
        return data.user;
    }
    catch(e){console.log(e)}
}