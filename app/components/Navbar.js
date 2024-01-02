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
  const menuTabs = ['Home', 'Coe', 'Todo']
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
        {(snap.isAuthenticate ) && menuTabs.map((tab) => (
          <div  className={`${
            snap.activeTab === tab ? "hover-tab " : ""
          }float-end  ps-3 pe-3 pointer menu`} onClick={()=>globalState.activeTab = tab} key={tab}>{tab}</div>
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