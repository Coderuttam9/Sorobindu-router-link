import { useContext } from "react"
import CountContext from "../../../../context/CountContext"


const User = () => {

  const {count, setCount}= useContext(CountContext)
  return (
    <div>
     <h1>{count}</h1>

     <button onClick={()=>setCount((prevState)=>(prevState+1))}>++</button>
     <button onClick={()=>setCount((prevState)=>(prevState-1))}>--</button>
    </div>
  )
}

export default User
