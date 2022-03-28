import React from "react"
import { Link } from "gatsby"
import scrollIcon from "../images/scroll.svg"

const layout = ({ children }) => {
  return (
    <main className="main-container">
      <section className="index-splash-screen">
        <div className="index-text">
          <h1 className="index-name">Ethan Elsop</h1>
          <br />
          <h2 className="index-title">
            Web Developer,
            <br /> UI/UX Designer
          </h2>
        </div>
        <ul>
          <li>
            {/* <Link
              to="/eelsop/web287/public/portfolio"
              className="index-route"
              title="Portfolio"
            >
              Portfolio
            </Link> */}
            <Link to="/portfolio" className="index-route" title="Portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <a href="#contact" className="index-route" title="Contact">
              Contact
            </a>
          </li>
          <li>
            <a href="#about" className="index-route" title="About">
              About
            </a>
          </li>
        </ul>

        <img src={scrollIcon} alt="scroll down" className="scroll-icon" />
      </section>
      {children}
    </main>
  )
}

export default layout
