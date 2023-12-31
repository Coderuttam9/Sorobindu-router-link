import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import "./Header.scss"
import { Link, useLocation } from "react-router-dom";
import { checkRoute } from "../../helpers/helper";
const Header = () => {
  const location = useLocation();
  return (
    <header>
      <div className="top-bar ">
        <div className=" top-bar-container container ">
          <div className=" top-bar-left">
            <ul>
              <li>
                <FaPhone />
                <span> +8801889972995</span>

              </li> |
              <li>
                < MdOutlineEmail />
                <span> info@sorobindu.com </span>

              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <Link to=""> Login</Link>
            <Link to=""> Register</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="nav-bar">
          <div className="header-left">
            <Link> <img src="https://sorobindu.com/wp-content/uploads/2022/03/Sorobindu-logo-1.png" alt="" /></Link>
          </div>
          <div className="header-right">
            <ul>
              <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
              <li><Link className={location.pathname === "/blog" ? "active" : ""} to="/blog">Blog</Link></li>
              <li><Link className={location.pathname === "/team" ? "active" : ""} to="/team">Team</Link></li>
              <li><Link className={checkRoute(location.pathname, "admin")?"active ":""} to="/admin">Admin</Link></li>
              <li><Link className={location.pathname === "/contact" ? "active" : ""} to="contact">Contact</Link></li>

            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
