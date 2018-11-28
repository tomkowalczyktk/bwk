import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
 
  <header>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">BWK</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Biura</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Dlaczego my</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Coworking dla prawników</a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="#">Kontakt</a>
            </li>
          </ul>
        </div>
      </nav>
  </header>
)

export default Header
