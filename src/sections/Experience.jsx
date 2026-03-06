import "../CSS/Experience.css";

const experienceData = [
    {
        role: "Web Development Internship",
        company: "IBM SkillsBuild",
        location: "Remote",
        duration: "July – August 2024",
        description: "Collaborated on group projects building interactive web interfaces, strengthening team coding practices and modern development workflows.",
        skills: ["Web Development", "Team Collaboration", "Frontend"],
        icon: "💼"
    },
    {
        role: "Web Development Internship",
        company: "Main Flow Services & Technologies",
        location: "Remote",
        duration: "May – June 2024",
        description: "Built UI components using HTML, CSS, and JavaScript. Improved responsive design principles and self-learning skills through hands-on frontend development.",
        skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        icon: "🚀"
    }
];

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="section-container">
                <h2 className="section-title fade-in-up">Experience</h2>
                <div className="experience-timeline fade-in-up delay-200">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="timeline-marker">
                                <span className="timeline-icon">{exp.icon}</span>
                            </div>
                            <div className="experience-content glass">
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
                                        <span key={idx} className="skill-tag-small">{skill}</span>
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