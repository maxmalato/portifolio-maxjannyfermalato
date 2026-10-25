import { softSkills } from "../data/skills";

const SoftSkill = () => {
  return (
    <section className="mb-10">
      <h2 className="font-bold text-5xl drop-shadow-md text-center lg:text-left">
        Soft Skills
      </h2>
      <p className="font-bold text-brand text-center mb-5 tracking-wide lg:text-left">
        Habilidades pessoais
      </p>
      <ul className="grid grid-cols-2 gap-4 text-center lg:flex flex-wrap lg:border-l-4 lg:pl-4 transition-colors hover:border-brand lg:dark:border-slate-100">
        {softSkills.map((skill) => (
          <li key={skill} className="icon-soft">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SoftSkill;
