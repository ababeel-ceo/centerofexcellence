'use client';
import {useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Confetti from "react-confetti"; 
import LoginPage from "./LoginPage";

export default function LandingPage() {
  const [value, setValue] = useState("");
  const next = new Date().getSeconds() + 20;
  const [openEditor, setopenEditor] = useState(false);

  function handleAdd() {
    setopenEditor(true);
  }

  return (
    <>
      {!openEditor ? (
        <div className="lp-container">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={new Date().getSeconds() === next ? 1 : 0}
          />
          <div className="lp-nav"> 
            <div className="nav-branding">Center Of Excellence</div>

            <button
              className="btn btn-secondary prj-btn"
              onClick={() => handleAdd()}
            >
              Add Yours
            </button>
          </div>
          <section className="hero-section">
            <div className="hero">CENTER OF EXCELLENCE</div>
            <div className="hero-sub">It's time to create your own WIKI</div>
          </section>
          {!openEditor && (
            <section className="search-section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search search-icon"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>{" "}
              <input
  type="text"
  className="search"
  placeholder="Search for anything"
/>

              <button className="search-btn">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-grip-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                </span>
                <span> Search</span>
              </button>
            </section>
          )}
          <section className="editor-section">
            {!openEditor ? (
              <div className="editor"></div>
            ) : (
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                className="editor"
              />
            )}
          </section>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
