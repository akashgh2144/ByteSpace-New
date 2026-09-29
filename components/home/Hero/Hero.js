import Navbar from "../../common/Navbar";

export default function Hero() {
  return (
    <section className="hero">
      <Navbar />
      <div className="hero-copy">
        <h1>
          Access to Hundreds
          <br />
          <strong>Courses Available</strong>
        </h1>
        <p>
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="search">
          <span>⌕</span>
          <input placeholder="Course, topic, creator" />
          <button>Search</button>
        </div>
      </div>
      <div className="hero-art">
        <div className="lime-shape" />
        <img src="/assets/image1.png" alt="Student learning with a laptop" />
        <div className="float-card progress">
          Learning Progress<strong>55%</strong>
          <i />
        </div>
        <div className="float-card students">
          Happy Students
          <br />
          <b>4.5/5.0</b> <span>★★★★★</span>
        </div>
      </div>
    </section>
  );
}
