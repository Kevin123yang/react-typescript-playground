import { useState } from "react";
const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };
  
export default function SignUpForm(){
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [inputEmail, setInputEmail] = useState([])
    const [isError,setIsError] = useState(false)
    const  handleOnSubmit = (e)=>{
        e.preventDefault()
        validation()
    }
    const validation = ()=>{
        if (!validateEmail(email)){
            setIsError(true)
            setError("Please input valid email")
            return
        }
        if (inputEmail.includes(email)){
            setIsError(true)
            setError("same email")
            return
        }
        addEmail()
        setIsError(false)
        setError("")
        setEmail("")

    }
    const addEmail = ()=>{
        const newEmail = [...inputEmail, email]
        setInputEmail(newEmail)
    }
    const removeEmail = (name:string)=>{
        const newEmail = inputEmail.filter((email) => email !== name)
        setInputEmail(newEmail)
    }
    
    return <>
    
    {isError && <p> {error}</p>}<label>email</label>
    <form onSubmit={handleOnSubmit}>
    <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <button type="submit"> submit</button>
    </form>
    <ul>
        {inputEmail.map((email) => {
            return <><li>{email}</li> <button onClick={()=>removeEmail(email)}> Remove</button></>
        })}
    </ul>
    </>
}