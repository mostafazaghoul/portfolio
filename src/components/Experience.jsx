import React from "react";

const EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    company: "Audi AG",
    period: "May 2025 — October 2025",
    points: [
      "Contributed to Service42, the VW Group's system for in-dealership and over-the-air services.",
      "Supported software implementation and product coordination across international teams.",
      "Coordinated a 60-person external development team across sprint planning and deployment cycles.",
      "Worked in an agile environment using Jira and Confluence.",
    ],
  },
  {
    role: "Research Assistant",
    company: "WZL — RWTH Aachen",
    period: "December 2022 — April 2025",
    points: [
      "Optimized and deployed a CT scan simulation application in C++, CUDA, Docker and Kubernetes — reducing simulation runtimes by 60%.",
      "Designed, developed and deployed a React web platform used by research teams.",
      "Automated industrial measurement data analysis with Python and Pandas.",
      "Managed GitLab and ArgoCD deployments and collaborated closely with research teams.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <header className="section-head reveal">
          <span className="section-index">02</span>
          <h2 className="section-title">Experience</h2>
        </header>

        <div className="timeline">
          {EXPERIENCE.map((job) => (
            <article key={job.company} className="timeline-item reveal">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-body">
                <div className="timeline-header">
                  <h3 className="timeline-role">
                    {job.role}
                    <span className="timeline-company"> · {job.company}</span>
                  </h3>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="timeline-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
