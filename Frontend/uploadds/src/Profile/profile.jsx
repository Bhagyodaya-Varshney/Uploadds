import { React, useState } from "react";
import "./profileCSS.css";
import user from "../assests/user.png";

import { Input } from "../Component/Input";
import { Btn } from "../Component/Btn";

import {motion} from "framer-motion";

import { changePassHook } from "../hooks/changePassword";

export function Profile({ userProfileData1 }) {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const [showChangePassDiv, setShowChangePassDiv] = useState(false);
  const changePassDivFun = () => {
    setShowChangePassDiv(!showChangePassDiv);
  };

  const changePassword = async () => {
    const res = await changePassHook(
      oldPass,
      newPass,
      confirmNewPass,
      localStorage.getItem("token")
    );
    if (res === "Password updated successfully") {
      setShowChangePassDiv(!showChangePassDiv);
    }
  };
  return (
    <motion.div
      className="profileDiv"
      initial={{ opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 id="dashEndBarHead">User Profile🙎‍♂️</h2>
      <div className="profileMainDiv">
        <div className="memberProfileDiv">
          <div className="profileImg">
            <img src={user} alt="" />
          </div>
          <h2 id="dashEndBarHead">User Details</h2>
          <h3>User: {userProfileData1.fullname}</h3>
          <h3>Email: {userProfileData1.email}</h3>
          <div className="passDiv">
            <h3>Password:</h3>
            <button onClick={changePassDivFun}>Update Passcode</button>
          </div>
          {showChangePassDiv ? (
            <div className="changePassDiv">
              <Input
                id={"tf1"}
                label={"Old Password"}
                variant={"outlined"}
                type={"password"}
                width={"100%"}
                value={oldPass}
                set={setOldPass}
              />
              <Input
                id={"tf2"}
                label={"New Password"}
                variant={"outlined"}
                type={"password"}
                width={"100%"}
                value={newPass}
                set={setNewPass}
              />
              <Input
                id={"tf3"}
                label={"Confirm New Password"}
                variant={"outlined"}
                type={"password"}
                width={"100%"}
                value={confirmNewPass}
                set={setConfirmNewPass}
              />
              <Btn
                text={"Update Password"}
                width={"100%"}
                height={"20%"}
                onClick={changePassword}
              />
            </div>
          ) : null}
        </div>
        <div className="memberInfoDiv">
          <h2 id="dashEndBarHead">Upload Count</h2>
          <h3>{userProfileData1.uploadCount} Uploads Today</h3>
          {userProfileData1.uploadCount > 15 ? (
            <div id="limitWarning">
              <h3>⚠️</h3>
              Upload Limit Exceeded, Upgarde to Premium to Increase the Limit
            </div>
          ) : null}
          <div className="paymentCard">
            <h2>uploadds Premium</h2>
            <div className="mainPaymentCard">
              <div id="a">
                <h3>🟡 Unlimited Uploads Per Day</h3>
                <h3>🟡 Any 1 device at a time</h3>
              </div>
              <div className="monthPrice">
                <h3>1 Month</h3>
                <h2>
                  <sup>₹</sup>29
                </h2>
              </div>
            </div>
            <Btn text={"Continue and Pay"} width={"100%"} height={"10%"} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
