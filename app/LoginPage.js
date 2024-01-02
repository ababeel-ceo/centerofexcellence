'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { globalAction, globalState } from "./store/globalStore";
import { useSnapshot } from "valtio";

export default function LoginPage() {

    const snap = useSnapshot(globalState);
    const [login, setLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState("");
    const router = useRouter()
 
    useEffect(()=>{
      if(snap.isAuthenticate){
        router.push('/coe');
       }
    },[snap.isAuthenticate])
    const handleSubmit=async (e)=>{
      e.preventDefault(); 
     if(username && password){
      await globalAction.login(username, password);
      setLogin(true);
     }
   
    }

    const handleRegister =async (e)=>{
      e.preventDefault();
      try{
        await globalAction.createUser(username, password, name);
       
      }catch(error){
        alert("Error")
      }
      
    }
  return (
    <>
      <div className="login-container"></div>
     {(login) ?  <div className="front"> 
        <form className="inputs" onSubmit={handleSubmit}>
          <div className="input-controls text-center" >
            <h3>Login</h3>
          </div>
          <div className="input-controls">
            <input type="text" className="controls" name="user" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div className="input-controls">
            <input type="text" className="controls" name="pass" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="input-controls"> 
            <button className="sbt-btn">Submit</button>
          </div>
          <p style={{ padding: "5px 5px 0px 5px" }}> Don't have an account <u onClick={()=>setLogin(false)} className="pointer">Register here</u>  </p>
          <p style={{ padding: "5px" }}> <u onClick={()=>router.push("/")} className="pointer"> Back to home </u>  </p>
        </form>
      </div> :
      <div className="back"> 
        <form className="inputs">
          <div className="input-controls text-center">
            <h3>Sign-up</h3>
          </div>
          <div className="input-controls">
            <input type="text" className="controls" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="input-controls">
            <input type="text" className="controls" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div className="input-controls">
            <input type="text" className="controls" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="input-controls">
            {/* <input type="submit" name="" id=""  className=""/> */}
            <button onClick={(e)=>handleRegister(e)} className="sbt-btn">Register</button>
          </div>
          <p style={{ padding: "5px 5px 0px 5px" }}>
            {" "}
            Already registered <u onClick={()=>setLogin(true)} className="pointer">Login here</u>
          <p style={{ padding: "5px 5px 0px 0px" }}> <u onClick={()=>router.push("/")} className="pointer"> Back to home </u>  </p>
          </p>
        </form>
      </div>}
    </>
  );
}
