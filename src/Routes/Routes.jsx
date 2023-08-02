import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ProductView from "../Components/ProductView/ProductView";
import MultiFilter from "../Components/Com/MultiFilter";
import ShopPage from "../pages/ShopPage/ShopPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
      {
        path: '/productview',
        element: <ProductView/>
      },
      {
        path: '/multi',
        element: <MultiFilter/>
      },
      {
        path: '/shop',
        element: <ShopPage/>
      },
    ]
  },
]);
