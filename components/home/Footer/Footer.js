import Link from "next/link";

function Brand() {
  return (
    <Link className="home-brand" href="/">
      <img src="/assets/home/mainlogo.png" alt="" />
      <strong>ByteSpace</strong>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Brand />
          <p>
            Stay up to date with our latest features and releases by joining our
            newsletter.
          </p>
          <div className="newsletter">
            <input placeholder="Enter your email" />
            <button>Search</button>
          </div>
          <small>
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </small>
        </div>
        <div className="footer-links">
          <div>
            <Link href="/courses">Featured Courses</Link>
            <Link href="/courses">Featured Categories</Link>
            <Link href="/courses">Business</Link>
            <Link href="/courses">IT</Link>
            <Link href="/courses">Design</Link>
          </div>
          <div>
            <Link href="/courses">Development</Link>
            <Link href="/courses">Marketing</Link>
            <Link href="/courses">Photography</Link>
            <Link href="/courses">Finance</Link>
            <Link href="/courses">Sport</Link>
          </div>
          <div>
            <Link href="/signup">Become a Creator</Link>
            <Link href="#">Affiliate Program</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Help</Link>
            <Link href="#">About</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2023 ByteSpace. All rights reserved.</span>
        <span className="footer-legal"><Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link><Link href="#">Cookies Settings</Link></span>
      </div>
    </footer>
  );
}
