import React from "react";

const RESUME_URL = `${process.env.PUBLIC_URL}/Resume_Zaghloul.pdf`;
const LEBENSLAUF_URL = `${process.env.PUBLIC_URL}/Lebenslauf_Zaghloul.pdf`;
const PHOTO_URL = `${process.env.PUBLIC_URL}/Photo.jpg`;

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow reveal">Software Engineer</p>
          <h1 className="hero-title reveal">Mostafa Zaghloul</h1>
          <p className="hero-lead reveal">
            I build performant backend systems and reliable infrastructure — from CUDA-accelerated simulation to production CI/CD pipelines.
            Based in Aachen, Germany.
          </p>

          <div className="hero-actions reveal">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a
              href={RESUME_URL}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              download="Resume_Zaghloul.pdf"
            >
              Resume
              <span className="btn-lang">EN</span>
            </a>
            <a
              href={LEBENSLAUF_URL}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              download="Lebenslauf_Zaghloul.pdf"
            >
              Lebenslauf
              <span className="btn-lang">DE</span>
            </a>
          </div>

          <ul className="hero-meta reveal">
            <li>
              <span className="hero-meta-label">Location</span>
              <span className="hero-meta-value">Aachen, Germany</span>
            </li>
            <li>
              <span className="hero-meta-label">Education</span>
              <span className="hero-meta-value">RWTH Aachen</span>
            </li>
            <li>
              <span className="hero-meta-label">Focus</span>
              <span className="hero-meta-value">Backend · Infra · ML</span>
            </li>
          </ul>
        </div>

        <div className="hero-photo-col reveal">
          <div className="hero-photo-ring">
            <img
              src={PHOTO_URL}
              alt="Mostafa Zaghloul"
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
