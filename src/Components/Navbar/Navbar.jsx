import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className='main-color p-2 fixed-top py-4'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-white fs-2" to="">START FRAMEWORK</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="about" activeClassName="active">ABOUT</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="portfolio" activeClassName="active">PORTFOLIO</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="contact" activeClassName="active">CONTACT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
