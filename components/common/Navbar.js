import Link from "next/link";
import { LiaShoppingBagSolid } from "react-icons/lia";

export default function Navbar() {
  return (
    <nav>
      <Link className="logo" href="/">
        <img src="/assets/home/mainlogo.png" alt="" />
        <strong>ByteSpace</strong>
      </Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/#paths">Creators</Link>
      </div>
      <div className="account">
        <Link href="/login">Sign In</Link>
        <Link href="/signup">Join Us</Link>
        <LiaShoppingBagSolid aria-label="Shopping bag" />
      </div>
    </nav>
  );
}