import "../styles/Courses.css";

function Courses() {
  return (
    <section className="courses">
      <h2>Our Popular Courses</h2>

      <div className="course-container">
        <div className="course-card">
          <div className="course-icon">☕</div>
          <h3>Java Full Stack</h3>
          <p>Java, Spring Boot, React, MySQL, Microservices</p>
          <h4>Duration: 6 Months</h4>
          <button>Learn More</button>
        </div>

        <div className="course-card">
          <div className="course-icon">🐍</div>
          <h3>Python Full Stack</h3>
          <p>Python, Django, React, PostgreSQL</p>
          <h4>Duration: 5 Months</h4>
          <button>Learn More</button>
        </div>

        <div className="course-card">
          <div className="course-icon">🤖</div>
          <h3>AI & GenAI</h3>
          <p>LLM, RAG, Prompt Engineering, Vector Database</p>
          <h4>Duration: 4 Months</h4>
          <button>Learn More</button>
        </div>

        <div className="course-card">
          <div className="course-icon">☁️</div>
          <h3>DevOps & AWS</h3>
          <p>Docker, Kubernetes, Jenkins, AWS</p>
          <h4>Duration: 4 Months</h4>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Courses;