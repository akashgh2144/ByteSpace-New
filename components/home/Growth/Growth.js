import Image from "next/image";
export default function Growth() {
  return (
    <section className="growth-section" id="home-growth">
      <div className="growth-panels">
        <div className="growth-panel growth-panel-path">
          <div className="growth-copy">
            <h2 className="font-[600]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-[14px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="growth-stats">
              <span className="text-[12px]">
                <b>12K</b>Students
              </span>
              <span className="text-[12px]">
                <b>70+</b>Courses
              </span>
              <span className="text-[12px]">
                <b>16</b>Creators
              </span>
            </div>
          </div>
          <div className="growth-art">
            <Image
              src="/assets/home/growth1.png"
              alt="Student learning with ByteSpace"
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="growth-panel growth-panel-create">
          <div className="growth-art">
            <Image
              src="/assets/home/growth2.png"
              alt="Creator managing courses with ByteSpace"
              width={500}
              height={300}
            />
          </div>
          <div className="growth-copy">
            <h2 className="font-[600]">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="text-[14px]">
              <strong>ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul>
              <li className="text-[12px] font-[550] ">Share Your Expertise</li>
              <li className="text-[12px] font-[550]">Monetize Your Passion</li>
              <li className="text-[12px] font-[550]">
                Flexibility and Autonomy
              </li>
              <li className="text-[12px] font-[550]">Build a Community</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
