import "../styles/section.css";

export default function HeadingKing({
  title,
  paragraph1,
  linkTo,
}) {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="section-text-h2">
            {title}
          </h2>

          <p className="section-text-p">
            {paragraph1}
          </p>

          <a href={linkTo} target="_blank" rel="noopener noreferrer">
            <button
              className="text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 button-cust"
              style={{ backgroundColor: "#F5E3BF" }}
            >
              RESERVAR
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
