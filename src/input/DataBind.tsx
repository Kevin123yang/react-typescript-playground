import { useState } from "react";

export default function DataBind(){
    const [userName, setUser] = useState("John")
    return <>
    
    <input value={userName} onChange={(e)=> setUser(e.target.value)}/>
    <button onClick={()=>setUser("Alien")}> Change name</button>
    </>
}

