import { React, useState } from "react";
import "./homeCSS.css";
import { Link } from "react-router-dom";
import { Textfield } from "../Component/textField";
import { AuthBtn } from "../Component/authBtn";

import { useNavigate } from "react-router-dom";

import {registerHook} from "../hooks/registerHook.js"
import useLogin from "../hooks/loginHook.js";

export function HomeMidComponent() {
  const [loginBtn, setLoginBtn] = useState(true);

  const navigate = useNavigate();
  

  const [LEmail, setLemail] = useState("");
  const [REmail, setRemail] = useState("");

  const [fullName, setFullName] = useState("");

  const [LPassword, setLpassword] = useState("");
  const [RPassword, setRpassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const { login } = useLogin();


  const loginBtnHandler = () => {
    setLoginBtn(true);
  };
  const registerBtnHandler = () => {
    setLoginBtn(false);
  };

  const registerHandle = async(e) => {
    e.preventDefault();
    const res = await registerHook(fullName,REmail,RPassword,confirmPassword);
    setFullName("");
    setRemail("");
    setRpassword("");
    setConfirmPassword("");
    setLoginBtn(true);
  }

  const loginHandle = async(e) =>{
    e.preventDefault();
    const res = await login(LEmail,LPassword);
    if(res=="User Logged In Successfully"){navigate("/home");}
    setLemail("");
    setLpassword("");
  }

  return (
    <div className="HomeMidComponentMain">
      <div className="HomeMidUpper">
        <Link to="/" id="Logo">
          uploadds
        </Link>

        <div id="uploadBtnDiv">Upload File</div>
      </div>
      <div className="HomeMidLower">
        <div className="HomeMidLowerUpper">
          <div className="HomeMidLowerUpperSloganDiv">
            <h1 id="homeSlogan1">
              <b>Upload, Save</b> and easily <b>Share</b> your files in one
              place.
            </h1>
            <h3 id="homeSlogan2">
              Drag and Drop your file directly on our cloud. Share your files
              securely with us.
            </h3>
          </div>
          <div className="loginDiv">
            <div className="loginUpperNav">
              <Link
                onClick={loginBtnHandler}
                className={loginBtn ? "AuthLink" : "AuthLinkA"}
              >
                Login
              </Link>
              <div className="divider"></div>
              <Link
                onClick={registerBtnHandler}
                className={loginBtn ? "AuthLinkA" : "AuthLink"}
              >
                Create Account
              </Link>
            </div>
            <div className="loginFormDiv">
              {loginBtn ? (
                <form id="LoginForm" onSubmit={loginHandle}>
                  <Textfield
                    id={"LoginEmail"}
                    label={"Email"}
                    variant={"outlined"}
                    width={"95%"}
                    value={LEmail}
                    set={setLemail}
                    type={"email"}
                  />
                  <Textfield
                    id={"LoginPassword"}
                    label={"Password"}
                    variant={"outlined"}
                    width={"95%"}
                    value={LPassword}
                    set={setLpassword}
                    type={"password"}
                  />
                  <Link to="/" id="forgetPass">
                    Forget Password?
                  </Link>
                    <AuthBtn text={"Login"} width={"95%"} height={"3rem"} />
                </form>
              ) : (
                <form id="CreateAccountForm" onSubmit={registerHandle}>
                  <Textfield
                    id={"FullName"}
                    label={"Full Name"}
                    variant={"outlined"}
                    width={"95%"}
                    value={fullName}
                    set={setFullName}
                    type={"text"}
                  />
                  <Textfield
                    id={"RegisterEmail"}
                    label={"Email"}
                    variant={"outlined"}
                    width={"95%"}
                    value={REmail}
                    set={setRemail}
                    type={"email"}
                  />
                  <Textfield
                    id={"RegisterPassword"}
                    label={"Password"}
                    variant={"outlined"}
                    width={"95%"}
                    value={RPassword}
                    set={setRpassword}
                    type={"password"}
                  />
                  <Textfield
                    id={"ConfirmPassword"}
                    label={"Confirm Password"}
                    variant={"outlined"}
                    width={"95%"}
                    value={confirmPassword}
                    set={setConfirmPassword}
                    type={"password"}
                  />{" "}
                    <AuthBtn text={"Create Account"} width={"95%"} height={"3rem"}/>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="HomeMidLowerLower">
          <div className="HomeMidLowerPartDiv">
            <h3>100+</h3>
            <h3>⬇️Downloads</h3>
          </div>
          <div className="HomeMidLowerPartDiv">
            <h3>10+</h3>
            <h3>🙍🏻‍♂️Active Users</h3>
          </div>
          <div className="HomeMidLowerPartDiv">
            <h3>50+</h3>
            <h3>📂Uploaded Files</h3>
          </div>
          <div className="HomeMidLowerPartDiv">
            <h3>00</h3>
            <h3>🗄️Integration</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
