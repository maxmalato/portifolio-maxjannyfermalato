const paragraphClass =
  "indent-8 text-justify lg:indent-0 first-letter:text-2xl first-letter:font-bold first-letter:text-brand";

const AboutMe = () => {
  return (
    <section className="pt-24" id="aboutMe">
      <h2 className="font-bold text-5xl drop-shadow-md text-center lg:text-left">
        Sobre mim
      </h2>

      <div className="transition hover:border-brand lg:border-l-4 lg:pl-4 flex flex-col gap-3 mt-5">
        <p className={paragraphClass}>
          Olá, sou o Max, Desenvolvedor Fullstack Júnior com foco em .NET e React.
        </p>
        <p className={paragraphClass}>
          Atuo no time de desenvolvimento da minha empresa atual, onde construo e mantenho APIs RESTful com C#, .NET, Entity Framework Core e SQL Server, aplicando princípios de Domain-Driven Design (DDD), além de interfaces dinâmicas e tipadas com React e TypeScript.
        </p>
        <p className={paragraphClass}>
          Cheguei ao desenvolvimento depois de mais de 8 anos em Suporte e Análise de TI. Essa base me deu visão sistêmica do negócio, facilidade para diagnosticar problemas em produção e proximidade com quem usa o sistema no dia a dia — algo que levo para cada solução que construo.
        </p>
        <p className={paragraphClass}>
          Também atuei como desenvolvedor frontend voluntário na Pipoca Ágil, na squad Popcorners, construindo a plataforma da ONG GABRIEL — uma iniciativa de prevenção ao suicídio que conecta pacientes e psicólogos — com Next.js, TailwindCSS e Prisma, sob Scrum e com code review no GitHub.
        </p>
        <p className={paragraphClass}>
          Minha abordagem é marcada pela atenção aos detalhes, pelo trabalho em equipe e pela vontade constante de aprender. Fora do código, sou baixista e gosto de passar o tempo com minha família assistindo a um bom filme.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
