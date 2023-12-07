'use client';
import { useSnapshot } from "valtio";
import { globalState } from "./store/globalStore";
import Link from "next/link"; 
const Sample = () => {
  const globaSnap = useSnapshot(globalState);
  const tabs = ["Home", "ToDo", "Center Of Excellence", "About"];
  function handleActiveTab(tab, i) {
    globalState.activeTab = i;
    if(tab === "Center Of Excellence"){
      <Link href={"/coe"} />
    }
  }

  return (
    <nav
      class="navbar fixed navbar-expand-lg  "
      style={{ "background-color": "#e3f2fd" }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          CENTER OF EXCELLENCE
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav">
            {tabs.map((tab, i) => {
              return(
              <li key={i} class="nav-item" onClick={()=>handleActiveTab(tab,i) }><a class={globaSnap.activeTab === i ? "nav-link active" : "nav-link"} aria-current={globaSnap.activeTab === i ? "page":""} href="#">{tab}</a></li>)
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sample;
