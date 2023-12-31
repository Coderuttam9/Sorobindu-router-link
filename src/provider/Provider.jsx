import { useState } from "react";
import MsgContext from "../context/MsgContext"


const Provider = ({children}) => {
     const [age, setAge]=useState();
  return <MsgContext.Provider value={{age, setAge}}>{children}</MsgContext.Provider>
  
}

export default Provider
