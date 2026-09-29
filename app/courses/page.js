import Link from "next/link";
import Navbar from "../../components/common/Navbar";

const courses = [
  ["Learn Figma from Basic", "frame.png", "perla.victor"],
  ["Build Digital Asset", "frame1.png", "perla.victor"],
  ["The Power of Big Data", "frame2.png", "perla.victor"],
  ["Balancing Productivity with Joy", "frame3.png", "perla.victor"],
  ["Mastering Money Management", "frame4.png", "sarah.jones"],
  ["From Idea to Startup Success", "frame5.png", "james.lee"]
];

const categories = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"];

function CourseCard({ course }) {
  const slug = course[0].toLowerCase().replaceAll(" ", "-");
  return <Link className="course-card" href={`/courses/${slug}`}><div className="thumb"><img src={`/assets/frame/${course[1]}`} alt="" /><span className="lesson">17 Lessons　 2 hours 16 mins</span></div><div className="course-body"><div className="course-title"><strong>{course[0]}</strong><span>4.5 ★</span></div><small>by <em>{course[2]}</em></small><div className="avatars"><span>●</span><span>●</span><span>●</span><span>●</span><b>2k+</b></div><div className="price">$25 <small>/ lifetime</small></div></div></Link>;
}

export default function CoursesPage() {
  return <main>
    <section className="course-hero"><Navbar /><div className="course-hero-copy"><h1>Find Your Next Course</h1><div className="course-search"><span>⌕</span><input placeholder="Search" /><button>Courses　⌄</button></div></div></section>
    <section className="section course-list"><header><h2>Discover Your Passion,<br />Build Your Skills</h2><p>Explore practical courses and learn from creators across a range of subjects.</p></header><div className="chips">{categories.map((category, index) => <button className={index === 0 ? "active" : ""} key={category}>{category}</button>)}</div><div className="course-grid">{courses.concat(courses, courses).map((course, index) => <CourseCard course={course} key={`${course[0]}-${index}`} />)}</div><div className="pagination"><button aria-label="Previous page">‹</button><span>1</span><b>2</b><b>3</b><b>4</b><b>5</b><button aria-label="Next page">›</button></div></section>
    <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Link className="footer-logo" href="/"><b>▶</b> ByteSpace</Link><p>Stay up to date with our latest features and releases by joining our newsletter.</p><div className="newsletter"><input placeholder="Enter your email" /><button>Search</button></div><small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small></div><div className="footer-links"><div><Link href="/courses">Featured Courses</Link><Link href="/courses">Featured Categories</Link><Link href="/courses">Business</Link><Link href="/courses">IT</Link><Link href="/courses">Design</Link></div><div><Link href="/courses">Development</Link><Link href="/courses">Marketing</Link><Link href="/courses">Photography</Link><Link href="/courses">Finance</Link><Link href="/courses">Sport</Link></div><div><Link href="#">Become a Creator</Link><Link href="#">Affiliate Program</Link><Link href="#">Contact</Link><Link href="#">Help</Link><Link href="#">About</Link></div></div></div><div className="footer-bottom"><span>© 2023 ByteSpace. All rights reserved.</span><span>Privacy Policy　 Terms of Service　 Cookies Settings</span></div></footer>
  </main>;
}