import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layout/MainLayout.jsx';
import Home from './Component/Home.jsx';
import Addcoffe from './Component/Addcoffe.jsx';
import UpdateCoffe from './Component/UpdateCoffe.jsx';
import CoffeeDetails from './Component/CoffeeDetails.jsx';
import SignUP from './Component/SignUP.jsx';
import SignIn from './Component/SignIn.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './Component/Users.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://module-56-server-pink.vercel.app/coffees'),
        Component: Home,
      }
    ]
  },
  {
    path: '/addcoffee',
    Component: Addcoffe,
  },
  {
    // ei id tah params e jabe er por okhane boshe jabe 
    path: '/updatecoffee/:id',
    loader: ({ params }) => fetch(`https://module-56-server-pink.vercel.app/coffees/${params.id}`),
    Component: UpdateCoffe,
  },
  {
    path: '/coffees/:id',
    Component: CoffeeDetails
  },
  {
    path: '/signup',
    Component: SignUP
  },
  {
    path: '/signin',
    Component: SignIn
  },
  {
    path: '/users',
    loader: () => fetch('https://module-56-server-pink.vercel.app/users'),
    Component: Users

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
