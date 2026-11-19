import "./SkillsSection.css";

const skills = [
  {
    level: "Intermediate",
    title: "in",
    highlight: "PHP-Laravel",
    highlightClass: "gradient-text-purple",
    description: "Website knowledge.",
    subtitle:
      "Experience with C#, .NET, PHP Symfony, Java 8, Spring Boot, application analysis, development infrastructure, and AI.",
    cta: "WANT TO KNOW MORE?",
  },
  {
    level: "Expertise",
    title: "8, 12, 14, 20+",
    highlight: "Angular",
    highlightClass: "gradient-text-blue",
    description: "Webapp development.",
    subtitle:
      "Discover one of the best frameworks for enterprise application development, including architecture, frontend engineering, and infrastructure.",
    cta: "WANT TO KNOW MORE?",
  },
  {
    level: "Intermediate",
    title: "in",
    highlight: "JSP, Vue.js, React JS",
    highlightClass: "gradient-text-cyan",
    description: "Software implementation.",
    subtitle:
      "Explore modern frontend development, component architecture, reusable interfaces, and professional software implementation.",
    cta: "WANT TO KNOW MORE?",
  },
  {
    level: "Expertise",
    title: "using",
    highlight: "TOOLS",
    highlightClass: "gradient-text-purple",
    description: "GIT, Vs code,Gitlab, Github",
    subtitle:
      "Experienced with Ant design, boostrap, material ui, Tailwind CSS, and Enterprise.",
    cta: "WANT TO KNOW MORE?",
  },
  {
    level: "New",
    title: "Cyber Security",
    highlight: "Technician",
    highlightClass: "gradient-text-blue",
    description: "Iot ,nmap ,iso/osi.",
    subtitle:
      "Discover IT security fundamentals, infrastructure, cybersecurity concepts, and the technologies behind modern digital environments.",
    cta: "WANT TO KNOW MORE?",
  },
];

function SkillCard({ skill, index }) {
  return (
    <article className="skill-card">
      <div className="eyebrow">
        <span className="live-dot" aria-hidden="true" />
        {skill.level}
      </div>

      <h2 className="skill-title">
        {skill.title}
        <br />
        <span className={skill.highlightClass}>
          {skill.highlight}
        </span>
        <br />
        {skill.description}
      </h2>

      <p className="skill-subtitle">
        {skill.subtitle}
      </p>

      <a
        href="#contact"
        className="skill-link"
        aria-label={`Learn more about ${skill.highlight}`}
      >
        {skill.cta}
        <span aria-hidden="true"> ↗</span>
      </a>
    </article>
  );
}

function SkillsSection() {
  return (
    <section className="skills-section" aria-labelledby="skills-heading">
      <div className="skills-header">
        <span className="section-label">MY EXPERTISE</span>
        <h1 id="skills-heading">
          Technologies & <span>Skills.</span>
        </h1>
        <p>
          A collection of technologies, frameworks, and
          knowledge acquired through software development.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.highlight}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}


export default SkillsSection
