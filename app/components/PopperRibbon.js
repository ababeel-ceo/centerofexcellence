'use client'
import dynamic from "next/dynamic";
const Confetti = dynamic(()=>{
    return import('react-confetti')
  },{ssr:false}) 

const next = new Date().getSeconds() + 20; 
export default function PopperRibbon(){
    return (
        <Confetti
            width={2000}
            height={400}
            recycle={new Date().getSeconds() === next ? 1 : 0}
          />
    )
}