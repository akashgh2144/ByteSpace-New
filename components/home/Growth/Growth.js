export default function Growth() {
  return (
    <section className="growth-section" id="home-growth">
      <div className="growth-panels">
        <div className="growth-panel growth-panel-path">
          <div className="growth-copy">
            <h2>Your Path to Professional Growth Starts Here!</h2>
            <p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
            <div className="growth-stats">
              <span><b>12K</b>Students</span>
              <span><b>70+</b>Courses</span>
              <span><b>16</b>Creators</span>
            </div>
          </div>
          <div className="growth-art"><img src="/assets/home/growth1.png" alt="Student learning with ByteSpace" /></div>
        </div>
        <div className="growth-panel growth-panel-create">
          <div className="growth-art"><img src="/assets/home/growth2.png" alt="Creator managing courses with ByteSpace" /></div>
          <div className="growth-copy">
            <h2>Create &amp; Manage<br />Courses Easily.</h2>
            <p>ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <ul>
              <li>Share Your Expertise</li>
              <li>Monetize Your Passion</li>
              <li>Flexibility and Autonomy</li>
              <li>Build a Community</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
