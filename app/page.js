'use client'; 
import LoginPage from "./LoginPage"; 
import Navbar from "./components/Navbar";
import PopperRibbon from "./components/PopperRibbon";
export default function LandingPage() { 
  const next = new Date().getSeconds() + 20; 
 
  return (
    <> <PopperRibbon/>
  
        <div className="lp-container">
          <Navbar/>
          <section className="hero-section">
            <div className="hero">CENTER OF EXCELLENCE</div>
            <div className="hero-sub">It's time to create your own WIKI</div>
          </section>
            <section className="search-section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search search-icon"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>{" "}
              <input type="text" className="search" placeholder="Search for anything"/>

              <button className="search-btn">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-grip-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                </span>
                <span> Search</span>
              </button>
            </section>
        </div>
        

    </>
  );
}
