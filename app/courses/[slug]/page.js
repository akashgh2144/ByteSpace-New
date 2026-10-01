"use client";
import { BsCardHeading, BsPersonVcard } from "react-icons/bs";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../../../components/common/Navbar";
import AboutTab from "../../../components/courses/AboutTab";
import LessonsTab from "../../../components/courses/LessonsTab";
import ReviewsTab from "../../../components/courses/ReviewsTab";
import Footer from "../../../components/common/Footer";
import {
  FiBarChart2,
  FiPlay,
  FiShare2,
  FiStar,
  FiUsers,
  FiVideo,
} from "react-icons/fi";

export default function CourseDetailsPage() {
  const [activeTab, updateTab] = useState("about");
  useEffect(() => {
    const hashTab = window.location.hash.slice(1);
    if (["about", "lessons", "reviews"].includes(hashTab))
      setActiveTab(hashTab);
  }, []);

  function setActiveTab(tab) {
    updateTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
  }

  return (
    <main className="details-page">
      <section className="details-hero">
        <Navbar />
        <div className="details-heading">
          <span>Build Digital Asset: A Comprehensive Guide</span>
          <p className="text-[16px] font-[400] mt-4">
            Unlock the Power of Digital Creation with Expert Guidance
          </p>
          <small className="text-[12px] font-[300]">
            by <span className="text-green-500">purepearl studio</span>
          </small>
          <div className="detail-stats">
            <b>
              <FiBarChart2 /> Intermediate
            </b>
            <b>
              <FiStar /> 4.8 (172 reviews)
            </b>
            <b>
              <FiUsers /> 199 Students
            </b>
          </div>
        </div>
        <button className="share-button">
          <FiShare2 /> Share
        </button>
        <div className="details-media">
          <Image
            src="/assets/frame1.png"
            alt="Build Digital Asset course preview"
            width={582}
            height={388}
          />
          <button className="play-button" aria-label="Play course preview">
            <span>
              <FiPlay size={24} fill="currentColor" />
            </span>
          </button>
        </div>
      </section>
      <section className="details-content">
        <article className="details-copy">
          <div className="detail-tabs">
            {[
              ["about", "About"],
              ["lessons", "Lessons"],
              ["reviews", "Reviews"],
            ].map(([tab, label]) => (
              <button
                className={activeTab === tab ? "active" : ""}
                key={tab}
                onClick={() => setActiveTab(tab)}
              >
                {label}
              </button>
            ))}
          </div>
          {activeTab === "about" && <AboutContent />}
          {activeTab === "lessons" && <LessonsContent />}
          {activeTab === "reviews" && <ReviewsContent />}
        </article>
        <aside className="lesson-panel -top-14 left-6">
          <h2>112 Lessons (24 hours)</h2>
          <ol>
            <li>
              Introduction to Digital Assets <b>12 mins</b>
            </li>
            <li>
              Design Principles for Impact <b>21 mins</b>
            </li>
            <li>
              Advanced Techniques in Digital Creation <b>16 mins</b>
            </li>
          </ol>
          <p className="text-[14px]">99 more videos</p>
          <p>
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>
          <strong className="detail-price">
            $25<small>/lifetime</small>
          </strong>
          <button className="enroll-button ">Enroll Now</button>
          <h3>This course include</h3>
          <ul>
            <li>
              <BsCardHeading /> Learning Resources
            </li>
            <li>
              <FiVideo /> Quality Lesson Videos
            </li>
            <li>
              <BsPersonVcard /> Certificate of Completion
            </li>
            <li>
              <FiUsers /> Private Consultation
            </li>
          </ul>
          <hr />
          <b>PurePearl Studio</b>
          <small>Professional Creator</small>
          <button className="profile-button">See Full Profile</button>
        </aside>
      </section>
      <Footer />
    </main>
  );
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
