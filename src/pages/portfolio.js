import React from "react"
import { Link } from "gatsby"
import "../styles/portfolio.css"
import backArrow from "../images/back-arrow.svg"

const portfolio = () => {
  return (
    <section className="portfolio-section">
      {/* <Link to="/eelsop/web287/public" className="back-button"> */}
      <Link to="/" className="back-button">
        <img src={backArrow} alt="back button" />
        <p className="go-back">Go back</p>
      </Link>
      <section className="portfolio-item-container">
        <h1 className="item-title">PixelPass</h1>
        <p className="item-description">
          PixelPass is a random secure password generator that leverages a
          user's existing photo library to create strong passwords from lossless
          images. Instead of coming up with weird mnemonics to remember a
          password, users can associate sites with specific pictures if they
          ever lose one. The app checks for visual complexity to insure a secure
          password can be generated, and it allows the user to choose the length
          and characters used for the password.
        </p>
        <p className="item-language">Language: Python</p>
        <a
          href="https://github.com/LeaMorelPsi/PixelPass"
          className="item-link"
        >
          GitHub
        </a>
      </section>
      <section className="portfolio-item-container">
        <h1 className="item-title">Sudoku Solver</h1>
        <p className="item-description">
          A sudoku solver that uses a recursive backtrack algorithm to solve
          grids.
        </p>
        <p className="item-language">Language: JavaScript</p>
        <a
          href="https://github.com/LeaMorelPsi/Sudoku-Solver"
          className="item-link"
        >
          GitHub
        </a>
      </section>
    </section>
  )
}

export default portfolio
