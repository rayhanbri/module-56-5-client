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



const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {index:true, 
        loader:() => fetch('http://localhost:3000/coffees'),
        Component:Home,
      }
    ]
  },
  {
    path:'/addcoffee',
    Component:Addcoffe,
  },
  {
    path:'/updatecoffee',
    Component:UpdateCoffe,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
