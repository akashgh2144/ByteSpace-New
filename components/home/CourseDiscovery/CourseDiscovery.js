import Link from "next/link";
import Image from "next/image";
import { FiBarChart2 } from "react-icons/fi";
import courseImage1 from "../../../Assets/course_image.jpg";
import courseImage2 from "../../../Assets/course_image2.jpg";
import courseImage3 from "../../../Assets/course_image3.jpg";
import courseImage4 from "../../../Assets/course_image4.jpg";
import courseImage5 from "../../../Assets/course_image5.jpg";
import courseImage6 from "../../../Assets/course_image6.jpg";
import avatar1 from "../../../Assets/ellipse/Ellipse.png";
import avatar2 from "../../../Assets/ellipse/ellipse1.png";
import avatar3 from "../../../Assets/ellipse/ellipse2.png";
import avatar4 from "../../../Assets/ellipse/ellipse3.png";
import avatar5 from "../../../Assets/ellipse/ellipse4.png";
import { GiNetworkBars } from "react-icons/gi";

const courses = [
  ["Learn Figma from Basic", courseImage1, "perla.victor"],
  ["Build Digital Asset", courseImage2, "perla.victor"],
  ["The Power of Big Data", courseImage3, "perla.victor"],
  ["Balancing Productivity with Joy", courseImage4, "perla.victor"],
  ["Mastering Money Management", courseImage5, "sarah.jones"],
  ["From Idea to Startup Success", courseImage6, "james.lee"],
];

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
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

function CourseCard({ course }) {
  return (
    <Link
      className="course-card"
      href={`/courses/${course[0].toLowerCase().replaceAll(" ", "-")}`}
    >
      <div className="thumb">
        <Image src={course[1]} alt="" width={300} height={200} />
        <div className="lesson-meta">
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
          <span>59 Comments</span>
        </div>
      </div>
      <div className="course-body">
        <div className="course-title">
          <strong>{course[0]}</strong>
          <span>4.5 ★</span>
        </div>
        <small>
          by <em>{course[2]}</em>
        </small>
        <div className="course-card-footer">
          <div className="level">
            
            <GiNetworkBars aria-hidden="true" />
            Beginner
          </div>
          <div className="avatars">
            {avatars.map((avatar) => (
              <Image
                key={avatar.src}
                src={avatar}
                alt=""
                width={24}
                height={24}
              />
            ))}
            <b>2k+</b>
          </div>
        </div>
        <div className="price">
          $25 <small>/ lifetime</small>
        </div>
      </div>
    </Link>
  );
}

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
