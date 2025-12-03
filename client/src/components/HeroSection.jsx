import '../styles/heroSection.css';

export default function HeroSection({ title, paragraph,paragraph2, paragraph3, image }) {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-text">
          <h1 className='section-text-h2'>{title}</h1>
          <p className='section-text-p'>{paragraph}</p>
          <p className='section-text-p'>{paragraph2}</p>
          <p className='section-text-p'>{paragraph3}</p>
        </div>

        <div className="hero-image">
          <img src={image} alt={title} />
        </div>

      </div>
    </section>
  );
}
