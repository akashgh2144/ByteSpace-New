import Image from "next/image";
export default function Partners() {

  return (
    <div className="partners">
      {["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"].map(
        (logo) => (
          <Image
            key={logo}
            src={`/assets/home/logos/${logo}`}
            alt="Partner logo"
            width={130}
            height={140}
          />
        ),
      )}
    </div>
  );
}
