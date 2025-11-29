import "../styles/section.css";

export default function SectionD({ title, paragraph1, paragraph2, image, imageClassName = "", className = "" }) {
  return (
    <section className={`bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-40${className}`}>
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 mx-auto max-w-screen-xl gap-12">

        <div className="lg:w-2/3 text-center lg:text-left">
          <h2 className="section-text-h2">
            {title}
          </h2>
          <p className="section-text-p">
            {paragraph1}
          </p>
          <p className="section-text-p">
            {paragraph2}
          </p>
        </div>

        <div className="lg:w-1/3 flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className={`object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105 ${imageClassName}`}
          />
        </div>

      </div>
    </section>
  );
}