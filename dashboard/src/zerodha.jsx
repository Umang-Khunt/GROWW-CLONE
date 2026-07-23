
import {Routes,Route} from 'react-router-dom'
import HomePage from './landing-page/home/HomePage.jsx'

import PricingPage from './landing-page/pricing/PricingPage.jsx'
import ProductPage from './landing-page/products/ProductPage.jsx'
import AboutPage from './landing-page/about/AboutPage.jsx'
import SupportPage from './landing-page/support/SupportPage.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import './landing-page/indexforfrontend.css'

export default function Zerodha(){

    return<>

  <Navbar/>
  <Routes>
    
    <Route path='/' element={<HomePage/>}/>
    <Route path='pricing' element={<PricingPage/>}/>
    <Route path='about' element={<AboutPage/>}/>
    <Route path='/products' element={<ProductPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
   
    {/* <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Loginx/>}/>

     <Route path="/dashboard/*" element={<Home />} />
    <Route path='/*' element={<NotFound/>}/> */}
  </Routes>
   <Footer/>

  </>
  }