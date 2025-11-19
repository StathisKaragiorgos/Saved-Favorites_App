import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Homepage from "./components/loginSignup/homepage.jsx"
import LoginSignUp from './components/loginSignup/loginSignUp.jsx'

const router=createBrowserRouter([
  {path:"/", element:<LoginSignUp />},
  {path:"/homepage", element:<Homepage />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
