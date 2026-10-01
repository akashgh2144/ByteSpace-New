import Link from "next/link";

function Brand() {
  return (
    <Link className="home-brand" href="/">
      <img src="/assets/home/mainlogo.png" alt="" />
      <strong>ByteSpace</strong>
    </Link>
  );
}

export { default } from "../../common/Footer";
