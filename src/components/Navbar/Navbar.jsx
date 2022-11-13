import React, { Component } from 'react'
import {Link } from "react-router-dom"

export default class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">New-Hunt</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business"  aria-disabled="false">business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment"  aria-disabled="false">entertainment</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" to="/tesla"  aria-disabled="false">tesla</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link active" to="/health"  aria-disabled="false">health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science"  aria-disabled="false">science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports"  aria-disabled="false">sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology"  aria-disabled="false">technology</Link>
              </li>
            </ul>
          
          </div>
        </div>
        
      </nav>
    )
  }
}
