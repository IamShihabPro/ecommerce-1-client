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
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AdminRoutes from "./AdminRoutes";
import ManageProduct from "../pages/Dashboard/ManageProduct/ManageProduct";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import Review from "../pages/Review/Review";
import ShowContact from "../pages/Dashboard/ShowContact/ShowContact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
// import ContactForm from "../pages/ContactForm/ContactForm";

// import Dash from "../Layout/Dash";
// import UpdateProduct from "../pages/Dashboard/UpdateProduct/UpdateProduct";


export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <ProductData></ProductData>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/totalProducts`)
      },
      // {
      //   path: '/contact',
      //   element: <ContactForm></ContactForm>
      // },
      {
        path: '/review',
        element: <PrivateRoutes> <Review></Review> </PrivateRoutes>
      },
      {
        path: '/productview/:id',
        element: <ProductView></ProductView> ,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`)
      },
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'manageproduct',
        element: <AdminRoutes> <ManageProduct></ManageProduct> </AdminRoutes>
      },
      // {
      //   path: 'updateproduct/:id',
      //   element: <UpdateProduct></UpdateProduct>,
      //   loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`)

      // },
      {
        path: 'allusers',
        element: <AdminRoutes> <AllUsers></AllUsers> </AdminRoutes>
      },
      {
        path: 'adminhome',
        element: <AdminRoutes> <AdminHome></AdminHome> </AdminRoutes>
      },
      {
        path: 'addProduct',
        element: <AdminRoutes> <AddProduct></AddProduct> </AdminRoutes>
      },
      {
        path: 'contacts',
        element: <AdminRoutes> <ShowContact></ShowContact> </AdminRoutes>
      },
     
    ]
  },
  // {
  //   path: '/dash',
  //   element: <Dash></Dash>
  // }
]);
