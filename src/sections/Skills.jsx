import "../CSS/Skills.css";

const skills = ["HTML5", "CSS3", "JavaScript (ES6)", "React", "REST API Integration", "C++", "Responsive Web Design", "Object-Oriented Programming (OOPs)", "DBMS", "PostgreSQL", "Git", "GitHub"];

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <h2>Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;