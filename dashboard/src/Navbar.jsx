import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return ( <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-navbar  ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/zerodha/"><img src='/media/images/logo.svg' className='navbar-logo' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-5 pe-5" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto "  >
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/signup" style={{ color:'#6c757d'}}>Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Login" style={{ color:'#6c757d'}}>Login</Link>
        </li>
        <li className="nav-item ms-3">
          <Link className="nav-link" to="/zerodha/about"  style={{ color:'#6c757d'}} >About</Link>
          </li>
        <li className="nav-item ms-3">
          <Link className="nav-link" to="/zerodha/products" style={{ color:'#6c757d'}} >Product</Link>
        </li>
         <li className="nav-item ms-3">
          <Link className="nav-link" to="/zerodha/pricing"  style={{ color:'#6c757d'}} >Pricing</Link>
        </li>
         <li className="nav-item ms-3">
          <Link className="nav-link" to="/zerodha/support" style={{ color:'#6c757d'}} >Support</Link>
        </li>
        <li className="nav-item dropdown ms-3 pe-5 me-5">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-bars navbar-hamburger"></i>
          </a>
          <ul className="dropdown-menu ">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    
    </> );
}

