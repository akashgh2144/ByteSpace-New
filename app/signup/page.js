import Link from "next/link";

export default function SignupPage() {
  return <main className="auth-page"><section className="auth-art signup-art"><Link className="auth-mark" href="/"><img src="/assets/home/mainlogo.png" alt="ByteSpace" /></Link><div className="auth-art-copy"><strong>Sign up and come in</strong><p>The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.</p></div></section><SignupForm /></main>;
}

function SignupForm() {
  return <section className="auth-panel"><div className="auth-card"><span className="auth-kicker">Create an Account</span><h1>Welcome to<br />ByteSpace</h1><form><label>Full Name<input placeholder="Jamie Davis" /></label><label>Email<input type="email" placeholder="designer@example.com" /></label><label>Password<input type="password" placeholder="••••••••" /></label><button type="submit">Continue</button></form><p className="auth-switch">Already have an account? <Link href="/login">Login</Link></p></div></section>;
}