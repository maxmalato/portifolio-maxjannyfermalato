const ProjectCard = ({ title, description, image, demoLink, codeLink, techs }) => {
  return (
    <article className="flex flex-col pt-3 px-2 max-w-[350px] bg-slate-200 rounded-lg transition transform drop-shadow-lg hover:-translate-y-2 dark:bg-slate-600">
      <img
        className="rounded-md w-[90%] mx-4"
        src={image}
        alt={`Tela do projeto ${title}`}
        width={500}
        height={500}
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col h-full mt-5 gap-3">
        <div>
          <h3 className="text-2xl text-center font-bold mt-3">{title}</h3>
          <p className="text-center mt-3">{description}</p>
        </div>
        <div className="flex gap-10 justify-center">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Acessar o projeto ${title}`}
          >
            <i className="bx bx-link-alt bx-md bx-tada-hover"></i>
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver o código de ${title} no GitHub`}
          >
            <i className="bx bxl-github bx-md bx-tada-hover"></i>
          </a>
        </div>
        <div className="border-t-2 border-gray-300 dark:border-gray-700">
          <ul className="flex justify-center gap-3 p-2">
            {techs.map(({ name, icon }) => (
              <li key={name} className="my-2">
                <i
                  className={`${icon} text-2xl dark:bg-white border p-1 rounded-md`}
                  role="img"
                  aria-label={name}
                  title={name}
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
