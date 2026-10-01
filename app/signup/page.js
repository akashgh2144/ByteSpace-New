import Link from "next/link";
import Image from "next/image";
import loginRibbon from "../../Assets/login_page/loginpage6.png";

export default function SignupPage() {
  return (
    <main className="auth-page">
      <section className="auth-art signup-art">
        <Link className="auth-mark" href="/">
          <Image
            src="/assets/home/mainlogo.png"
            alt="ByteSpace"
            width={32}
            height={32}
          />
        </Link>
        <div className="auth-art-copy">
          <strong className="text-[20px] font-semibold">Sign up and come in</strong>
          <p>
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no
            cost.
          </p>
        </div>
        <div className="auth-collage" aria-hidden="true">
          <Image
            className="auth-course auth-course-back"
            src="/assets/login_page/loginpage2.png"
            alt=""
            width={280}
            height={200}
          />
          <Image
            className="auth-course auth-course-front"
            src="/assets/login_page/loginpage1.png"
            alt=""
            width={280}
            height={200}
          />
          <Image
            className="auth-students"
            src="/assets/login_page/loginpage3.png"
            alt=""
            width={205}
            height={90}
          />
          <Image
            className="auth-shape auth-triangle"
            src="/assets/login_page/loginpage4.png"
            alt=""
            width={105}
            height={105}
          />
          <Image
            className="auth-shape auth-ring"
            src="/assets/login_page/loginpage5.png"
            alt=""
            width={84}
            height={84}
          />
          <Image
            className="auth-shape auth-ribbon"
            src={loginRibbon}
            alt=""
            width={96}
            height={96}
          />
        </div>
      </section>
      <SignupForm />
    </main>
  );
}

function SignupForm() {
  return (
    <section className="auth-panel">
      <div className="auth-card">
        <span className="auth-kicker">Create an Account</span>
        <h1 className="font-[600]">
          Welcome to
          <br />
          ByteSpace
        </h1>
        <form>
          <label>
            Full Name
            <input placeholder="Jamie Davis" />
          </label>
          <label>
            Email
            <input type="email" placeholder="designer@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit">Continue</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}
