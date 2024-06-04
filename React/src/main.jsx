import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import SpyRun from './components/Projects/SpyRun.jsx';
import Pandas from './components/Projects/Pandas.jsx';
import Other from './components/Projects/Other.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "SpyRun",
    element: <SpyRun />,
  },
  {
    path: "Pandas",
    element: <Pandas />,
  },
  {
    path: "Other",
    element: <Other />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

