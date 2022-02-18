import React from "react"
import "../styles/about-styles.css"

const about = () => {
  return (
    <section className="about-section">
      <article className="bio">
        <p className="about-text">
          Hello there! My name is Ethan Elsop and I am a web developer and UI/UX
          designer. I am currently attending Wake Technical Community College in
          North Carolina until the end of the Spring 2022 semester when I
          graduate. I have completed work in many languages, but the majority of
          my applications and pages have been built using HTML/CSS, vanilla JS,
          and ReactJS. This portfolio is built using Gatsby (my new preferred
          framework).
        </p>
        <br />
        <p className="about-text">
          If you are reading this then I likely applied to a position at your
          company. Thank you so much for your visit! I spend time learning
          something new everyday and am excited to bring this energy to a role
          that allows growth. I look forward to hearing from you!
        </p>
        <br />
      </article>
      <article className="skills">
        <h2 className="skill-heading">\ HTML/CSS \ </h2>
        <h2 className="skill-heading">\ JavaScript \ </h2>
        <h2 className="skill-heading">\ ReactJS \ </h2>
        <h2 className="skill-heading">\ NodeJS \ </h2>
        <h2 className="skill-heading">\ Gatsby \ </h2>
        <h2 className="skill-heading">\ MongoDB \ </h2>
        <h2 className="skill-heading">\ Python \ </h2>
      </article>
    </section>
  )
}

export default about
