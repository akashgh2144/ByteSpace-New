export default function Partners() {
  return <div className="partners">{["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"].map((logo) => <img key={logo} src={`/assets/home/logos/${logo}`} alt="Partner logo" />)}</div>;
}
