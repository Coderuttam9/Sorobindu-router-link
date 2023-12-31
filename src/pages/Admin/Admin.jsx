import { Link, Outlet, useLocation } from "react-router-dom"
import PageHemet from "../../components/Page_title/PageHemet"
import './Admin.scss'
import { checkRoute } from "../../helpers/helper";

const Admin = () => {

  const location = useLocation();
  console.log(location)
  return (
    <div>
      <PageHemet title="Admin"/>
     <div className="container">
      <h1>Admin</h1>
     </div>

      <div className="container admin-flex">
        <div className="left-menu">
          <ul>
            <li><Link className={checkRoute(location.pathname, "user")? "active" :""
             } to="user">User</Link></li>
            <li><Link className={checkRoute(location.pathname, "post")? "active" :""
             }  to="post">Post</Link></li>
            <li><Link className={checkRoute(location.pathname, "category")? "active" :""
             }  to="category">Category</Link></li>
            <li><Link className={checkRoute(location.pathname, "role")? "active" :""
             }  to="role">Roles</Link></li>
          </ul>
        </div>
        <div className="right-menu">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Admin

