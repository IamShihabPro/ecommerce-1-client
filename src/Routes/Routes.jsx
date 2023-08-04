import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ProductView from "../Components/ProductView/ProductView";
import MultiFilter from "../Components/Com/MultiFilter";
import ProductData from "../Components/ProductData/ProductData";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";


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
        path: '/multi',
        element: <MultiFilter/>
      },
      {
        path: '/shop',
        element: <ProductData></ProductData>
      },
      {
        path: '/productview/:id',
        element: <PrivateRoutes> <ProductView></ProductView> </PrivateRoutes> ,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`)
      },
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      }
    ]
  }
]);
