import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const FOCUS =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#0b2cf2]/40";

const card =
  "absolute rounded-[1.1em] p-[.7em] text-[#141420] shadow-[0_1.6em_3em_rgba(0,0,60,.28)]";
const cardTitle = "text-[.9em] font-semibold leading-[1.2] tracking-[-.01em]";
const by = "mb-[.5em] mt-[.25em] block text-[.5em] text-[#7b7f8c]";
const pill =
  "inline-block whitespace-nowrap rounded-[.6em] bg-[#ebecf0]/90 px-[.8em] py-[.45em] text-[.52em] font-medium text-[#41444f]";
const level =
  "inline-flex items-center gap-[.5em] whitespace-nowrap rounded-[.6em] bg-[#f1f2f6] px-[.8em] py-[.45em] text-[.52em] font-medium text-[#41444f]";
const rate = "whitespace-nowrap text-[.65em] font-semibold";

const tones = [
  "#f2b38c",
  "#6b4a3a",
  "#e8c9a8",
  "#2f2a2a",
  "#c98a6b",
  "#8a5a44",
];

function LevelIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="h-[1.1em] w-[1.1em]"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="1" y="7" width="2.4" height="4" rx=".6" />
      <rect x="4.8" y="4.5" width="2.4" height="6.5" rx=".6" />
      <rect x="8.6" y="2" width="2.4" height="9" rx=".6" opacity=".35" />
    </svg>
  );
}

function Avatars({ count = 5, size = 1.3, more = "2K+" }) {
  const box = { width: `${size}em`, height: `${size}em` };
  return (
    <span className="inline-flex items-center">
      {tones.slice(0, count).map((tone, i) => (
        <i
          key={`${tone}-${i}`}
          style={{
            ...box,
            background: `radial-gradient(circle at 50% 35%, ${tone} 0 38%, #3b3b45 40%)`,
          }}
          className="-ml-[.45em] rounded-full border-[.1em] border-white first:ml-0"
        />
      ))}
      <b
        style={{ height: `${size}em`, minWidth: `${size * 1.5}em` }}
        className="-ml-[.45em] grid place-items-center rounded-full bg-[#14141c] px-[.3em]"
      >
        <span className="text-[.42em] font-bold leading-none text-white">
          {more}
        </span>
      </b>
    </span>
  );
}

function Price() {
  return (
    <p className="mt-[.5em] text-[1em] font-bold leading-tight text-[#003BE2]">
      $25
      <small className="ml-[.2em] text-[0.75rem] font-medium text-[#4F4F4F]">
        /lifetime
      </small>
    </p>
  );
}

export function AuthShell({ mode, heading, text }) {
  return (
    <main
      className={[
        poppins.className,
        "grid min-h-screen grid-cols-1 bg-[#0b2cf2] text-[#141420]",
        "[--u:clamp(8px,2.6vw,15px)]",
        "min-[901px]:grid-cols-2 min-[901px]:[--u:clamp(5px,1.736vw,25px)]",
        "bg-[linear-gradient(rgba(255,255,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.13)_1px,transparent_1px)]",
        "bg-[length:calc(var(--u)*4.2)_calc(var(--u)*4.2)]",
      ].join(" ")}
    >
      <AuthArt heading={heading} text={text} />
      <AuthForm mode={mode} />
    </main>
  );
}

export function AuthArt({ heading, text }) {
  return (
    <section className="relative overflow-hidden pb-[3em] pl-[2.4em] pr-[1.6em] pt-[5em] text-[length:var(--u)] text-white min-[901px]:pb-[4em] min-[901px]:pl-[4.8em] min-[901px]:pr-0 min-[901px]:pt-[4.6em]">
      <Link
        href="/"
        aria-label="ByteSpace home"
        className={`absolute left-[2.4em] top-[1.4em] grid size-[1.3em] place-items-center rounded-[.4em_.4em_.4em_0] bg-[#c8f53a] leading-none text-[#0b2cf2] no-underline min-[901px]:left-[4.8em] min-[901px]:top-[1.25em] ${FOCUS}`}
      >
        <span className="text-[.75em] font-extrabold">b</span>
      </Link>

      <div>
        <p className="mb-[1em] text-[length:max(15px,.75em)] font-semibold">
          {heading}
        </p>
        <p className="max-w-[28em] text-[length:max(12px,.62em)] leading-[1.9] text-white/85">
          {text}
        </p>
      </div>

      <div
        aria-hidden="true"
        className="relative mx-auto mt-[3.6em] h-[23em] w-[24em] min-[901px]:mx-0"
      >
        <div className="absolute left-[2.1em] top-[1.5em] z-[3] size-[4em] -rotate-[20deg] rounded-full border-[1em] border-[#c8f53a]" />

        <div className="absolute left-0 top-[16.6em] z-[3] h-[5.5em] w-[5em] bg-[linear-gradient(120deg,#e5ff6a_0_55%,#a9d81c_55%)] [clip-path:polygon(0_60%,100%_0,55%_100%)]" />

        <article
          className={`${card} left-0 top-[3.6em] z-[1] h-[15.3em] w-[12em] bg-[#e3e5ea]`}
        >
          <div className="relative h-[7.9em] overflow-hidden rounded-[.7em] bg-[#b8bcc7]">
            <Image
              src="/assets/login_page/loginpage2.png"
              alt=""
              fill
              sizes="(min-width: 901px) 15vw, 40vw"
              className="object-cover opacity-70 brightness-[1.15] grayscale"
            />
            <span className={`${pill} absolute bottom-[.5em] left-[.5em]`}>
              17 Lessons
            </span>
          </div>
          <h3 className={`${cardTitle} mt-[.6em]`}>Build Digital</h3>
          <small className={by}>
            by <span className="text-[#0b2cf2]">pumpsart studio</span>
          </small>
          <span className={level}>
            <LevelIcon />
            Beginner
          </span>
          <Price />
        </article>

        <article
          className={`${card} left-[4.4em] top-0 z-[2] h-[15.4em] w-[14.9em] bg-white`}
        >
          <div className="relative h-[7.9em] overflow-hidden rounded-[.7em] bg-[#0b0f14]">
            <Image
              src="/assets/login_page/loginpage1.png"
              alt=""
              fill
              priority
              sizes="(min-width: 901px) 25vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-x-[.5em] bottom-[.5em] flex gap-[.35em]">
              <span className={pill}>17 Lessons</span>
              <span className={pill}>2 hours 30 mins</span>
              <span className={pill}>19 Comments</span>
            </div>
          </div>
          <div className="mt-[.6em] flex items-center justify-between gap-[.5em]">
            <h3 className={`${cardTitle} whitespace-nowrap`}>
              the Power of Big Data
            </h3>
            <span className={rate}>
              4.5 <em className="not-italic text-[#c8f53a]">★</em>
            </span>
          </div>
          <small className={by}>
            by <span className="text-[#0b2cf2]">pumpsart studio</span>
          </small>
          <div className="flex items-center justify-between">
            <span className={level}>
              <LevelIcon />
              Beginner
            </span>
            <Avatars />
          </div>
          <Price />
        </article>

        <svg
          className="absolute left-[15.8em] top-[13.7em] z-[4] h-[4em] w-[4.4em] -rotate-[8deg]"
          viewBox="0 0 44 50"
          fill="none"
        >
          <path
            d="M4 8c12-6 30-2 36 2M6 20c14-6 26-2 34 2M4 32c14-6 28-2 36 2M8 44c10-4 20-2 28 0"
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>

        <article className="absolute left-[9.2em] top-[17.3em] z-[5] h-[5em] w-[10.3em] rounded-[.8em] bg-[#c8f53a] px-[.8em] py-[.6em] text-[#141420] shadow-[0_1em_2em_rgba(0,0,60,.25)]">
          <h4 className="text-[.8em] font-bold leading-tight">
            Happy Students
          </h4>
          <span className="mb-[.5em] mt-[.15em] block text-[.55em] font-semibold">
            4.8 <small className="font-medium text-[#39401a]">rating</small>{" "}
            <em className="not-italic text-[#0b2cf2]">★</em>
          </span>
          <Avatars count={6} size={1.1} />
        </article>
      </div>
    </section>
  );
}

export function AuthForm({ mode }) {
  const isLogin = mode === "login";

  const labelText = "text-[length:max(12px,.72em)] font-medium";
  const input = `h-[3.3em] rounded-[.6em] border border-[#e6e8ee] bg-[#fafbfc] px-[1em] text-[length:max(16px,.9em)] font-normal text-[#141420] outline-none transition placeholder:text-[#a3a7b3] focus-visible:border-[#0b2cf2] focus-visible:ring-[3px] focus-visible:ring-[#0b2cf2]/15`;
  const social = `grid size-[3.9em] cursor-pointer place-items-center rounded-[.9em] border border-[#e6e8ee] bg-white shadow-[0_.2em_.6em_rgba(20,20,40,.06)] transition hover:bg-[#fafbfc] ${FOCUS}`;

  return (
    <section className="grid place-items-center px-4 pb-10 pt-2 text-[15px] min-[481px]:text-base min-[901px]:py-[clamp(20px,5vw,72px)] min-[901px]:pl-[clamp(8px,1.6vw,24px)] min-[901px]:pr-[clamp(16px,8.2vw,120px)] min-[901px]:text-[length:clamp(13px,1.25vw,20px)] min-[1440px]:place-items-start min-[1440px]:pl-[21px] min-[1440px]:pt-[120px]">
      <div className="w-full max-w-[20em] rounded-[1.4em] bg-white px-[1.6em] pb-[2em] pt-[2.4em] shadow-[0_1.2em_3em_rgba(0,0,40,.18)] min-[481px]:px-[2.4em] min-[481px]:pt-[3em] min-[901px]:px-[3.4em] min-[901px]:pb-[2.8em] min-[901px]:pt-[4em] min-[1440px]:rounded-[20px]">
        <span className="mb-[.4em] block text-[length:max(12px,.8em)] font-medium text-[#0b2cf2]">
          {isLogin ? "Sign In" : "Create an Account"}
        </span>
        <h1 className="mb-[1.05em] text-[2.4em] font-semibold leading-[1.1] tracking-[-.02em]">
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

        <form className="flex flex-col gap-[1.3em]">
          <label className="flex flex-col gap-[.55em]">
            <span className={labelText}>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              required
              placeholder="designer@example.com"
              className={input}
            />
          </label>

          {!isLogin && (
            <label className="flex flex-col gap-[.55em]">
              <span className={labelText}>Full Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder="Jamie Davis"
                className={input}
              />
            </label>
          )}

          <label className="flex flex-col gap-[.55em]">
            <span className={labelText}>Password</span>
            <input
              type="password"
              name="password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              required
              minLength={8}
              placeholder="••••••••"
              className={input}
            />
          </label>

          <button
            type="submit"
            className={`mt-[.2em] h-[3.2em] cursor-pointer self-end rounded-full bg-[#c8f53a] px-[2.3em] text-[length:max(14px,.8em)] font-semibold text-[#141420] transition hover:brightness-95 ${FOCUS}`}
          >
            {isLogin ? "Sign In" : "Continue"}
          </button>
        </form>

        {isLogin && (
          <>
            <div className="my-[3em] min-[901px]:mb-[3em] min-[901px]:mt-[5em]">
              <div className="flex items-center gap-[.8em] text-[length:max(12px,.7em)] text-[#8a8e9a]">
                <i className="h-px flex-1 bg-[#e6e8ee]" />
                <span>or</span>
                <i className="h-px flex-1 bg-[#e6e8ee]" />
              </div>
            </div>

            <div className="flex justify-center gap-[.9em]">
              <button
                type="button"
                aria-label="Continue with Facebook"
                className={social}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-[1.4em]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="11" fill="#1877f2" />
                  <path
                    d="M13.2 19v-6h2l.4-2.4h-2.4V9.2c0-.7.3-1.2 1.3-1.2h1.2V6c-.2 0-1-.1-1.8-.1-1.8 0-3 1.1-3 3.1v1.6H8.8V13h2.1v6z"
                    fill="#fff"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Continue with Google"
                className={social}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-[1.4em]"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285f4"
                    d="M21.6 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.2z"
                  />
                  <path
                    fill="#34a853"
                    d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z"
                  />
                  <path
                    fill="#fbbc05"
                    d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3.1a10 10 0 0 0 0 9z"
                  />
                  <path
                    fill="#ea4335"
                    d="M12 5.9c1.5 0 2.8.5 3.9 1.5l2.9-2.9A10 10 0 0 0 3.1 7.5l3.3 2.6C7.2 7.7 9.4 5.9 12 5.9z"
                  />
                </svg>
              </button>
            </div>
          </>
        )}

        <div
          className={
            isLogin ? "mt-[3.4em] min-[901px]:mt-[4.8em]" : "mt-[2.5em]"
          }
        >
          <p className="text-center text-[length:max(12px,.7em)] text-[#8a8e9a]">
            {isLogin ? "New user?" : "Already have an account?"}{" "}
            <Link
              href={isLogin ? "/signup" : "/login"}
              className={`font-medium text-[#0b2cf2] hover:underline ${FOCUS}`}
            >
              {isLogin ? "Create an account" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
