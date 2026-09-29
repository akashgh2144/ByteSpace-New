"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AboutTab from "../../../components/courses/AboutTab";
import LessonsTab from "../../../components/courses/LessonsTab";
import ReviewsTab from "../../../components/courses/ReviewsTab";

function Logo() {
  return <Link className="logo" href="/"><img src="/assets/home/mainlogo.png" alt="" /><strong>ByteSpace</strong></Link>;
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
  return <AboutTab />;
}

function LessonsContent() {
  return <LessonsTab />;
}

function ReviewsContent() {
  return <ReviewsTab />;
}

