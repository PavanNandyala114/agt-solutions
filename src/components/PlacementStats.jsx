import "../styles/PlacementStats.css";

function PlacementStats() {
  return (
    <section className="stats">
      <h2>Our Placement Achievements</h2>

      <div className="stats-container">
        <div className="stat-card">
          <h3>500+</h3>
          <p>Students Trained</p>
        </div>

        <div className="stat-card">
          <h3>300+</h3>
          <p>Students Placed</p>
        </div>

        <div className="stat-card">
          <h3>50+</h3>
          <p>Hiring Companies</p>
        </div>

        <div className="stat-card">
          <h3>95%</h3>
          <p>Placement Support</p>
        </div>
      </div>
    </section>
  );
}

export default PlacementStats;