import React from 'react'
import { Link } from 'gatsby'
import './error-page.scss'

const ErrorPage = () => {
  return (
    <div className="background404">


      <h1 className="message404">Nie znaleziono takiej strony!!!</h1>
      <div className="logo404"></div>
      <Link to='/' className="link-from404"> Zabierz mnie do strony głównej.</Link>

    </div>
  )
}
export default ErrorPage