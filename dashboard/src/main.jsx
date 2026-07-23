import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Signup from './Signup.jsx'

import NotFound from "./landing-page/NotFound.jsx"
import Loginx from './Loginx.jsx'
import { CookiesProvider } from "react-cookie";
import Home from './Home.jsx'
import Zerodha from './zerodha.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'


createRoot(document.getElementById('root')).render(
  
  <CookiesProvider>
  <BrowserRouter>

  <Routes>
    
    {/* <Route path='/' element={<HomePage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/products' element={<ProductPage/>}/>
    <Route path='/support' element={<SupportPage/>}/> */}
  
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Loginx/>}/>
  <Route path='/zerodha/*' element={<Zerodha/>}/>
     <Route path="/dashboard/*" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      {/* <Route path="/dashboard/*" element={<Home />} /> */}
    <Route path='/*' element={<NotFound/>}/>
  </Routes>
  
  </BrowserRouter>
  </CookiesProvider>
 
)
