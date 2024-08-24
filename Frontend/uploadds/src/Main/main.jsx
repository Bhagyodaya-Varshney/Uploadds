import "./main.css";
import { MainUpper } from "./mainUpper";
import { MainLower } from "./mainLower";
import { Profile } from "../Profile/profile";





export const Main = () =>{
    return <div className="mainDiv">
        <MainUpper/>
        <MainLower/>
    </div>
}