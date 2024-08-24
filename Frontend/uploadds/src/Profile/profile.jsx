import "./profileCSS.css";
import profile_logo from "../assests/profile_logo.jpg";
import { profileData } from "../hooks/profileData";
import { useEffect,useState } from "react";
import { red } from "@mui/material/colors";


export function Profile({handleShowProfile,handleShowChangePass,handleShowPremium}) {

  const [userData, setUserData] = useState({});

  const handleUserData = async () => {
    try {
      const res = await profileData(localStorage.getItem("token"));
      if (res) {
        setUserData(res[0]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    handleUserData();
  }, []);


  return (
    <div className="profileMain">
      <button id="profileDivClose" onClick={handleShowProfile}>x</button>
      <div className="profileImg">
        <img src={profile_logo} alt="" />
      </div>
      <div className="profileInfoDiv">
        <h2>Hi,{userData.fullname}</h2>
        <h3>{userData.email}</h3>
      </div>
      <div className="dailyUpload">Today Uploads: {userData.uploadCount}</div>
      {
        userData.uploadCount == 15 ? <div className="uploadWarning">
        <h3>⚠️</h3><h3>Oops! Your Daily Free Upload are Exhausted. Be our Premium Member and
        Get unlimited Uploads</h3>
      </div> : null
      }
      <div className="extraInfoDiv">
        <button id="cPBtn" onClick={handleShowChangePass}>Change Passcode</button>
        <button id="pMBtn" onClick={handleShowPremium}>Premium Member</button>
      </div>
    </div>
  );
}
