import Hero from "../components/home/Hero/Hero";
import Partners from "../components/home/Partners/Partners";
import CourseDiscovery from "../components/home/CourseDiscovery/CourseDiscovery";
import LearningPaths from "../components/home/LearningPaths/LearningPaths";
import Growth from "../components/home/Growth/Growth";
import CreatorCTA from "../components/home/CreatorCTA/CreatorCTA";
import Community from "../components/home/Community/Community";
import Footer from "../components/home/Footer/Footer";

export default function Home() {
  return <main className="home-page"><Hero /><Partners /><CourseDiscovery /><LearningPaths /><Growth /><CreatorCTA /><Community /><Footer /></main>;
}
