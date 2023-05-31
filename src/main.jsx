import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from '../src/Components/Home/Home';
import Layout from './Components/Layout/Layout';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children : [
      {
       path:'/',
       element: <Home></Home>,
       loader : () => fetch('card_data.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
