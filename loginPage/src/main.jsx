import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from "./components/loginSignup/homepage.jsx"
import LoginSignUp from './components/loginSignup/loginSignUp.jsx'
import Videos from './components/loginSignup/pages/videos.jsx'
import Photos from './components/loginSignup/pages/photos.jsx'
import Music from './components/loginSignup/pages/music.jsx'

const router=createBrowserRouter([
  {path:"/", element:<LoginSignUp />},
  {path:"/homepage", element:<Homepage />},
  {path:"/videos", element:<Videos />},
  {path:"/photos", element:<Photos />},
  {path:"/music", element:<Music />}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
