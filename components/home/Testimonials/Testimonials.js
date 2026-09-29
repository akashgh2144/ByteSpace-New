const testimonials = [["ellipse.png", "Sarah M.", "Enthusiastic Learner", "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations."], ["ellipse1.png", "James L.", "Lifelong Learner", "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and variety of courses available."], ["ellipse2.png", "Alex B.", "Inspired Creator", "As a creator, ByteSpace has been a fantastic platform to share my expertise and connect with learners globally."]];

export default function Testimonials() {
  return <section className="testimonials">{testimonials.map(([image, name, role, quote]) => <article key={name}><img src={`/assets/home/${image}`} alt="" /><strong>{name}</strong><small>{role}</small><p>“{quote}”</p></article>)}</section>;
}
