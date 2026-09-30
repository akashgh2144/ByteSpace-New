import Image from "next/image";

export default function Community() {
  const testimonials = [
    [
      "coommunity1.png",
      "Sarah M.",
      "Enthusiastic Learner",
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    ],
    [
      "coommunity2.png",
      "James L.",
      "Lifelong Learner",
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    ],
    [
      "coommunity3.png",
      "Alex B.",
      "Inspired Creator",
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    ],
  ];

  return (
    <section className="community-section">
      <div className="community-heading">
        <h2 className="text-4xl font-semibold">
          Discover What Our
          <br />
          Community Is Saying
        </h2>
        <p>
          At ByteSpace, our vibrant community of learners and creators is at the
          heart of what we do. Hear directly from those who have experienced the
          transformative journey of learning and creating on our platform.
          Explore testimonials that reflect the diverse perspectives of
          enthusiastic learners and accomplished creators.
        </p>
      </div>
      <div className="community-cards">
        {testimonials.map(([image, name, role, quote]) => (
          <article key={name}>
            <Image
              src={`/assets/home/${image}`}
              alt=""
              width={64}
              height={64}
            />
            <strong>{name}</strong>
            <small>{role}</small>
            <p>&quot;{quote}&quot;</p>
          </article>
        ))}
      </div>
    </section>
  );
}
