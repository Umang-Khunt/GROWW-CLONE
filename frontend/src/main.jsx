import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import HomePage from './landing-page/home/HomePage.jsx'
import Signup from './landing-page/signup/Signup.jsx'
import PricingPage from './landing-page/pricing/PricingPage.jsx'
import ProductPage from './landing-page/products/ProductPage.jsx'
import AboutPage from './landing-page/about/AboutPage.jsx'
import SupportPage from './landing-page/support/SupportPage.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import NotFound from "./landing-page/NotFound.jsx"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/products' element={<ProductPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
