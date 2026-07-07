import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Student Success Stories</h2>

      <div className="testimonial-container">
        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p>"AGT helped me improve my Java skills and crack interviews."</p>
          <h4>Ramesh</h4>
          <span>Java Developer</span>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p>"The mock interviews and resume support were very useful."</p>
          <h4>Priya</h4>
          <span>React Developer</span>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p>"I got confidence through live projects and placement training."</p>
          <h4>Kiran</h4>
          <span>Full Stack Developer</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;