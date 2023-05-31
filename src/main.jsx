import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from '../src/Components/Home/Home';
import Layout from './Components/Layout/Layout';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import JobDetail from './Components/JobDetails/JobDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    loader: () => fetch('card_data.json') 
  },
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'job/:jobId',
        element: <JobDetail></JobDetail>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

   <RouterProvider router={router}></RouterProvider>
 
)
