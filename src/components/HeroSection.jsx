import '../styles/heroSection.css';

export default function HeroSection({ title, paragraph, image }) {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-text">
          <h1>{title}</h1>
          <p>{paragraph}</p>
        </div>

        <div className="hero-image">
          <img src={image} alt={title} />
        </div>

      </div>
    </section>
  );
}
