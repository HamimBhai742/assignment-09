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
import Profile from './Components/Profile/Profile';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
import Home from './Components/Home/Home';
import ViewProperty from './Components/Home/ViewProperty';
import Error from './Components/Error/Error';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
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
        path:'/updateProfile',
        element:<UpdateProfile></UpdateProfile>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
