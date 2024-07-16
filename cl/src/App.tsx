import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss"
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Payments from "./pages/payments/Payments";
import Bookings from "./pages/bookings/Bookings";
import Messages from "./pages/messages/Messages";
import Analytics from "./pages/analytics/Analytics";
import Settings from "./pages/settings/Settings";
import Documentations from "./pages/documentations/Documentations";
import Calender from "./pages/calendar/Calender";

function App() {
  const Layout = () => {
    return(
      <div className="container">
        <div className="menuContainer"><Menu/></div>
        <div className="contentContainer"><Outlet/></div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/payments",
          element: <Payments />
        },
        {
          path: "/bookings",
          element: <Bookings />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/analytics",
          element: <Analytics />
        },
        {
          path: "/calendar",
          element: <Calender />
        },
        {
          path: "/settings",
          element: <Settings />
        },
        {
          path: "/documentations",
          element: <Documentations />
        },

        {
          path: "/users/:id",
          element: <User />
        },
        {
          path: "/products/:id",
          element: <Product />
        },

        
        ],
    },
    {
      path: "/login",
      element: <Login />
    },
    
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
