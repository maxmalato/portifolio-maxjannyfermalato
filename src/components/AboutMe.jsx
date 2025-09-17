const AboutMe = () => {
  return (
    <section className="pt-24" id="aboutMe">
      <h1 className="font-bold text-5xl drop-shadow-md text-center lg:text-left dark:text-white">
        Sobre mim
      </h1>

      <div className="transition hover:border-orange-600 lg:border-l-4 lg:pl-4 flex flex-col gap-3 mt-5">
        <p className="indent-8 text-justify lg:indent-0 dark:text-white">
          <span className="text-orange-600 font-bold text-2xl">O</span>
          lá, sou o Max, um Desenvolvedor Web em plena transição de carreira.
        </p>
        <p className="indent-8 text-justify lg:indent-0 dark:text-white">
          <span className="text-orange-600 font-bold text-2xl">C</span>
          om uma base sólida de mais de seis anos em Suporte e Análise de TI, desenvolvi uma paixão por não apenas resolver problemas, mas por construir as soluções. Hoje, essa transição já é uma realidade no meu dia a dia: na minha empresa atual, dedico parte do meu horário para atuar no time de desenvolvimento, contribuindo com tarefas em projetos .NET

        </p>
        <p className="indent-8 text-justify lg:indent-0 dark:text-white">
          <span className="text-orange-600 font-bold text-2xl">M</span>
          ovido pelo desejo de gerar impacto, também sou desenvolvedor frontend voluntário na Pipoca Ágil onde participo de uma squad chamada Popcorners, neste momento estamos desenvolvendo uma aplicação chamada ONG GABRIEL, uma iniciativa de prevenção ao suicídio que conecta pacientes e psicólogos. Lá, utilizo Next.js, TypeScript e Scrum como framework, linguagem e metodologia ágil, respectivamente.
        </p>
        <p className="indent-8 text-justify lg:indent-0 dark:text-white">
          <span className="text-orange-600 font-bold text-2xl">M</span>
          inha abordagem profissional é marcada pela organização, atenção aos detalhes e um forte senso de trabalho em equipe. Fora do código, sou cristão, baixista, casado com a Carol e pai do Davi. Gosto de passar o tempo com minha família, seja na igreja ou assistindo a um bom filme.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
