"use client";
import "./coe.css";
import dynamic from "next/dynamic";
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  import("react-quill/dist/quill.snow.css");
}
import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import CustomEditor from "../components/custom_editor";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
export default function CenterOfExcellence() {
  const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false,
    //  loading: () => <p>Loading ...</p>,
  });
  const [value, setValue] = useState("");
  const quillDataRef = useRef(null);

  const handleSave = () => {
    alert(JSON.stringify(value.getText()));
  };
  return (
    <>
      <div className="fixed-navbar">
        <Navbar />
      </div>

      <div className="page-container ">
        <div className="coe-container">
          <div className="card-container">
             <button
              className="d-float float-end btn btn-primary mb-2"
              onClick={() => handleSave()}
            >
              Save
            </button>
            <div className="card-header">
              <div className="card-title">
                <label htmlFor="">Title</label>
                <input type="text" placeholder="Title" />
              </div>
              <div className="card-tag">
                <label htmlFor="">Tag</label>
                <input type="text" placeholder="# Tag" />
              </div>
            </div>
            <label htmlFor="">Enter Your COE</label>

            <div className="card-content-container">
              {/* <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                onBlur={(e)=>setValue()}
                className="editor"
                modules={modules}
              /> */}
            </div>
            {JSON.stringify(value)}
            <CustomEditor/>
          </div>
        </div>
      </div>
    </>
  );
}
