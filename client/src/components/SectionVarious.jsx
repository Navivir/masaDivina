import React from "react";

const TeamMember = ({ name, role, description, image, socials = [] }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <a href="#">
        <div className="w-full aspect-square overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={`${name} Imagen`}
          />
        </div>
      </a>
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">{name}</a>
        </h3>
        <span className="text-gray-500 dark:text-gray-400">{role}</span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <ul className="flex space-x-4 sm:mt-0">
          {socials.map((icon, index) => (
            <li key={index}>
              <a
                href={icon.href}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                {icon.svg}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TeamSection = ({ title, subtitle, members }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-8 mb-6 lg:mb-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
