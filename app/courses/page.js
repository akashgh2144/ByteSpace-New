import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/common/Navbar";
import {
  FiBarChart2,
  FiChevronDown,
  FiClock,
  FiFilter,
  FiGrid,
  FiMessageCircle,
  FiSearch,
  FiStar,
} from "react-icons/fi";

const baseCourses = [
  ["Learn Figma from Basic", "course_image.jpg", "perla.victor"],
  ["Build Digital Asset", "course_image2.jpg", "perla.victor"],
  ["The Power of Big Data", "course_image3.jpg", "perla.victor"],
  ["Balancing Productivity and Joy", "course_image4.jpg", "perla.victor"],
  ["Mastering Money Management", "course_image5.jpg", "sarah.jones"],
  ["From Idea to Startup Success", "course_image6.jpg", "james.lee"],
];

const courses = Array.from(
  { length: 18 },
  (_, index) => baseCourses[index % baseCourses.length],
);

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];
const studentAvatars = [
  "/assets/home/Ellipse.png",
  "/assets/home/Ellipse%20(1).png",
  "/assets/home/Ellipse%20(2).png",
  "/assets/home/Ellipse%20(3).png",
];

function CourseCard({ course }) {
  const slug = course[0].toLowerCase().replaceAll(" ", "-");
  return (
    <Link className="course-card" href={`/courses/${slug}`}>
      <div className="thumb">
        <Image
          src={`/assets/${course[1]}`}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, 33vw"
        />
        <div className="lesson-meta">
          <span>
            <FiBarChart2 /> 17 Lessons
          </span>
          <span>
            <FiClock /> 2 hours 16 mins
          </span>
          <span>
            <FiMessageCircle /> 59 Comments
          </span>
        </div>
      </div>
      <div className="course-body">
        <div className="course-title">
          <strong>{course[0]}</strong>
          <span>
            4.5 <FiStar />
          </span>
        </div>
        <small>
          by <em>{course[2]}</em>
        </small>
        <div className="course-card-footer">
          <span className="level">
            <FiBarChart2 /> Beginner
          </span>
          <div className="avatars">
            {studentAvatars.map((avatar) => (
              <Image
                key={avatar}
                src={avatar}
                width={32}
                height={32}
                alt="Student"
              />
            ))}
            <b>26+</b>
          </div>
        </div>
        <div className="price">
          $25 <small>/ lifetime</small>
        </div>
      </div>
    </Link>
  );
}

export default function CoursesPage() {
  return (
    <main>
      <section className="course-hero">
        <Navbar />
        <div className="course-hero-copy">
          <h1>Find Your Next Course</h1>
          <div className="course-search">
            <FiSearch />
            <input placeholder="Search" />
            <button>
              Courses <FiChevronDown />
            </button>
          </div>
        </div>
      </section>
      <section className="section course-list">
        <div className="course-filters">
          <div className="course-filter-group">
            <button>
              <FiFilter /> Filter
            </button>
            <button>
              <FiBarChart2 /> Level
            </button>
            <button>
              <FiGrid /> Category
            </button>
          </div>
          <button className="course-sort">
            Most relevant <FiChevronDown />
          </button>
        </div>
        <div className="chips">
          {categories.map((category, index) => (
            <button className={index === 0 ? "active" : ""} key={category}>
              {category}
            </button>
          ))}
        </div>
        <div className="course-grid">
          {courses.map((course, index) => (
            <CourseCard course={course} key={`${course[0]}-${index}`} />
          ))}
        </div>
        <div className="pagination">
          <button aria-label="Previous page">
            <FiChevronDown />
          </button>
          <span className="current">1</span>
          <b>2</b>
          <b>3</b>
          <b>4</b>
          <b>5</b>
          <button aria-label="Next page">
            <FiChevronDown />
          </button>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="footer-logo" href="/">
              <b>▶</b> ByteSpace
            </Link>
            <p>
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <div className="newsletter">
              <input placeholder="Enter your email" />
              <button>Search</button>
            </div>
            <small>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </small>
          </div>
          <div className="footer-links">
            <div>
              <Link href="/courses">Featured Courses</Link>
              <Link href="/courses">Featured Categories</Link>
              <Link href="/courses">Business</Link>
              <Link href="/courses">IT</Link>
              <Link href="/courses">Design</Link>
            </div>
            <div>
              <Link href="/courses">Development</Link>
              <Link href="/courses">Marketing</Link>
              <Link href="/courses">Photography</Link>
              <Link href="/courses">Finance</Link>
              <Link href="/courses">Sport</Link>
            </div>
            <div>
              <Link href="#">Become a Creator</Link>
              <Link href="#">Affiliate Program</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Help</Link>
              <Link href="#">About</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2023 ByteSpace. All rights reserved.</span>
          <span>Privacy Policy　 Terms of Service　 Cookies Settings</span>
        </div>
      </footer>
    </main>
  );
}
