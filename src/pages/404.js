import React from "react"
import { Link } from "gatsby"
import backArrow from "../images/back-arrow.svg"
import "../styles/portfolio.css"
import "../styles/error.css"

const error = () => {
  return (
    <main className="main-content">
      <h1 className="error-text">ERROR 404</h1>
      <h2 className="error-text row2">Page not found :(</h2>
      <Link to="/" className="back-button home-link">
        <img src={backArrow} alt="back button" />
        <p className="go-back">Go back</p>
      </Link>
    </main>
  )
}

export default error
