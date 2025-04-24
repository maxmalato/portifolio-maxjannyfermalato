const AboutMe = () => {
    return (
      <section className="pt-24" id="aboutMe">
        <h1 className="font-bold text-5xl drop-shadow-md text-center lg:text-left dark:text-white">
          Sobre mim
        </h1>
  
        <div className="transition hover:border-orange-600 lg:border-l-4 lg:pl-4 flex flex-col gap-3 mt-5">
          <p className="indent-8 text-justify lg:indent-0 dark:text-white">
            <span className="text-orange-600 font-bold text-2xl">S</span>ou
            Maxjannyfer, mais conhecido como Max. Tenho 31 anos, sou casado com a
            Carol e pai do Davi. Sou um desenvolvedor web em constante evolução,
            focado no front-end com React, mas também explorando o back-end para
            ampliar minhas habilidades. Tenho experiência prática com integração
            de APIs e estou sempre buscando aprimorar meus conhecimentos em todo o
            espectro do desenvolvimento web.
          </p>
          <p className="indent-8 text-justify lg:indent-0 dark:text-white">
            <span className="text-orange-600 font-bold text-2xl">A</span>ntes de
            ingressar na programação, acumulei mais de seis anos de experiência
            como suporte técnico em TI e, atualmente, atuo como Analista de TI,
            oferecendo suporte sistêmico. Minha abordagem profissional é marcada
            pela organização, atenção aos detalhes e valorização do trabalho em
            equipe.
          </p>
          <p className="indent-8 text-justify lg:indent-0 dark:text-white">
            <span className="text-orange-600 font-bold text-2xl">A</span>lém da
            tecnologia, sou cristão e baixista. No meu tempo livre, gosto de
            assistir séries e filmes com minha esposa, frequentar a igreja com
            minha família e me aventurar no mundo dos vídeo games.
          </p>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  