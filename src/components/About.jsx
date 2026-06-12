import React from "react";

const EDUCATION = [
  {
    degree: "B.Sc. — Electrical, Information and Computer Engineering",
    school: "RWTH Aachen University",
    detail: "Thesis: Edge-Guided Inpainting for Intra Prediction in Video Coding — 1.0",
  },
  {
    degree: "Abitur — German High School Diploma",
    school: "Deutsche Evangelische Oberschule, Cairo",
    detail: "Grade 1.8",
  },
];

const LANGUAGES = [
  { name: "Arabic", level: "Native — C2" },
  { name: "German", level: "Fluent — C2" },
  { name: "English", level: "Advanced — C1" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="section-index">01</span>
          <h2 className="section-title">About</h2>
        </header>

        <div className="about-grid">
          <div className="about-bio reveal">
            <p>
              I&apos;m a software engineer with a degree in Computer Engineering from
              RWTH Aachen. My background spans high-performance C++ and CUDA,
              production infrastructure on Docker and Kubernetes, and full-stack
              web development — and I like the parts where those worlds meet.
            </p>
            <p>
              I completed my B.Sc. with a thesis on{" "}
              <em>Edge-Guided Inpainting for Intra Prediction in Video Coding</em>,
              graded 1.0. Along the way I&apos;ve reduced simulation runtimes by 60%,
              shipped web platforms used by research teams, and coordinated large
              international development efforts.
            </p>
            <p>
              I care about systems that are fast, observable, and maintainable —
              and about writing code other people can pick up and trust.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-block reveal">
              <h3 className="about-block-title">Education</h3>
              <ul className="about-list">
                {EDUCATION.map((item) => (
                  <li key={item.degree} className="about-list-item">
                    <span className="about-list-primary">{item.degree}</span>
                    <span className="about-list-secondary">{item.school}</span>
                    <span className="about-list-meta">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-block reveal">
              <h3 className="about-block-title">Languages</h3>
              <ul className="about-list">
                {LANGUAGES.map((lang) => (
                  <li key={lang.name} className="about-lang">
                    <span className="about-list-primary">{lang.name}</span>
                    <span className="about-list-meta">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
