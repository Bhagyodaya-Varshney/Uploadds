import "./compose.css";
import {Btn} from "../Component/Btn";
import right from "../assests/right.png";
import attach from "../assests/attach.png";

export const Compose = ({ showComposeHandler }) => {
  return (
    <div className="composeMain">
      <div className="composeHead">
        New Uploadds <button onClick={showComposeHandler}>❌</button>
      </div>
      <div className="composeTo">
        To:
        <input type="text" />
      </div>
      <div className="composeSub">
        <input type="text" placeholder="Subject:"/>
      </div>
      <div className="composeBody">
        <textarea name="" id="textArea"></textarea>
      </div>
      <div className="composeBtn">
        <Btn text={"Send"} width={"30%"} height={"80%"}/>
        <img src={attach} alt="" />
        <img src={right} alt="" />
      </div>
    </div>
  );
};
