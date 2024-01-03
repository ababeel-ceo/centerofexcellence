'use client'
import { useState } from "react";
import '../globals.css';
import { useSnapshot } from "valtio";
import { globalState } from "../store/globalStore";
import { useRouter } from 'next/navigation'
export default function Navbar(){
  const router = useRouter()
  const snap = useSnapshot(globalState); 
  const [addYours, setAddYours] = useState(true); 
  const [isOpen, setIsopen] = useState(false);
    function handleNavigate(tab){
      if(tab.name === "home"){
        router.push("/");
      }else if(tab.name === "coe"){
        router.push("/coe");
      }else if(tab.name === "todo"){
        router.push("/todo")
      }
    }
    function handleAdd(type) {
      if(type === 'addyours'){
        if(snap.isAuthenticate){
          router.push("/coe");
        }else{
          router.push("/login")
        }
      } 
      else if(type === 'logout'){
        globalState.isAuthenticate = false;
        router.push("/");
      }
      }
    
    return(
        <div className="lp-nav"> 
        <div className="nav-branding" style={{color : "white"}}>Center Of Excellence</div>

        <div className="d-flex">
        {(snap.isAuthenticate) && snap.menuTabs.map((tab) => (
          <div  className={`${
            snap.activeTab === tab.name ?( tab.name === "home" ? "active-tab-home " : "active-tab ") : ""
          } float-end  ps-3 pe-3 pointer menu`} 
          onClick={()=>{
            globalState.activeTab = tab.name;
            handleNavigate(tab);
          }} key={tab.id}>{tab.displayName}</div>
        ))}
        </div>
       

      {(!snap.isAuthenticate && !snap.addYours )   ? <button
          className="btn btn-secondary prj-btn"
          onClick={() => handleAdd('addyours')}
        >
          Add Yours
        </button>
        :
        <button
          className="btn btn-secondary prj-btn"
          onClick={() => handleAdd('logout')}
        >
          Logout
        </button>}
      </div>
    )
}