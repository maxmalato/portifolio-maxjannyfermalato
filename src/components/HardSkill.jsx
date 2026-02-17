const HardSkill = () => {
  return (
    <section className="mb-10 pt-24" id="skills">
      <h2 className="font-bold text-5xl drop-shadow-md text-center lg:text-end dark:text-white">
        Hard Skill
      </h2>
      <h3 className="text-orange-600 text-lg font-semibold drop-shadow-md lg:text-right">
        Habilidades tecnológicas
      </h3>
      <div className="flex flex-wrap gap-2 justify-center mt-5 lg:justify-end lg:border-r-4 lg:pr-4 transition hover:border-orange-600 lg:dark:border-slate-100">
        <i className="devicon-blazor-original colored icon-hard dark:bg-white"></i>
        <i class="devicon-csharp-plain-wordmark colored icon-hard dark:bg-white"></i>
        <i class="devicon-dotnetcore-plain colored icon-hard dark:bg-white"></i>
        <i className="devicon-react-plain colored icon-hard dark:bg-white"></i>
        <i className="devicon-nextjs-original-wordmark icon-hard dark:bg-white"></i>
        <i className="devicon-tailwindcss-original colored icon-hard dark:bg-white"></i>
        <i class="devicon-bootstrap-plain colored icon-hard dark:bg-white"></i>
        <i className="devicon-microsoftsqlserver-plain-wordmark colored icon-hard dark:bg-white"></i>
        <i className="devicon-postgresql-plain-wordmark colored icon-hard dark:bg-white"></i>
        <i className="devicon-github-original-wordmark colored icon-hard dark:bg-white"></i>
        <i className="devicon-git-plain-wordmark colored icon-hard dark:bg-white"></i>
      </div>
    </section>
  );
};

export default HardSkill;
