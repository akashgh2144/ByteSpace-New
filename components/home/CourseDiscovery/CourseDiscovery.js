import CourseCard from "../../courses/CourseCard";
import courseImage1 from "../../../Assets/course_image.jpg";
import courseImage2 from "../../../Assets/course_image2.jpg";
import courseImage3 from "../../../Assets/course_image3.jpg";
import courseImage4 from "../../../Assets/course_image4.jpg";
import courseImage5 from "../../../Assets/course_image5.jpg";
import courseImage6 from "../../../Assets/course_image6.jpg";

const courses = [
  ["Learn Figma from Basic", courseImage1, "perla.victor"],
  ["Build Digital Asset", courseImage2, "perla.victor"],
  ["The Power of Big Data", courseImage3, "perla.victor"],
  ["Balancing Productivity with Joy", courseImage4, "perla.victor"],
  ["Mastering Money Management", courseImage5, "sarah.jones"],
  ["From Idea to Startup Success", courseImage6, "james.lee"],
];

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function CourseDiscovery() {
  return (
    <section className="section" id="courses">
      <header>
        <h2 className="text-4xl font-semibold">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="text-[14px] font-normal text-gray-400 mt-6">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different
          <br className="desktop" /> fields, from technology to the arts, and
          make a difference in your career and life.
        </p>
      </header>
      <div className="chips mt-14">
        {categories.map((category, index) => (
          <button className={index === 0 ? "active" : ""} key={category}>
            {category}
          </button>
        ))}
        <button className="more">+ More</button>
      </div>
      <div className="course-grid">
        {courses.map((course, index) => (
          <CourseCard course={course} key={`${course[0]}-${index}`} />
        ))}
      </div>
    </section>
  );
}
