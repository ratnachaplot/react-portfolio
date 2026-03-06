import "../CSS/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <h2 className="section-title fade-in-up">Get In Touch</h2>
        <div className="contact-wrapper fade-in-up delay-200">
          <form className="contact-form glass">
            <div className="form-group">
              <input type="text" id="name" placeholder=" " required />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="form-group">
              <textarea id="message" placeholder=" " required rows="5"></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit" className="submit-btn cta-button primary">
              <span>Send Message</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
