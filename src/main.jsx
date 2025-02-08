import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  }
]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
