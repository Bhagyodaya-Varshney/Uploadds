import "./main.css";
import { MainUpper } from "./mainUpper";
import { MainLower } from "./mainLower";





export const Main = () =>{
    return <div className="mainDiv">
        <MainUpper/>
        <MainLower/>
    </div>
}