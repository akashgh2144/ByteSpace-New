import {
  FiCamera,
  FiCode,
  FiGrid,
  FiMonitor,
  FiPenTool,
  FiRadio,
} from "react-icons/fi";

const paths = [
  [FiPenTool, "Design"],
  [FiCode, "Development"],
  [FiMonitor, "IT & Software"],
  [FiGrid, "Business"],
  [FiRadio, "Marketing"],
  [FiCamera, "Photography"],
];

export default function LearningPaths() {
  return (
    <section className="section paths" id="paths">
      <header>
        <h1 className="text-4xl font-semibold">Explore Diverse Learning Paths at Bytespace</h1>
        <p className="text-[14px] font-normal text-gray-400 mt-6">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various
          <br className="desktop" /> fields, ensuring there&apos;s something for
          everyone. Unleash your potential and explore our carefully curated
          categories.
        </p>
      </header>
      <div className="path-grid">
        {paths.map(([Icon, name]) => (
          <div className="path" key={name}>
            <b>
              <Icon aria-hidden="true" />
            </b>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
