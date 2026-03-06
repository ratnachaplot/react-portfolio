import "../CSS/Projects.css";
// We'll reuse the existing image imports for now, or you can update them later.
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import project7 from "../assets/images/project7.png";

const projectList = [
    {
        title: "Personal Portfolio Website",
        description: "A simple personal portfolio website built using pure HTML. The project focuses on semantic structure, accessibility, proper document flow, and clean content organization without styling or JavaScript.",
        image: project1,
        link: "https://ratnachaplot.github.io/portfolio-html/",
        github: "https://github.com/ratnachaplot",
        tech: ["HTML5", "Semantic Web"]
    },
    
    {
        title: "Responsive Portfolio Website",
        description: "A responsive and visually enhanced portfolio website created by extending an HTML-only project using CSS. The project demonstrates layout design using Flexbox and Grid, styling, animations, transitions, and responsive design principles.",
        image: project2,
        link: "https://ratnachaplot.github.io/portfolio-css/",
        github: "https://github.com/ratnachaplot",
        tech: ["HTML5", "CSS3", "Flexbox", "Grid"]
    },
    {
        title: "Smart Weather Dashboard",
        description: "A smart weather dashboard built using HTML, CSS, and JavaScript. It includes real-time weather data, recently viewed cities, demo mode, dynamic UI updates, and a responsive modern interface.",
        image: project3,
        link: "https://ratnachaplot.github.io/smart-weather-dashboard/",
        github: "https://github.com/ratnachaplot",
        tech: ["JavaScript", "HTML5", "CSS3", "Weather API"]
    },
    {
        title: "Dynamic Portfolio Website",
        description: "A dynamic and interactive portfolio website developed using React. The project showcases component-based architecture, state management, routing, and integration of various React features to create a modern web application.",
        image: project4,
        link: "https://reactfolio-personal-portfolio.netlify.app/",
        github: "https://github.com/ratnachaplot",
        tech: ["React.js", "State Management", "Routing"]
    },
    {
        title: "ExpenseIQ",
        description: "A personal finance dashboard featuring pie and bar charts for spending analysis. Integrates a live currency conversion API with session-level caching, and relies on React context and custom hooks for global state management.",
        image: project5,
        link: "https://expensetracker-zeta.vercel.app",
        github: "https://github.com/ratnachaplot/expenseiq",
        tech: ["React", "Recharts", "Tailwind CSS", "Exchange Rate API"]
    },
    {
        title: "Blog REST API",
        description: "A production-grade REST API utilizing refresh tokens in httpOnly cookies for XSS protection. Implements account lockout, rate limiting, pagination, search, file upload, and robust role-based access control.",
        image: project6,
        link: "https://blog-api-hcbo.onrender.com",
        github: "https://github.com/ratnachaplot/blog-api",
        tech: ["Node.js", "Express", "MongoDB", "JWT"]
    },
    {
        title: "AI Meeting Pro",
        description: "A full-stack AI meeting analyzer where users paste transcripts to receive summaries, key points, and action items using the LLaMA 3.3 70B model via Groq API. Features JWT authentication with bcrypt and per-user data isolation.",
        image: project7,
        link: "https://ai-meeting-pro.vercel.app",
        github: "https://github.com/ratnachaplot/ai-meeting-pro",
        tech: ["React", "Node.js", "MongoDB", "JWT", "Groq AI"]
    }
];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="section-container">
                <h2 className="section-title fade-in-up">Featured Projects</h2>
                <div className="project-grid fade-in-up delay-200">
                    {projectList.map((project, index) => (
                        <div key={index} className="project-card glass">
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech-stack">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-badge">{t}</span>
                                    ))}
                                </div>
                                <div className="project-links" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                        </svg>
                                        <span style={{ marginLeft: '0.5rem' }}>Code</span>
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <span>Live Demo</span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                            <polyline points="15 3 21 3 21 9"/>
                                            <line x1="10" y1="14" x2="21" y2="3"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;