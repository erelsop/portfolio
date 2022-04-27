import React from "react"
import downloadIcon from "../images/download-icon.svg"
import "../styles/about.css"
import resume from "../assets/ethan-r-elsop.pdf"

const about = () => {
  return (
    <section className="about-section" id="about">
      <article className="bio">
        <p className="about-text">
          Hello there! My name is Ethan Elsop and I am a web developer and UI/UX
          designer. I am currently attending Wake Technical Community College in
          North Carolina. I have completed work in many languages, but the
          majority of my applications and pages have been built using HTML/CSS,
          vanilla JS, and ReactJS. This portfolio is built using Gatsby (my new
          preferred framework). As for design, I prefer Figma for my personal
          projects but also know my way around Adobe XD and Sketch.
        </p>
        <br />
        <p className="about-text">
          If you are reading this then I likely applied to a position at your
          company. I appreciate your visit! I spend time learning something new
          everyday and am excited to bring this energy to a role that allows
          growth. I look forward to hearing from you!
        </p>
      </article>
      <article className="skills">
        <h2>
          <a
            href={resume}
            className="resume-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={downloadIcon} alt="download" className="download-icon" />{" "}
            <span className="resume-label">Resume</span>
          </a>
        </h2>
      </article>
    </section>
  )
}

export default about
