import "../CSS/Education.css";

const educationData = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Geetanjali Institute of Technical Studies, Udaipur",
        duration: "2022 – Present",
        score: "CGPA: 9.0",
        icon: "🎓",
        status: "ongoing"
    },
    {
        degree: "Senior Secondary (XII)",
        institution: "St. Gregorios Sr. Sec. School, Udaipur",
        duration: "2022",
        score: "70.80%",
        icon: "📚",
        status: "completed"
    },
    {
        degree: "Secondary (X)",
        institution: "St. Thomas Sr. Sec. School, Fatehnagar",
        duration: "2020",
        score: "86.50%",
        icon: "📖",
        status: "completed"
    }
];

const Education = () => {
    return (
        <section className="education" id="education">
            <div className="education-container">
                <h2>Education</h2>
                <p className="section-subtitle">My Academic Journey</p>
                
                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <div key={index} className={`education-item ${edu.status}`}>
                            <div className="timeline-marker">
                                <span className="timeline-icon">{edu.icon}</span>
                            </div>
                            <div className="education-content">
                                <div className="education-header">
                                    <h3>{edu.degree}</h3>
                                    {edu.status === "ongoing" && (
                                        <span className="status-badge">Currently Pursuing</span>
                                    )}
                                </div>
                                <h4>{edu.institution}</h4>
                                <div className="education-details">
                                    <span className="duration">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"/>
                                            <polyline points="12 6 12 12 16 14"/>
                                        </svg>
                                        {edu.duration}
                                    </span>
                                    <span className="score">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                        </svg>
                                        {edu.score}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;