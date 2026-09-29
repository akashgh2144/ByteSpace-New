const paths = [["✣", "Design"], ["⌘", "Development"], ["▣", "IT & Software"], ["▦", "Business"], ["✦", "Marketing"], ["▧", "Photography"]];

export default function LearningPaths() {
  return <section className="section paths" id="paths"><header><h2>Explore Diverse Learning Paths at Bytespace</h2><p>At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various<br className="desktop" /> fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.</p></header><div className="path-grid">{paths.map(([icon, name]) => <div className="path" key={name}><b>{icon}</b><span>{name}</span></div>)}</div></section>;
}
