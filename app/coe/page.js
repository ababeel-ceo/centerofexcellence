"use client"
import { useSnapshot } from "valtio";
import Navbar from "../Navbar"; 
import CenterOfExcellence from './CenterOfExcellence';
import { globalState } from "../store/globalStore";
export default function CoePage(){
    const globalSnap = useSnapshot(globalState);
    return(
        <div className="">
            <div className="row">
                <div className="col-sm-12">
                <Navbar/> 
                </div>
                <div className="col-sm-12"></div>
            </div>
          
            
        </div>
    )
}