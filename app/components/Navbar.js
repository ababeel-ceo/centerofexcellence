'use client'

import { useState } from "react";
import '../globals.css';
export default function Navbar(){
  const [openEditor, setopenEditor] = useState(false);
    function handleAdd() {
        setopenEditor(true);
      }
    
    return(
        <div className="lp-nav"> 
        <div className="nav-branding" style={{color : "white"}}>Center Of Excellence</div>

        <button
          className="btn btn-secondary prj-btn"
          onClick={() => handleAdd()}
        >
          Add Yours
        </button>
      </div>
    )
}