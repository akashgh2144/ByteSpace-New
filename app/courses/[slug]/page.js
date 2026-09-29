"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const previewImages = ["image1.png", "image2.png", "image3.png", "image4.png"];

function Logo() {
  return <Link className="logo" href="/"> <b>▶</b> ByteSpace</Link>;
}

function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Link className="footer-logo" href="/"><b>▶</b> ByteSpace</Link><p>Stay up to date with our latest features and releases by joining our newsletter.</p><div className="newsletter"><input placeholder="Enter your email" /><button>Search</button></div><small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small></div><div className="footer-links"><div><Link href="/courses">Featured Courses</Link><Link href="/courses">Featured Categories</Link><Link href="/courses">Business</Link><Link href="/courses">IT</Link><Link href="/courses">Design</Link></div><div><Link href="/courses">Development</Link><Link href="/courses">Marketing</Link><Link href="/courses">Photography</Link><Link href="/courses">Finance</Link><Link href="/courses">Sport</Link></div><div><Link href="#">Become a Creator</Link><Link href="#">Affiliate Program</Link><Link href="#">Contact</Link><Link href="#">Help</Link><Link href="#">About</Link></div></div></div><div className="footer-bottom"><span>© 2023 ByteSpace. All rights reserved.</span><span>Privacy Policy　 Terms of Service　 Cookies Settings</span></div></footer>;
}

export default function CourseDetailsPage() {
  const [activeTab, updateTab] = useState("about");
  useEffect(() => {
    const hashTab = window.location.hash.slice(1);
    if (["about", "lessons", "reviews"].includes(hashTab)) setActiveTab(hashTab);
  }, []);

  function setActiveTab(tab) {
    updateTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
  }

  return <main className="details-page"><section className="details-hero"><nav><Logo /><div className="nav-links"><Link href="/">Home</Link><Link href="/courses">Courses</Link><Link href="/#paths">Creators</Link></div><div className="account"><Link href="/login">Sign In</Link><Link href="/signup">Join Us</Link><span>▢</span></div></nav><div className="details-heading"><span>Build Digital Asset: A Comprehensive Guide</span><p>Unlock the Power of Digital Creation with Expert Guidance</p><small>by purepearl studio</small><div className="detail-stats"><b>▮ Intermediate</b><b>★ 4.8 (172 reviews)</b><b>♙ 199 Students</b></div></div><button className="share-button">↗ Share</button><div className="details-media"><img src="/assets/frame1.png" alt="Build Digital Asset course preview" /><button className="play-button">▶</button></div></section><section className="details-content"><article className="details-copy"><div className="detail-tabs">{[["about", "About"], ["lessons", "Lessons"], ["reviews", "Reviews"]].map(([tab, label]) => <button className={activeTab === tab ? "active" : ""} key={tab} onClick={() => setActiveTab(tab)}>{label}</button>)}</div>{activeTab === "about" && <AboutContent />}{activeTab === "lessons" && <LessonsContent />}{activeTab === "reviews" && <ReviewsContent />}</article><aside className="lesson-panel"><h2>112 Lessons (24 hours)</h2><ol><li>Introduction to Digital Assets <b>12 mins</b></li><li>Design Principles for Impact <b>21 mins</b></li><li>Advanced Techniques in Digital Creation <b>16 mins</b></li></ol><small>99 more videos</small><p>Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p><strong className="detail-price">$25<small>/lifetime</small></strong><button className="enroll-button">Enroll Now</button><h3>This course include</h3><ul><li>Learning Resources</li><li>Quality Lesson Videos</li><li>Certificate of Completion</li><li>Private Consultation</li></ul><hr /><b>PurePearl Studio</b><small>Professional Creator</small><button className="profile-button">See Full Profile</button></aside></section><Footer /></main>;
}

function AboutContent() {
  return <><h2>Description</h2><p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content.</p><p>In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.</p><p>As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations.</p><PreviewAndPoints /></>;
}

function LessonsContent() {
  const lessons = ["Introduction to Digital Assets", "Design Principles for Impact", "Advanced Techniques in Digital Creation", "Project Showcase and Critique", "Optimizing for Various Platforms", "Digital Asset Management Best Practices", "Monetization Strategies", "Capstone Project: Building Your Portfolio"];
  return <><h2>Explore the Modules</h2><p>Immerse yourself in a structured learning path with each module designed to build practical skills and confidence.</p><div className="lesson-list">{lessons.map((lesson, index) => <div className="lesson-row" key={lesson}><b>▣</b><span><strong>Module {index + 1}: {lesson}</strong><small>Learn practical techniques and workflows through guided lessons and examples.</small></span><em>{index === 0 ? "12 mins" : "21 mins"}</em></div>)}</div><h2>Lesson Content</h2><p>Engage with lessons that combine clear explanations, demonstrations and hands-on exercises.</p><div className="progress-box"><span>Learning Progress</span><strong>55%</strong><i /></div></>;
}

function ReviewsContent() {
  const reviews = [["PurePearl Studio", "This course provided a truly comprehensive understanding of digital asset creation."], ["Albert Flores", "The lessons are well structured and easy to follow."], ["Cody Fisher", "A practical course with useful techniques and examples."]];
  return <><h2>What Learners are Saying</h2><p>See what students think about their learning experience with this course.</p><div className="rating-summary"><strong>4.7</strong><div><b>★★★★★</b><span>★★★★★　 172 reviews</span></div></div><div className="review-filters"><button className="active">All ratings</button><button>5 ★</button><button>4 ★</button><button>3 ★</button><button>2 ★</button><button>1 ★</button></div><div className="review-list">{reviews.map(([name, text]) => <article key={name}><div><b>{name}</b><small>Course Learner</small></div><span>★★★★★ <em>2 years ago</em></span><p>{text}</p></article>)}</div></>;
}

function PreviewAndPoints() {
  return <><h2>Sneak Peek</h2><div className="sneak-peek">{previewImages.map((image) => <img key={image} src={`/assets/${image}`} alt="Course preview" />)}</div><h2>Key Points</h2><ul className="key-points"><li>Foundational Concepts</li><li>Design Principles Mastery</li><li>Advanced Techniques in Digital Creation</li><li>Project Showcase and Critique</li><li>Optimizing for Various Platforms</li><li>Digital Asset Management Best Practices</li><li>Monetization Strategies</li><li>Capstone Project: Building Your Portfolio</li></ul></>;
}