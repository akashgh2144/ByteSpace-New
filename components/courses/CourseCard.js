import Link from "next/link";
import Image from "next/image";
import { FiBarChart2 } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";
const avatars = [
  "/assets/home/Ellipse.png",
  "/assets/home/Ellipse%20(1).png",
  "/assets/home/Ellipse%20(2).png",
  "/assets/home/Ellipse%20(3).png",
];

function getImageSource(image) {
  return typeof image === "string" ? `/assets/${image}` : image;
}

export default function CourseCard({ course }) {
  const slug = course[0].toLowerCase().replaceAll(" ", "-");

  return (
    <Link className="course-card" href={`/courses/${slug}`}>
      <div className="thumb">
        <Image
          src={getImageSource(course[1])}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, 33vw"
        />
        <div className="lesson-meta">
          <span>
             17 Lessons
          </span>
          <span>
            2 hours 16 mins
          </span>
          <span>
            59 Comments
          </span>
        </div>
      </div>
      <div className="course-body">
        <div className="course-title">
          <strong>{course[0]}</strong>
          <span>
            4.5<IoMdStar />
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
            {avatars.map((avatar) => (
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
