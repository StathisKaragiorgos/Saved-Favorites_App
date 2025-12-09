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
import ProtectesRoutes from './ProtectesRoutes.jsx'

const router=createBrowserRouter([
  {path:"/", element:<LoginSignUp />},
  {path:"/homepage", element: 
  (<ProtectesRoutes>
    <Homepage />
    </ProtectesRoutes>)},
  {path:"/videos", element:
  (<ProtectesRoutes>
  <Videos />
  </ProtectesRoutes>)},
  {path:"/photos", element:
  (<ProtectesRoutes>
  <Photos />
  </ProtectesRoutes>)},
  {path:"/music", element:
  (<ProtectesRoutes>
  <Music />
  </ProtectesRoutes>)}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
