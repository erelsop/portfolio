import React from "react"
import { Link } from "gatsby"
import backArrow from "../images/back-arrow.svg"
import "../styles/error.css"

const blog = () => {
  return (
    <main className="main-content">
      <h1 className="error-text">UNDER CONSTRUCTION</h1>
      <h2 className="error-text row2">Please come back soon :)</h2>
      {/* <Link to="/eelsop/web287/public" className="back-button home-link"> */}
      <Link to="/" className="back-button home-link">
        <img src={backArrow} alt="back button" />
        <p className="go-back">Go back</p>
      </Link>
    </main>
  )
}

export default blog
