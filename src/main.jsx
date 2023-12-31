import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from '../src/Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import JobDetail from './Components/JobDetails/JobDetail';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    loader: () => fetch('card_data.json') ,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: 'job/:jobId',
        loader: () => fetch('job_data.json'),
        element: <JobDetail/>,
        errorElement: <ErrorPage></ErrorPage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router}></RouterProvider>
   
 
)
