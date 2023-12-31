import { useContext, useEffect, useState } from "react"
import PageHemet from "../../components/Page_title/PageHemet"
import MsgContext from "../../context/MsgContext"
import CountContext from "../../context/CountContext"


const Team = () => {
const {age,setAge}= useContext(MsgContext)
 
const {count, setCount}= useContext(CountContext)
useEffect(()=>{
console.log("Hi this for checking useEffect huge")
  
},[age,count]);




  return (
    <div>
      <PageHemet title="Team"/>
     <div className="container">
      <h1>Team</h1>
      <h3>{age}</h3>
      <br />
      <br />
      <br />
      <div className="container">
        <input type="text" placeholder="age" value={age}  onChange={(e)=>{setAge(e.target.value)}}/>
      </div>

      <br />
      <br />
      <h1>{count}</h1>
      <br />
      <button style={{padding:"5px 18px"}} onClick={()=>setCount((prevState)=>(prevState +1))} >++</button>
      <button style={{padding:"5px 18px"}} onClick={()=>setCount((prevState)=>(prevState-1))} >--</button>
      <br />
     </div>
    </div>
  )
}

export default Team
