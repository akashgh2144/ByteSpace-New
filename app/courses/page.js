import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import CourseCard from "../../components/courses/CourseCard";
import {
  FiBarChart2,
  FiChevronDown,
  FiFilter,
  FiGrid,
  FiSearch,
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
      <Footer />
    </main>
  );
}
