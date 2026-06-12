import React from "react";

const PROJECTS = [
  {
    name: "ParticleEngine2D",
    description:
      "C++ particle physics sandbox with SPH fluid simulation, O(n) spatial-hash collisions, and GLSL rendering.",
    link: "https://github.com/mostafazaghoul/ParticleEngine2D",
    tag: "C++",
  },
  {
    name: "AI Task Manager",
    description:
      "AI-powered task manager with natural-language input, GPT-4o mini integration, and a full REST API.",
    link: "https://github.com/mostafazaghoul/AITaskManager",
    tag: "Python",
  },
  {
    name: "AWS EKS CI/CD Pipeline",
    description:
      "Production-grade CI/CD pipeline on AWS EKS with Terraform infrastructure, Trivy scanning, and staging/production environments.",
    link: "https://github.com/mostafazaghoul/aws-eks-cicd-pipeline",
    tag: "DevOps",
  },
  {
    name: "Quantum MNIST Classifier",
    description:
      "Hybrid quantum-classical neural network with a trainable 4-qubit PennyLane circuit, benchmarked against a classical baseline.",
    link: "https://github.com/mostafazaghoul/quantum-mnist-classifier",
    tag: "ML",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="section-index">03</span>
          <h2 className="section-title">Projects</h2>
        </header>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal"
            >
              <div className="project-card-top">
                <span className="project-tag">{project.tag}</span>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <span className="project-link-label">View on GitHub</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
