'use client' 
import { useRouter } from 'next/navigation'
import LandingPage from './LandingPage';

export default function coe() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/coe');
  };

  return (
    <LandingPage/>
    // <div className='login-container'>
    //   <div className="d-flex flex-column p-3 text-center back-clr"> 
    //     <h3>Login</h3> 
    //     <input type="text" className='p-2 m-2' placeholder='Username'/>
    //     <input type="text" className='p-2 m-2' placeholder='Password'/>
    //     <button className='primary-clr p-2 m-2' onClick={()=>handleClick()}>Submit</button>
    //   </div>
    // </div>
  );
}
