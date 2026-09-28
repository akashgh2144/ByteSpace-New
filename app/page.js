const courses = [
  ["Learn Figma from Basic", "image1.png", "perla.victor"], ["Build Digital Asset", "image2.png", "perla.victor"],
  ["The Power of Big Data", "image3.png", "perla.victor"], ["Balancing Productivity with Joy", "image4.png", "perla.victor"],
  ["Mastering Money Management", "image2.png", "sarah.jones"], ["From Idea to Startup Success", "image1.png", "james.lee"]
];
const categories = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking"];
const paths = [["✣", "Design"], ["⌘", "Development"], ["▣", "IT & Software"], ["▦", "Business"], ["✦", "Marketing"], ["▧", "Photography"]];

function Logo() { return <span className="logo"><b>▶</b> ByteSpace</span>; }

function CourseCard({ course }) {
  return <article className="course-card"><div className="thumb"><img src={`/assets/${course[1]}`} alt="" /><span className="lesson">17 Lessons　 2 hours 16 mins</span></div><div className="course-body"><div className="course-title"><strong>{course[0]}</strong><span>4.5 ★</span></div><small>by <em>{course[2]}</em></small><div className="avatars"><span>●</span><span>●</span><span>●</span><span>●</span><b>2k+</b></div><div className="price">$25 <small>/ lifetime</small></div></div></article>;
}

export default function Home() {
  return <main>
    <section className="hero"><nav><Logo /><div className="nav-links"><a href="#courses">Home</a><a href="#courses">Courses</a><a href="#paths">Creators</a></div><div className="account"><span>Sign In</span><span>Join Us</span><span>▢</span></div></nav><div className="hero-copy"><h1>Access to Hundreds<br /><strong>Courses Available</strong></h1><p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p><div className="search"><span>⌕</span><input placeholder="Course, topic, creator" /><button>Search</button></div></div><div className="hero-art"><div className="lime-shape" /><img src="/assets/image1.png" alt="Student learning with a laptop" /><div className="float-card progress">Learning Progress<strong>55%</strong><i /></div><div className="float-card students">Happy Students<br /><b>4.5/5.0</b> <span>★★★★★</span></div></div></section>
    <div className="partners"><span>◉ Logoipsum</span><span>✺ Logoipsum</span><span>◉ Logoipsum</span><span>✤ Logoipsum</span><span>◌ Logoipsum</span></div>
    <section className="section" id="courses"><header><h2>Discover Your Passion,<br />Build Your Skills</h2><p>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different<br className="desktop" /> fields, from technology to the arts, and make a difference in your career and life.</p></header><div className="chips">{categories.map((category, index) => <button className={index === 0 ? "active" : ""} key={category}>{category}</button>)}<button className="more">+ More</button></div><div className="course-grid">{courses.map((course, index) => <CourseCard course={course} key={`${course[0]}-${index}`} />)}</div></section>
    <section className="section paths" id="paths"><header><h2>Explore Diverse Learning Paths at Bytespace</h2><p>At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various<br className="desktop" /> fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.</p></header><div className="path-grid">{paths.map(([icon, name]) => <div className="path" key={name}><b>{icon}</b><span>{name}</span></div>)}</div></section>
  </main>;
}