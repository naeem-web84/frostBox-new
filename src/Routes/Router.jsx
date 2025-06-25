import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login"; 
import SubscriptionBoxes from "../components/SubscriptionBoxes";
import Profile from "../pages/Profile";
import SubscriptionBoxDetails from "../pages/SubscriptionBoxDetails";
import ForgotPassword from "../pages/ForgetPassword";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import MyOrders from "../pages/MyOrders"; 
import Register from "../pages/Register";
import GiftAddress from "../pages/GiftAddress";  

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element:  <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      {
        path: "/boxes",
        element: <SubscriptionBoxes />
      },
      {
        path: "/boxes/:id",
        element: (
          <PrivateRoute>
            <SubscriptionBoxDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/gift-address",
        element: <GiftAddress />,  
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
