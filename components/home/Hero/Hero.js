import Navbar from "../../common/Navbar";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
export default function Hero() {
  return (
    <section className="hero">
      <div aria-hidden="true">
        <Image
          src="/assets/mask_group.png"
          width={531}
          height={774}
          alt=""
          style={{
            position: "absolute",
            left: -8,
            top: 115,
            width: 225,
            height: "auto",
            zIndex: 0,
          }}
        />
        <Image
          src="/assets/mask_group2.png"
          width={692}
          height={686}
          alt=""
          style={{
            position: "absolute",
            left: 300,
            bottom: 0,
            width: 320,
            height: "auto",
            zIndex: 2,
          }}
        />
        <Image
          src="/assets/mask_group3.png"
          width={426}
          height={744}
          alt=""
          style={{
            position: "absolute",
            right: -28,
            top: 125,
            width: 225,
            height: "auto",
            zIndex: 0,
          }}
        />
        <Image
          src="/assets/mask_group4.png"
          width={378}
          height={378}
          alt=""
          style={{
            position: "absolute",
            right: 290,
            top: 265,
            width: 195,
            height: "auto",
            zIndex: 0,
          }}
        />
        <Image
          src="/assets/mask_group5.png"
          width={633}
          height={664}
          alt=""
          style={{
            position: "absolute",
            right: 325,
            bottom: 52,
            width: 285,
            height: "auto",
            zIndex: 0,
          }}
        />
      </div>
      <Navbar />
      <div className="hero-copy">
        <h1>
          Access to Hundreds
          <br />
          <strong>Courses Available</strong>
        </h1>
        <p className="text-[16px]">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="search">
          <GoSearch
            size={14}
            strokeWidth={1.8}
            style={{ position: "absolute", left: 20, zIndex: 10 }}
          />
          <input placeholder="Course, topic, creator" />
          <button>Search</button>
        </div>
      </div>
      <div className="hero-art">
        <div className="lime-shape" />
        <Image
          src="/assets/image1.png"
          width={516}
          height={483}
          alt="Student learning with a laptop"
        />
        <div
          className="float-card uiux-card rounded-2xl"
          style={{ left: 220, top: 164, width: 220, padding: "12px" }}
        >
          <strong style={{ fontSize: "16px", fontWeight: "500" }}>
            UI/UX Design
          </strong>
          <span
            style={{
              display: "block",
              marginTop: 2,
              fontSize: 9,
              color: "#9ca3af",
            }}
          >
            200 Courses&nbsp; • &nbsp;1000+ Students
          </span>
        </div>
        <div className="float-card progress" style={{ right: 220, top: 160 }}>
          <span style={{ fontSize: "16px", fontWeight: "400" }}>
            Learning Progress
          </span>
          <strong>55%</strong>
          <i />
        </div>
        <div
          className="float-card students rounded-2xl"
          style={{ left: 210, bottom: 75, width: 228, padding: "12px" }}
        >
          <strong style={{ fontSize: "16px", fontWeight: "400" }}>
            Happy Students
          </strong>
          <div style={{ marginTop: 1, fontSize: 8, color: "#9ca3af" }}>
            <b style={{ fontSize: 13 }}>4.5 (240)</b>{" "}
            <span style={{ color: "#c4ff00", fontSize: 18 }}>★</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
            {[
              "/assets/home/Ellipse.png",
              "/assets/home/Ellipse%20(1).png",
              "/assets/home/Ellipse%20(2).png",
              "/assets/home/Ellipse%20(3).png",
              "/assets/home/ellipse1.png",
            ].map((avatar, index) => (
              <Image
                key={avatar}
                src={avatar}
                width={32}
                height={32}
                alt={`Student ${index + 1}`}
                style={{
                  width: 36,
                  height: 36,
                  marginRight: -7,
                  border: "2px solid white",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            ))}
            <b
              style={{
                display: "grid",
                placeItems: "center",
                width: 36,
                height: 36,
                marginLeft: 5,
                borderRadius: "50%",
                background: "#c4ff00",
                fontSize: 8,
              }}
            >
              2K+
            </b>
          </div>
        </div>
      </div>
    </section>
  );
}
