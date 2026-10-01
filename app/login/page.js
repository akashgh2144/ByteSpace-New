import Link from "next/link";
import Image from "next/image";
import loginRibbon from "../../Assets/login_page/loginpage6.png";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
export default function LoginPage() {
  return (
    <main className="auth-page">
      <section className="auth-art login-art">
        <Link className="auth-mark" href="/">
          <Image
            src="/assets/home/mainlogo.png"
            alt="ByteSpace"
            width={32}
            height={32}
          />
        </Link>
        <div className="auth-art-copy">
          <strong className="text-[20px] font-semibold">Sign in with ease</strong>
          <p className="text-[12px] font-normal mt-4">
            Experience a seamless and efficient sign-in process that grants you
            quick access to a world of knowledge.
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
      <AuthForm mode="login" />
    </main>
  );
}

function AuthForm({ mode }) {
  const isLogin = mode === "login";
  return (
    <section className="auth-panel">
      <div className="auth-card">
        <span className="auth-kicker">
          {isLogin ? "Sign In" : "Create an Account"}
        </span>
        <h1 className="font-[600]">
          {isLogin ? (
            "Welcome Back"
          ) : (
            <>
              Welcome to
              <br />
              ByteSpace
            </>
          )}
        </h1>
        <form>
          <label>
            Email
            <input type="email" placeholder="designer@example.com" />
          </label>
          {!isLogin && (
            <label>
              Full Name
              <input placeholder="Jamie Davis" />
            </label>
          )}
          <label >
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit" className="text-[12px] font-medium">{isLogin ? "Sign In" : "Continue"}</button>
        </form>
        {isLogin && (
          <>
            <div className="social-login">
              <i /> <span>or</span> <i />
            </div>
            <div className="social-buttons">
              <button type="button" aria-label="Continue with Facebook">
                <FaFacebookF />
              </button>
              <button type="button" aria-label="Continue with Google">
                <FaGoogle />
              </button>
            </div>
          </>
        )}
        <p className="auth-switch">
          {isLogin ? "New user?" : "Already have an account?"}{" "}
          <Link href={isLogin ? "/signup" : "/login"}>
            {isLogin ? "Create an account" : "Login"}
          </Link>
        </p>
      </div>
    </section>
  );
}
