import React from "react";

const RESUME_URL = `${process.env.PUBLIC_URL}/Resume_Zaghloul.pdf`;
const LEBENSLAUF_URL = `${process.env.PUBLIC_URL}/Lebenslauf_Zaghloul.pdf`;

const CONTACTS = [
  {
    label: "Email",
    value: "mostafa.s.zaghloul@gmail.com",
    href: "mailto:mostafa.s.zaghloul@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/mostafazaghoul",
    href: "https://github.com/mostafazaghoul",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mostafazaghloul",
    href: "https://www.linkedin.com/in/mostafazaghloul",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="section-index">05</span>
          <h2 className="section-title">Contact</h2>
        </header>

        <div className="contact-inner reveal">
          <p className="contact-lead">
            I&apos;m open to interesting engineering work and collaboration. The
            fastest way to reach me is by email — I&apos;ll get back to you.
          </p>

          <ul className="contact-list">
            {CONTACTS.map((item) => (
              <li key={item.label} className="contact-item">
                <span className="contact-item-label">{item.label}</span>
                <a
                  href={item.href}
                  className="contact-item-value"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>

          <div className="contact-actions">
            <a href="mailto:mostafa.s.zaghloul@gmail.com" className="btn btn-primary">
              Say Hello
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
        </div>
      </div>
    </section>
  );
}
