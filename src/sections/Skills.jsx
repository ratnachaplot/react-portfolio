import "../CSS/Skills.css";

const skills = [
  "React.js", "Node.js", "Express.js", "MongoDB", 
  "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3",
  "PostgreSQL", "REST API Design", "JWT Authentication",
  "Git", "GitHub", "Object-Oriented Programming"
];

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="section-container">
                <h2 className="section-title fade-in-up">My Skills</h2>
                <div className="skills-grid fade-in-up delay-200">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-tag">
                            <span className="skill-dot"></span>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;