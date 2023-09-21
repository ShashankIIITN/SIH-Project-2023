import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar(props) {
  const appdata = props.appdata;
  return (
    <nav className="navbody navbar navbar-expand-lg ">
      <div className="container-fluid ">
      
      <div> <i class="fa-solid fa-bars me-2 size"/> <Link className="navbar-brand" to="/">{appdata.name}</Link></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar