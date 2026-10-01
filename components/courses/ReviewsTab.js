import NextImage from "next/image";
import reviewImage1 from "../../Assets/review/review.png";
import reviewImage2 from "../../Assets/review/review2.png";
import reviewImage3 from "../../Assets/review/review3.png";
import reviewImage4 from "../../Assets/review/review4.png";
import { FaStar } from "react-icons/fa";
const ratingCounts = [720, 120, 21, 12, 16];
const reviewImages = [reviewImage1, reviewImage2, reviewImage3, reviewImage4];

const reviews = [
  [
    "PurePearl Studio",
    "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  ],
  [
    "Albert Flores",
    "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I’ve learned!",
  ],
  [
    "Cody Fisher",
    "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  ],
  [
    "Brooklyn Simmons",
    "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  ],
];

export default function ReviewsTab() {
  return (
    <>
      <h2>What Learners Are Saying</h2>
      <p className="text-[12px]">
        Discover what our learners have to say about their experience with Build
        Digital Assets: A Comprehensive Guide. Read reviews and ratings from
        individuals who have embarked on the transformative journey of mastering
        digital asset creation.
      </p>
      <div className="rating-summary">
        <strong>
          Ratings:<b>4.7</b>
        </strong>
        <div className="rating-bars">
          {ratingCounts.map((count, index) => (
            <div key={count}>
              <i>
                <b
                  style={{
                    width: `${index === 0 ? 94 : index === 1 ? 35 : 7}%`,
                  }}
                />
              </i>
              <span>★★★★★</span>
              <em>{count}</em>
            </div>
          ))}
        </div>
      </div>
      <h2 className="reviews-heading">Individual Reviews:</h2>
      <div className="review-filters">
        {[
          ["All ratings", true],
          ["5", false],
          ["4", false],
          ["3", false],
          ["2", false],
          ["1", false],
        ].map(([label, active]) => (
          <button className={active ? "active" : ""} key={label}>
            {label !== "All ratings" && <FaStar />}
            {label}
          </button>
        ))}
      </div>
      <div className="review-list">
        {reviews.map(([name, text], index) => (
          <article key={name}>
            <header>
              <NextImage
                src={reviewImages[index]}
                alt=""
                width={28}
                height={28}
              />
              <div>
                <b>{name}</b>
                <small>UI/UX Designer</small>
              </div>
              <em>a year ago</em>
            </header>
            <span>★★★★★</span>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </>
  );
}
