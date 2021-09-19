
import React from 'react';
import { Link } from "react-router-dom";
import "../css/navbar.css"

function Navbar() {
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light mb-5 bgNav">
            <div className="container-fluid">
                {/* <a className="navbar-brand " href="#">DARKSERIES</a> */}
                <Link to="/" className="navbar-brand logo"> DARKSERIES </Link>
                <button className="navbar-toggler bugerIcon rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon " ></span>
                </button>
                <div className="collapse navbar-collapse linkNav" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                      <Link to="/" className="nav-link active linkNav font-weight-bold" aria-current="page" >Home </Link>
                    </li>
                    <li className="nav-item">
                      {/* <a className="nav-link" href="#">Link</a> */}
                      <Link to="#" className="nav-link linkNav font-weight-bold"> Link </Link>
                    </li>

                  </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                          {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                          </a> */}
                          <Link to="#" className="nav-link dropdown-toggle font-weight-bold linkNav" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown </Link>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li> <Link to="/login" className="dropdown-item font-weight-bold"> Login </Link></li>
                            <li> <Link to="/logout" className="dropdown-item font-weight-bold"> Logout </Link></li>
                          </ul>
                        </li>
                  </ul>
                  {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form> */}
                </div>
            </div>
        </nav>
    </div>
  )
   
}
  
  export default Navbar;