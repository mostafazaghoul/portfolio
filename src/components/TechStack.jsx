import React from "react";

const GROUPS = [
  { title: "Languages", items: ["Python", "C++", "JavaScript"] },
  { title: "Frontend", items: ["React"] },
  { title: "Backend", items: ["FastAPI"] },
  {
    title: "Infrastructure",
    items: ["Docker", "Kubernetes", "Terraform", "AWS EKS", "GitHub Actions", "ArgoCD"],
  },
  { title: "Other", items: ["CUDA", "Git", "GitLab", "Pandas", "OpenCV"] },
];

export default function TechStack() {
  return (
    <section id="tech" className="section section--alt">
      <div className="container">
        <header className="section-head reveal">
          <span className="section-index">04</span>
          <h2 className="section-title">Tech Stack</h2>
        </header>

        <div className="tech-grid">
          {GROUPS.map((group) => (
            <div key={group.title} className="tech-group reveal">
              <h3 className="tech-group-title">{group.title}</h3>
              <ul className="tech-tags">
                {group.items.map((item) => (
                  <li key={item} className="tech-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
