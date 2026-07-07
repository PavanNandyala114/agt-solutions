import "../styles/WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why-choose">
      <h2>Why Choose AGT Solutions?</h2>

      <div className="why-container">
        <div className="why-card">
          <div className="why-icon">👨‍🏫</div>
          <h3>Expert Trainers</h3>
          <p>Learn from industry experienced trainers.</p>
        </div>

        <div className="why-card">
          <div className="why-icon">💻</div>
          <h3>Live Projects</h3>
          <p>Work on real-time Java and React projects.</p>
        </div>

        <div className="why-card">
          <div className="why-icon">🎯</div>
          <h3>Mock Interviews</h3>
          <p>Practice interviews with real company scenarios.</p>
        </div>

        <div className="why-card">
          <div className="why-icon">📄</div>
          <h3>Resume Building</h3>
          <p>Get ATS-friendly resume preparation support.</p>
        </div>

        <div className="why-card">
          <div className="why-icon">🚀</div>
          <h3>Placement Support</h3>
          <p>Dedicated placement assistance until you succeed.</p>
        </div>

        <div className="why-card">
          <div className="why-icon">🤖</div>
          <h3>AI Career Support</h3>
          <p>Use AI tools for resume, interview and learning support.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;

