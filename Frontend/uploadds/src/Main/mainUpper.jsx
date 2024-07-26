import "./main.css";
import { Link } from "react-router-dom";
import logout from "../assests/log-out.png";
import profile_logo from "../assests/profile_logo.jpg";

export const MainUpper = () => {
  return (
    <div className="mainUpper">
      <Link to="/" className="Logo">
        uploadds
      </Link>
      <div>
        <img src={logout} alt=""/>
        <img src={profile_logo} alt=""/>
      </div>
    </div>
  );
};
