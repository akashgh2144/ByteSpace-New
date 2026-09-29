import Link from "next/link";

export default function LoginPage() {
  return <main className="auth-page"><section className="auth-art login-art"><Link className="auth-mark" href="/">▶</Link><div className="auth-art-copy"><strong>Sign in with ease</strong><p>Experience a seamless and efficient sign-in process that grants you quick access to a world of knowledge.</p></div></section><AuthForm mode="login" /></main>;
}

function AuthForm({ mode }) {
  const isLogin = mode === "login";
  return <section className="auth-panel"><div className="auth-card"><span className="auth-kicker">{isLogin ? "Sign In" : "Create an Account"}</span><h1>{isLogin ? "Welcome Back" : <>Welcome to<br />ByteSpace</>}</h1><form><label>Email<input type="email" placeholder="designer@example.com" /></label>{!isLogin && <label>Full Name<input placeholder="Jamie Davis" /></label>}<label>Password<input type="password" placeholder="••••••••" /></label><button type="submit">{isLogin ? "Sign In" : "Continue"}</button></form>{isLogin && <div className="social-login"><i /> <span>or</span> <i /></div>}<p className="auth-switch">{isLogin ? "New user?" : "Already have an account?"} <Link href={isLogin ? "/signup" : "/login"}>{isLogin ? "Create an account" : "Login"}</Link></p></div></section>;
}