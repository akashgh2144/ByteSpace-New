import { FiVideo } from "react-icons/fi";

const lessons = [
  [
    "Introduction to Digital Assets",
    'Lay the groundwork with lessons like "Understanding Digital Elements" and "Navigating Design Software Tools." Dive into the essentials of digital asset creation.',
  ],
  [
    "Design Principles for Impact",
    'Master the principles that drive impactful designs with lessons such as "Color Theory in Digital Design" and "Typography Essentials." Elevate your visual communication skills.',
  ],
  [
    "User-Centric Design Strategies",
    'Understand "Design Thinking in Digital Creation" and delve into "User Experience (UX) Essentials." Craft digital assets with a focus on user-centric design.',
  ],
  [
    "Interactive Media and Engagement",
    'Engage your audience with lessons like "Creating Interactive Presentations" and "Integrating Multimedia Elements." Master the art of creating immersive digital experiences.',
  ],
  [
    "Project Showcase and Critique",
    'Perfect your presentation skills with "Effective Presentation Techniques" and embrace collaboration with "Peer Critique and Collaboration." Showcase your work with confidence.',
  ],
  [
    "Optimizing Digital Assets for Various Platforms",
    'Adapt your digital creations for "Mobile Platforms" and optimize for "Social Media." Ensure widespread accessibility and engagement across diverse digital landscapes.',
  ],
];

export default function LessonsTab() {
  return (
    <>
      <h2>Explore the Modules</h2>
      <p className="text-[12px]">
        Immerse yourself in the course content as we break down each module into
        comprehensive lessons, providing practical insights and hands-on
        experiences.
      </p>
      <h2>Lesson List</h2>
      <div className="lesson-list">
        {lessons.map(([title, description], index) => (
          <div className="lesson-row" key={title}>
            <b>
              <FiVideo />
            </b>
            <span>
              <strong className="text-[12px] font-semibold">
                Module {index + 1}: {title}
              </strong>
              <small className="text-[12px]">{description}</small>
            </span>
          </div>
        ))}
      </div>
      <h2>Lesson Content</h2>
      <p className="text-[12px]">
        Engage with each lesson through captivating video content, detailed
        textual explanations, and interactive elements. Download resources,
        complete assignments, and test your understanding with quizzes.
      </p>
      <h2>Lesson Progress Tracking</h2>
      <p className="text-[12px]">
        Witness your growth as you complete lessons, with an intuitive progress
        tracking feature guiding you through your learning journey.
      </p>
      <div className="progress-box">
        <span className="text-[12px]">Learning Progress</span>
        <strong>55%</strong>
        <i>
          <b />
        </i>
      </div>
    </>
  );
}
