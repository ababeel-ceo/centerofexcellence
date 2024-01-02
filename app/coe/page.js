"use client";
import "./coe.css"; 
import Navbar from "../components/Navbar";
import CustomEditor from "../components/custom_editor";
import { useState } from "react";

export default function CenterOfExcellence() { 
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [desc, setDesc] = useState("");
 
  return (
    <div className="container">
      <div className="fixed-navbar">
        <Navbar />
      </div>
      <div className="page-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div class="form-floating m-2">
                <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label for="floatingInputGrid">Title</label>
              </div>
              <div class="form-floating m-2">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputValue"
                  placeholder="#-tag"
                  value={tag} onChange={(e)=>setTag(e.target.value)}
                />
                <label for="floatingInputValue"># - Tag</label>
              </div>
              <div class="form-floating m-2">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputValue"
                  placeholder="Description"
                  value={desc} onChange={(e)=>setDesc(e.target.value)}
                />
                <label for="floatingInputValue">Short Description</label>
              </div>
            </div>
            <div className="col-md-12">
              <CustomEditor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
