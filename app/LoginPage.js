'use client'
import { useState } from "react";

export default function LoginPage() {
    const [login, setLogin] = useState(true);
  return (
    <>
      <div className="login-container"></div>
     {(login) ?  <div className="front"> 
        <form className="inputs">
          <div className="input-controls text-center">
            <h3>Login</h3>
          </div>
          <div className="input-controls">
            <input type="text" className="controls" placeholder="Username" />
          </div>
          <div className="input-controls">
            <input type="text" className="controls" placeholder="Password" />
          </div>
          <div className="input-controls"> 
            <button className="sbt-btn">Submit</button>
          </div>
          <p style={{ padding: "5px" }}> Don't have an account <u onClick={()=>setLogin(false)} className="pointer">Register here</u>  </p>
        </form>
      </div> :
      <div className="back"> 
        <form className="inputs">
          <div className="input-controls text-center">
            <h3>Sign-up</h3>
          </div>
          <div className="input-controls">
            <input type="text" className="controls" placeholder="Name" />
          </div>
          <div className="input-controls">
            <input type="text" className="controls" placeholder="Username" />
          </div>
          <div className="input-controls">
            <input type="text" className="controls" placeholder="Password" />
          </div>
          <div className="input-controls">
            {/* <input type="submit" name="" id=""  className=""/> */}
            <button className="sbt-btn">Register</button>
          </div>
          <p style={{ padding: "5px" }}>
            {" "}
            Already registered <u onClick={()=>setLogin(true)} className="pointer">Login here</u>
          </p>
        </form>
      </div>}
    </>
  );
}
