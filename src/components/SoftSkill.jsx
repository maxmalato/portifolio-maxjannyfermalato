const SoftSkill = () => {
    return (
      <section className="mb-10">
        <h2 className="font-bold text-5xl drop-shadow-md text-center lg:text-left dark:text-slate-100">
          Soft Skills
        </h2>
        <p className="font-bold text-orange-600 text-center mb-5 tracking-wide lg:text-left">
          Habilidades pessoais
        </p>
        <div className="grid grid-cols-2 gap-4 text-center lg:flex flex-wrap lg:border-l-4 lg:pl-4 transition-colors hover:border-orange-600">
          <p className="icon-soft dark:text-slate-100">Organização</p>
          <p className="icon-soft dark:text-slate-100">Atenção a detalhes</p>
          <p className="icon-soft dark:text-slate-100">Trabalho colaborativo</p>
          <p className="icon-soft dark:text-slate-100">Resolução de problemas</p>
          <p className="icon-soft dark:text-slate-100">Capacidade analítica</p>
          <p className="icon-soft dark:text-slate-100">
            Comunicação com clientes
          </p>
          <p className="icon-soft dark:text-slate-100">Agilidade</p>
          <p className="icon-soft dark:text-slate-100">Empatia</p>
        </div>
      </section>
    );
  };
  
  export default SoftSkill;
  