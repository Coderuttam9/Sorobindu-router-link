import { useState } from "react"
import PageHemet from "../../components/Page_title/PageHemet"
import "./Contact.scss"
import { toast } from "react-toastify";
import Swal from 'sweetalert2';


const Contact = () => {
  const [input, setInput] = useState({
    name:"",
    email:"",
    cell: "",
    pass:"",
    foot:"",
    gender:""
  });

  const handleInput=(e)=>{
    setInput((prevState)=>({
       ...prevState,
    [e.target.name]: e.target.value
    }))
  };

  const handleForm = (e)=>{
 e.preventDefault();
 if(!input.name || !input.email || !input.cell || !input.foot || !input.gender ||!input.pass){
  toast.error("Please fill all fields")
 }else{
   Swal.fire("Account created")
 }
  }
  return (
    <div>
      <PageHemet title="Contact"/>
      <div className="container">
      <h1>Contact</h1>

      <div className="contact-form">
        <form onSubmit={handleForm} action="">
          <input type="text" placeholder="Name" value={input.name}
          name="name"
          onChange={handleInput}
          />
          <input type="text" placeholder="Email" value={input.email}
          name="email"
          onChange={handleInput}  />
          <input type="text" placeholder="Call" value={input.cell}
          name="cell"
          onChange={handleInput}  />
         <select name="foot" id=""onChange={handleInput} >
            <option value="" > --select--</option>
            <option value={input.apple}>Apple</option>
            <option value={input.orange}>Orange</option>
            <option value={input.Banana}>Banana</option>
            <option value={input.mango}>Mango</option>
          </select>

          <div >
            <label ><input type="radio" value="Male" name="gender" onChange={handleInput}/> Male</label>
            <label >
              <input type="radio" value="Female" name="gender" onChange={handleInput}/> Female
            </label>
          </div>

          <input type="text" placeholder="Pass" value={input.pass}
          name="pass"
          onChange={handleInput}  />
          <button> Create Now</button>
        </form>
      </div>
     </div>
    </div>
  )
}

export default Contact
