import Image from "next/image";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import CourseCard from "../../components/courses/CourseCard";
import { FiBarChart2, FiFilter, FiGrid } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";

const creatorCourses = [
  ["Learn Figma from Basic", "course_image.jpg", "purepearl studio"],
  ["Build Digital Asset", "course_image2.jpg", "purepearl studio"],
  ["The Power of Big Data", "course_image3.jpg", "purepearl studio"],
  ["Balancing Productivity and Joy", "course_image4.jpg", "purepearl studio"],
  ["Mastering Money Management", "course_image5.jpg", "purepearl studio"],
  ["From Idea to Startup Success", "course_image6.jpg", "purepearl studio"],
];

export default function CreatorsPage() {
  return (
    <main className="creator-page">
      <section className="creator-hero">
        <Navbar />
        <div className="creator-profile">
          <Image
            className="creator-avatar"
            src="/assets/courses/creator.jpg"
            alt="PurePearl Studio"
            width={76}
            height={76}
          />
          <div>
            <div className="creator-name">
              <h1>PurePearl Studio</h1>
              <span className="text-[12px]">Creator</span>
            </div>
            <small className="text-[12px]">Passionate UI/UX Web designer</small>
          </div>
        </div>
        <div className="creator-copy">
          <p className="text-[12px] ">
            Welcome to the creative world of Creator&apos;s Name. Here,
            you&apos;ll discover the passion, expertise, and inspiration that
            drive my creative journey. Let&apos;s explore and learn together!
          </p>
          <p className="text-[12px] ">
            Join me in my creative portfolio, showcasing a glimpse of my
            artistic endeavors. From digital designs to multimedia projects,
            each piece tells a unique story. Explore the world of creativity
            with me.
          </p>
        </div>
        <div className="creator-stats">
          <span className="text-[12px]">
            <b className="text-[12px]">3</b> Products
          </span>
          <span className="text-[12px]">
            <b className="text-[12px]">12</b> Followers
          </span>
        </div>
        <button className="creator-follow text-[12px] ">Follow</button>
      </section>
      <section className="section course-list creator-content">
        <div className="creator-toolbar">
          <div>
            <button className="text-[12px]">
              <FiFilter size={16} strokeWidth={3} /> Filter
            </button>
            <button className="text-[12px]">
              <FiBarChart2 size={16} strokeWidth={3} /> Level
            </button>
            <button className="text-[12px]">
              <MdOutlineCategory size={18} className="font-bold" /> Category
            </button>
          </div>
          <button className="text-[12px]">
            <FiFilter /> Most relevant
          </button>
        </div>
        <div className="course-grid">
          {creatorCourses.map((course) => (
            <CourseCard course={course} key={course[0]} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
