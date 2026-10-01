import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <section className="not-found-hero">
        <Navbar />
        <div className="not-found-content">
          <strong className="text-[280px] font-[600]">404</strong>
          <h1>The page you are looking for doesn&apos;t exist</h1>
          <p>Try to use a correct URL or go back to homepage to start again</p>
          <Link href="/">Back to Home</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
