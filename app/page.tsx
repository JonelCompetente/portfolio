"use client";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="page-wrapper">

      <section id="home" className="hero-section">
        <header className="hero-header">
          <nav className="main-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        <div className="hero-content">
          <Image
            src="/mypicture.png"
            alt="My Picture"
            width={300}
            height={300}
            className="hero-image"
          />

          <h1 className="hero-title">
            <span className="hero-title-sub">Hi, I’m</span>
            <span className="hero-title-main">Jonel Competente</span>
            <span className="hero-title-sub">Computer Science Student</span>
          </h1>
        </div>
      </section>

      <section id="about" className="about-section page-wrapper">
        <div className="section-container">
          <h2 className="section-title about-title">ABOUT ME</h2>

          <div className="about-content-wrapper">
            <div className="about-description">
              <p>I'm currently pursuing my Bachelor’s Degree in Computer Science at Partido State University, where I've maintained a good academic record.</p>
              <p>My journey in technology began during College when I created my first web page.</p>
              <p>I believe in using my skills to make a positive impact and help bridge the digital divide.</p>
            </div>

            <div className="about-skills">
              <h3 className="skills-title">Technical Skills:</h3>

              <div className="skills-grid">

                <div className="skill-card html-card">
                  <Image src="/html5.svg" alt="HTML icon" width={60} height={60} className="skill-icon" />
                  <span className="skill-name">HTML</span>
                </div>

                <div className="skill-card css-card">
                  <Image src="/CSS.svg" alt="CSS icon" width={60} height={60} className="skill-icon" />
                  <span className="skill-name">CSS</span>
                </div>

                <div className="skill-card figma-card">
                  <Image src="/figma2.svg" alt="Figma icon" width={60} height={60} className="skill-icon" />
                  <span className="skill-name">Figma</span>
                </div>

                <div className="skill-card cpp-card">
                  <Image src="/C++.svg" alt="C++ icon" width={60} height={60} className="skill-icon" />
                  <span className="skill-name">C++</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="contact-section page-wrapper">
        <div className="section-container">
          <h2 className="section-title contact-main-title">Get In Touch with me!</h2>

          <div className="contact-wrapper">

            <div className="contact-card form-card">
              <h3 className="form-title">Send a Message</h3>

              <form action="#" method="POST">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your full name" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="your.example@email.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="What’s this about?" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={3} placeholder="Your message goes here..."></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            <div className="contact-card info-card">
              <h3 className="info-title">Contact Information</h3>

              <ul className="info-list">

                <li className="info-item">
                  <div className="info-icon-wrapper">
                    <Image src="/envelope.svg" alt="Email Icon" width={30} height={30} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Email</span>
                    <span className="info-value">Jonel@email.com</span>
                  </div>
                </li>

                <li className="info-item">
                  <div className="info-icon-wrapper">
                    <Image src="/phone.svg" alt="Phone Icon" width={30} height={30} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Phone</span>
                    <span className="info-value">+639704804190</span>
                  </div>
                </li>

                <li className="info-item">
                  <div className="info-icon-wrapper">
                    <Image src="/location.svg" alt="Location Icon" width={30} height={30} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Location</span>
                    <span className="info-value">Goa, Philippines</span>
                  </div>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
