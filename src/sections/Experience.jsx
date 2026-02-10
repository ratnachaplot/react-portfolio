import "../CSS/Experience.css";

const experienceData = [
    {
        role: "Web Development Internship",
        company: "IBM SkillsBuild",
        location: "Remote",
        duration: "June – August 2024",
        description: "Led development of interactive web interfaces as part of a cross-functional team, leveraging HTML5, CSS3, and JavaScript to deliver pixel-perfect, user-centric designs. Demonstrated strong collaboration and code quality standards while contributing to multiple successful production projects.",
        skills: ["HTML5", "CSS3", "JavaScript", "Team Collaboration", "UI/UX"],
        icon: "💼"
    },
    {
        role: "Web Development Internship",
        company: "Main Flow Services & Technologies",
        location: "Remote",
        duration: "May – July 2024",
        description: "Designed and developed responsive UI components using HTML5, CSS3, and JavaScript, focusing on modern frontend best practices. Mastered responsive design principles and enhanced problem-solving skills through hands-on individual projects in a collaborative remote environment.",
        skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Problem Solving"],
        icon: "🚀"
    }
];

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="experience-container">
                <h2>Experience</h2>
                <p className="section-subtitle">My Professional Journey</p>
                
                <div className="experience-timeline">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="timeline-marker">
                                <span className="timeline-icon">{exp.icon}</span>
                            </div>
                            <div className="experience-content">
                                <div className="experience-header">
                                    <div className="header-main">
                                        <h3>{exp.role}</h3>
                                        <div className="company-info">
                                            <h4>{exp.company}</h4>
                                            <span className="separator">•</span>
                                            <span className="location">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                                    <circle cx="12" cy="10" r="3"/>
                                                </svg>
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="duration">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"/>
                                            <polyline points="12 6 12 12 16 14"/>
                                        </svg>
                                        {exp.duration}
                                    </span>
                                </div>
                                
                                <p className="experience-description">{exp.description}</p>
                                
                                <div className="skills-tags">
                                    {exp.skills.map((skill, idx) => (
                                        <span key={idx} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;