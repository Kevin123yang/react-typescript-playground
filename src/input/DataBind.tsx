import { useState } from "react";

export default function DataBind(){
    const [user, setUser] = useState("John")
    return <>
    
    <input value={user} onChange={(e)=> setUser(e.target.value)}/>
    <button onClick={()=>setUser("Alien")}> Change name</button>
    </>
}

