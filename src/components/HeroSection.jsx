import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Build Your Career with AGT Solutions</h1>

        <p>
          Learn Java Full Stack, React, Spring Boot, Microservices, GenAI and
          get placed in top companies.
        </p>

        <div>
          <button className="primary-btn">Explore Courses</button>
          <button className="secondary-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;