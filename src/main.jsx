import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>
  }
]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
