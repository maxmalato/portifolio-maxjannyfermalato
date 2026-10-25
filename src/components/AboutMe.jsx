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
          Olá, sou o Max, Desenvolvedor FullStack.
        </p>
        <p className={paragraphClass}>
          Com uma base sólida de mais de 8 anos em Suporte e Análise de TI, desenvolvi uma paixão não apenas por resolver problemas, mas por construir as soluções do zero. Hoje, essa evolução já é a realidade do meu dia a dia: na minha empresa atual, divido minha jornada entre garantir a estabilidade do suporte sistêmico e atuar no time de desenvolvimento, construindo APIs robustas com C# (.NET, DDD) e interfaces dinâmicas com React e TypeScript.
        </p>
        <p className={paragraphClass}>
          Movido pelo desejo de gerar impacto, atuei como desenvolvedor frontend voluntário na Pipoca Ágil. Fiz parte da squad Popcorners, onde desenvolvemos a plataforma para a ONG GABRIEL, uma iniciativa de prevenção ao suicídio que conecta pacientes e psicólogos. Durante o projeto, utilizei Next.js, TailwindCSS e Scrum como framework, estilização e metodologia ágil, respectivamente.
        </p>
        <p className={paragraphClass}>
          Minha abordagem profissional é marcada pela visão sistêmica, atenção aos detalhes e um forte senso de trabalho em equipe. Fora do código, sou cristão, baixista, casado e pai. Gosto de passar o tempo com minha família, seja na igreja ou assistindo a um bom filme.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
