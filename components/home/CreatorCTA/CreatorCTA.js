import Link from "next/link";
import Image from "next/image";

export default function CreatorCTA() {
  return (
    <section className="creator-banner" id="creator">
      <div className="creator-masks" aria-hidden="true">
        <Image
          className="creator-mask mask-1"
          src="/assets/mask1.png"
          width={531}
          height={450}
          alt=""
        />
        <Image
          className="creator-mask mask-2"
          src="/assets/mask2.png"
          width={352}
          height={352}
          alt=""
        />
        <Image
          className="creator-mask mask-3"
          src="/assets/mask3.png"
          width={280}
          height={378}
          alt=""
        />
        <Image
          className="creator-mask mask-4"
          src="/assets/mask4.png"
          width={692}
          height={380}
          alt=""
        />
        <Image
          className="creator-mask mask-5"
          src="/assets/mask5.png"
          width={378}
          height={378}
          alt=""
        />
        <Image
          className="creator-mask mask-6"
          src="/assets/mask6.png"
          width={436}
          height={744}
          alt=""
        />
        <Image
          className="creator-mask mask-7"
          src="/assets/mask7.png"
          width={664}
          height={398}
          alt=""
        />
      </div>
      <h2 className="text-4xl font-semibold ">
        Unlock Your Potential as a<br />
        Creator with ByteSpace
      </h2>
      <p className="text-[14px] font-normal text-left  mt-6" >
        Experience the collaboration of numerous creators and an expanding selection of courses.
        Register now and become a part of a community comprising over 10,000 local and international creators.
        Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
      </p>
      <Link href="/signup">Join as Creator</Link>
    </section>
  );
}
