import "./main.css";
import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import logout from "../assests/log-out.png";
import profile_logo from "../assests/profile_logo.jpg";
import { useAuth } from "../context/authContext";


export const MainUpper = () => {
  const [searchText, setSearchText] = useState("");

  const {removeTokenInLS} = useAuth(); 

  const handleClear = () => {
    setSearchText("");
  };
  const navigate = useNavigate();
    const logoutFunc = () => {
        navigate("/");
        removeTokenInLS();
    }

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
        <img src={profile_logo} alt="" />
      </div>
    </div>
  );
};
