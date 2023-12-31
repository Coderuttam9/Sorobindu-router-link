import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Team from "../pages/Team/Team";
import Admin from "../pages/Admin/Admin";
import Contact from "../pages/contact/Contact";
import User from "../pages/Admin/pages/User/User";
import Post from "../pages/Admin/pages/post/Post";
import Category from "../pages/Admin/pages/caregory/Category";
import Roles from "../pages/Admin/pages/roles/Roles";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/team",
        element: <Team />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "user",
            element: <User />,
          },
          {
            path: "post",
            element: <Post />,
          },
          {
            path: "category",
            element: <Category />,
          },
          {
            path: "role",
            element: <Roles />,
          },
        ],
      },
    ],
  },
]);

// export default
export default router;
