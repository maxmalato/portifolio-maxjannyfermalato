import { hardSkills } from "../data/skills";

const HardSkill = () => {
  return (
    <section className="mb-10 pt-24" id="skills">
      <h2 className="font-bold text-5xl drop-shadow-md text-center lg:text-end">
        Hard Skill
      </h2>
      <p className="text-brand text-lg font-semibold drop-shadow-md lg:text-right">
        Habilidades tecnológicas
      </p>
      <ul className="flex flex-wrap gap-2 justify-center mt-5 lg:justify-end lg:border-r-4 lg:pr-4 transition hover:border-brand lg:dark:border-slate-100">
        {hardSkills.map(({ name, icon }) => (
          <li key={name} className="flex">
            <i
              className={`${icon} icon-hard dark:bg-white`}
              role="img"
              aria-label={name}
              title={name}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HardSkill;
