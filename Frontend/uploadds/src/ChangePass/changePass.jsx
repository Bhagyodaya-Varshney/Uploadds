import "./changePass.css";
import { useState } from "react";
import {Btn} from "../Component/Btn";
import { Input } from "../Component/Input";

export const ChangePass = ({ handleShowChangePass }) => {

    const [lastPass, setLastPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmNewPass, setConfirmNewPass] = useState("");



  return (
    <div className="changePassMain">
      <div className="changePass">
        <div className="changePassHead">
          <h2>Change Passcode</h2>
          <button id="changePassDivClose" onClick={handleShowChangePass}>
            x
          </button>
        </div>
        <div className="changePassInputDiv">
            <Input label={"Enter Last Password"} width={"100%"} value={lastPass} set={setLastPass} type={"password"}/>
            <Input label={"Enter New Password"} width={"100%"} value={newPass} set={setNewPass} type={"password"}/>
            <Input label={"Enter Confirm New Password"} width={"100%"} value={confirmNewPass} set={setConfirmNewPass} type={"password"}/>
        </div>
        <Btn text="Change Passcode" width={"90%"}/>
      </div>
    </div>
  );
};
