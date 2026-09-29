const previewImages = [
  "Courses1.jpg",
  "Courses2.jpg",
  "Courses3.jpg",
  "Courses4.jpg",
];

export default function AboutTab() {
  return (
    <>
      <h2>Description</h2>
      <p>
        Embark on an enlightening exploration into the world of digital creation
        with our comprehensive course, “Build Digital Assets: A Comprehensive
        Guide.” This transformative learning experience invites you to delve
        deep into the intricacies of crafting impactful digital content.
      </p>
      <p>
        In the initial modules, you&apos;ll establish a solid foundation by
        immersing yourself in the foundational concepts that form the backbone
        of digital asset creation. Understand the fundamental elements that
        constitute compelling digital content and gain proficiency in leveraging
        these elements to communicate effectively in the digital realm.
      </p>
      <p>
        As you progress through the course, you&apos;ll ascend to higher levels
        of expertise, delving into the nuances of design principles that drive
        impactful creations.
      </p>
      <h2>Sneak Peek</h2>
      <div className="sneak-peek">
        {previewImages.map((image) => (
          <img
            key={image}
            src={`/assets/courses/${image}`}
            alt="Course preview"
          />
        ))}
      </div>
      <h2>Key Points</h2>
      <ul className="key-points">
        <li>Foundational Concepts</li>
        <li>Design Principles Mastery</li>
        <li>Advanced Techniques in Digital Creation</li>
        <li>Project Showcase and Critique</li>
        <li>Optimizing for Various Platforms</li>
        <li>Digital Asset Management Best Practices</li>
        <li>Monetization Strategies</li>
        <li>Capstone Project: Building Your Portfolio</li>
      </ul>
    </>
  );
}
