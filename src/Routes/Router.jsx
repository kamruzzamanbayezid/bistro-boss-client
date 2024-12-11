import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";

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
      {
            path: '/login',
            element: <Login />
      },
      {
            path: '/registration',
            element: <Registration />
      },
])

export default router;