import "../styles/section.css";

export default function Section({
  title,
  paragraph1,
  paragraph2,
  image1,
  image2,
  
}) {
  return (
    <section>
      <div
        className={`gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 lg:flex `}
      >
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 lg:w-1/2">
          <h2 className="section-text-h2">
            {title}
          </h2>
          <p className="section-text-p">{paragraph1}</p>
          <p className="section-text-p">{paragraph2}</p>
        </div>


        <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0 lg:w-1/2">
          <img
            className="w-full rounded-lg"
            src={image1}
            alt={title}
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={image2}
            alt={`${title} extra`}
          />
        </div>
      </div>
    </section>
  );
}
