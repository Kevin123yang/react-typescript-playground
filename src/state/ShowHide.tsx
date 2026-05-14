import { useState } from "react";

export function ShowHide(){
    const [hide, setHide] = useState(false)
    const toggleHide = ()=>{
        setHide((prev)=> !prev)
    }
    return <>
    <button onClick={toggleHide}> show</button>
    <div>Status: {hide? "Shown" : "Hide"}</div>
    {hide && <Show />}
    </>
}
function Show(){
    return <div> I am here</div>
}