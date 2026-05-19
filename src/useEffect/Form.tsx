import { useState, useRef, useEffect } from "react";

export default function Form() {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("kevin");
  const [checkUpper, setCheckUpper] = useState(false);
  const showInfo = (
    <>
      <label>
        {" "}
        Enter your name
        <MyInput
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input checked={checkUpper} onChange={e=>setCheckUpper(e.target.checked)}type="checkbox" /> make it uppercase
        <br/>
        {checkUpper? `Hello,${userName.toUpperCase()}`  : `Hello,${userName}`}
      </label>
      
    </>
  );
  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>
        {" "}
        {show ? "Hide " : "Show "} form
      </button>
      <br />
      {show && showInfo}
   
    </>
  );
}

export function MyInput({ value, onChange }) {
  const ref = useRef(null);
  // ref.current.focus()
  useEffect(()=>{
    ref.current.focus()
  },[])
  return <input ref={ref} value={value} onChange={onChange} />;
}
