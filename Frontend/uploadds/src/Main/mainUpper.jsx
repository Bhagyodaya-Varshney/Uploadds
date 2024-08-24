import "./main.css";
import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import logout from "../assests/log-out.png";
import profile_logo from "../assests/profile_logo.jpg";
import { useAuth } from "../context/authContext";
import { Profile } from "../Profile/profile";
import { ChangePass } from "../ChangePass/changePass";
import { PremiumMem } from "../PremiumMember/premiumMem";



export const MainUpper = () => {
  const [searchText, setSearchText] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [showChangePass, setShowChangePass] = useState(false);
  const [showPremium, setShowPremium] = useState(false);

  const handleShowChangePass = () => {setShowChangePass(!showChangePass);}
  const handleShowPremium = () => {setShowPremium(!showPremium);}

  const {removeTokenInLS} = useAuth(); 

  const handleClear = () => {
    setSearchText("");
  };
  const navigate = useNavigate();
    const logoutFunc = () => {
        navigate("/");
        removeTokenInLS();
  }

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="mainUpper">
      <Link to="/" className="Logo">
        uploadds
      </Link>
      <div className="mainSearch">
        <img src="https://img.icons8.com/ios/452/search--v1.png" alt="" />
        <input
          type="text"
          placeholder="Search Uploadds"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText && (
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/macos-close.png"
            alt="clear icon"
            className="clearIcon"
            onClick={handleClear}
            style={{ cursor: "pointer" ,margin:"0 10px"}}
          />
        )}
      </div>
      <div className="mainIcon">
        <img src={logout} alt="" onClick={logoutFunc}/>
        <img src={profile_logo} alt="" onClick={handleShowProfile}/>
      </div>
      {
        showProfile && <Profile handleShowProfile={handleShowProfile} handleShowChangePass={handleShowChangePass} handleShowPremium={handleShowPremium}/>
      }
      {
        showChangePass && <ChangePass handleShowChangePass={handleShowChangePass}/>
      }
      {
        showPremium && <PremiumMem handleShowPremium={handleShowPremium}/>
      }
    </div>
  );
};
