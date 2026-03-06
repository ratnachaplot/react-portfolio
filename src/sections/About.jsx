import "../CSS/About.css";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="section-container">
                <h2 className="section-title fade-in-up">About Me</h2>
                <div className="about-content glass fade-in-up delay-200">
                    <p>
                        I am a Computer Science Engineering student with hands-on experience building full-stack web applications. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and enjoy creating seamless, performant digital experiences.
                    </p>
                    <p>
                        My expertise spans REST API design, JWT authentication, data visualization, and deploying production-ready applications. I am continuously learning and seeking opportunities to contribute to dynamic tech teams and grow as a developer.
                    </p>
                    <p>
                        Feel free to connect with me on LinkedIn or explore my GitHub profile to see some of my latest full-stack projects!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;