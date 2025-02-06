import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";

const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout />,
            children: [
                  {
                        index: true,
                        element: <Home />
                  },
                  {
                        path: 'our-menu',
                        element: <OurMenu />
                  },
                  {
                        path: 'our-shop/:category',
                        element: <OurShop />
                  },
            ]
      },
      // login && registration
      {
            path: '/login',
            element: <Login />
      },
      {
            path: '/registration',
            element: <Registration />
      },
      // Dashboard
      {
            path: 'dashboard',
            element: <Dashboard />,
            children: [
                  {
                        path: 'my-cart',
                        element: <MyCart />
                  },

                  // Admin Routes
                  {
                        path: 'all-users',
                        element: <AllUsers />
                  },
            ],
      }
])

export default router;