import "../CSS/Projects.css";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";

const projectList = [
    {
        title: "Personal Portfolio Website | HTML Project",
        description: "A simple personal portfolio website built using pure HTML. The project focuses on semantic structure, accessibility, proper document flow, and clean content organization without styling or JavaScript.",
        image: project1 ,
        link: "https://ratnachaplot.github.io/portfolio-html/"
    },
    {
        title: "Responsive Portfolio Website | CSS Project",
        description:"A responsive and visually enhanced portfolio website created by extending an HTML-only project using CSS. The project demonstrates layout design using Flexbox and Grid, styling, animations, transitions, and responsive design principles.",
        image: project2 ,
        link: "https://ratnachaplot.github.io/portfolio-css/"
    },
    {
        title:"Smart Weather Dashboard | JavaScript Project",
        description:"A smart weather dashboard built using HTML, CSS, and JavaScript. It includes real-time weather data, recently viewed cities, demo mode, dynamic UI updates, and a responsive modern interface.",
        image: project3 ,
        link:"https://ratnachaplot.github.io/smart-weather-dashboard/"
    },
    {
        title:"Dynamic Portfolio Website | React Project",
        description:"A dynamic and interactive portfolio website developed using React. The project showcases component-based architecture, state management, routing, and integration of various React features to create a modern web application.",
        image: project4 ,
        link:"https://ratnachaplot.github.io/portfolio-react/"
    }
];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2>My Projects</h2>
                <div className="project-grid">
                    {projectList.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;