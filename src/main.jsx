import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Components/Login/Login';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import About from './Components/Contact/About/About';
import Register from './Components/Register/Register';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
import Home from './Components/Home/Home';
import ViewProperty from './Components/Home/ViewProperty';
import Error from './Components/Error/Error';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import { HelmetProvider } from 'react-helmet-async';
import Contact from './Components/Contact/Contact';
import RealEstate from './Components/Real Estate/RealEstate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Industrial.json')
      },
      {
        path: '/view/:id',
        element: <PrivateRouter><ViewProperty></ViewProperty></PrivateRouter>,
        loader: () => fetch('/Industrial.json')
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path:'/contact',
        element:<PrivateRouter><Contact></Contact></PrivateRouter>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
