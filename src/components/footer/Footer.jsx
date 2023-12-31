import{Link} from "react-router-dom"
import "./Footer.scss"
const Footer = () => {
  return (
    <footer>
        <div className="container footer">
           <hr />
           <Link to="/"><img src="https://sorobindu.com/wp-content/uploads/2022/01/SSLCommerz-Pay-With-logo-All-Size-03-2048x73.png" alt="" /></Link>
           <p> &copy; 2023 SoroBindu OPC. All Rights Reserved </p>
        </div>
    </footer>
      
  
  )
}

export default Footer
