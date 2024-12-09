import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";

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
                        path: 'our-shop',
                        element: <OurShop />
                  },
            ]
      }
])

export default router;