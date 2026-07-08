import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import  Loginx  from './Loginx.jsx'
import Signup from './Signup.jsx'
import { CookiesProvider } from "react-cookie";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
    <BrowserRouter>
    <Routes>
      
      <Route path='/*' element={<Home/>} />
      <Route path="/login" element={<Loginx />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
    
    </BrowserRouter>
    </CookiesProvider>
  </StrictMode>,
)
