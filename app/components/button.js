'use client'
export default function Button({msg,styles, onClick}){

    return(
        <button className={styles} onClick={()=>{onClick();}}>
            {msg}
        </button>
    )
}