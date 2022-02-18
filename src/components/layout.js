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
            <Link to="/portfolio" className="index-route" title="Portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" className="index-route" title="Blog">
              Blog
            </Link>
          </li>
        </ul>

        <img src={scrollIcon} alt="scroll down" className="scroll-icon" />
      </section>
      {children}
    </main>
  )
}

export default layout
