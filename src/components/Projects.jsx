import signatureImage from "../assets/images/signature.png";
import previsaTempoImage from "../assets/images/previsao-tempo.png";
import galleryImage from "../assets/images/gallery.png";
import montiImage from "../assets/images/monti.png";
import duoRico from "../assets/images/duo-rico.png";
import ongGabriel from "../assets/images/ong-gabriel.png";
import DGT from "../assets/images/dgt.png";
import ScreenSound from "../assets/images/screensound.png";
import duoRicoPro from "../assets/images/duorico-pro.png";

const projects = [
  {
    title: "Duo Rico Pro",
    description:
      "Novo aplicativo de finanças pessoais para controle de gastos.",
    image: duoRicoPro,
    demoLink: "https://github.com/maxmalato/DuoRico.Pro",
    codeLink: "https://github.com/maxmalato/DuoRico.Pro",
    HardSkills: [
      { icon: "devicon-csharp-plain colored" },
      { icon: "devicon-dotnetcore-plain colored" },
      { icon: "devicon-blazor-original colored" },
      { icon: "devicon-postgresql-plain colored" },
      { icon: "devicon-docker-plain colored" },
    ],
  },
  {
    title: "ScreenSound",
    description:
      "Gestão de catálogos musicais, avaliação de artistas e classificação de gêneros.",
    image: ScreenSound,
    demoLink: "https://github.com/maxmalato/ScreenSound",
    codeLink: "https://github.com/maxmalato/ScreenSound",
    HardSkills: [
      { icon: "devicon-csharp-plain colored" },
      { icon: "devicon-dotnetcore-plain colored" },
      { icon: "devicon-microsoftsqlserver-plain colored" },
      { icon: "devicon-blazor-original colored" },
    ],
  },
  {
    title: "DGT",
    description: "Central de ferramenta para geração e consulta de dados.",
    image: DGT,
    demoLink: "https://dgt-data.netlify.app/",
    codeLink: "https://github.com/maxmalato/dev-tools",
    HardSkills: [
      { icon: "devicon-react-original colored" },
      { icon: "devicon-typescript-plain colored" },
      { icon: "devicon-tailwindcss-original colored" },
    ],
  },
  {
    title: "ONG Gabriel",
    description:
      "Plataforma de atendimento psicológico para pacientes (Em desenvolvimento).",
    image: ongGabriel,
    demoLink: "https://onggabriel.com/",
    codeLink: "https://github.com/usrmaia/ong-gabriel",
    HardSkills: [
      { icon: "devicon-typescript-plain colored" },
      { icon: "devicon-nextjs-plain colored" },
      { icon: "devicon-tailwindcss-original colored" },
      { icon: "devicon-prisma-original colored" },
    ],
  },
  {
    title: "Duo Rico",
    description: "Aplicativo de finanças pessoais para controle de gastos.",
    image: duoRico,
    demoLink: "https://github.com/maxmalato/DuoRico",
    codeLink: "https://github.com/maxmalato/DuoRico",
    HardSkills: [
      { icon: "devicon-csharp-plain colored" },
      { icon: "devicon-dotnetcore-plain colored" },
      { icon: "devicon-bootstrap-plain colored" },
      { icon: "devicon-postgresql-plain colored" },
    ],
  },
  {
    title: "Assinatura Digital",
    description: "Crie uma assinatura digital para o seu e-mail.",
    image: signatureImage,
    demoLink: "https://assinatura-digital.netlify.app/",
    codeLink: "https://github.com/maxmalato/assinatura-digital",
    HardSkills: [
      { icon: "devicon-javascript-plain colored" },
      { icon: "devicon-react-original colored" },
      { icon: "devicon-tailwindcss-original colored" },
    ],
  },
  {
    title: "Monti.",
    description: "Uma loja virtual simples, mas com grandes recursos.",
    image: montiImage,
    demoLink: "https://monti-ecommerce.vercel.app/",
    codeLink: "https://github.com/maxmalato/monti",
    HardSkills: [
      { icon: "devicon-typescript-plain colored" },
      { icon: "devicon-nextjs-plain colored" },
      { icon: "devicon-tailwindcss-original colored" },
    ],
  },
  {
    title: "Gallery",
    description:
      "Buscar imagens e salvar fotos favoritas de forma prática e personalizada.",
    image: galleryImage,
    demoLink: "https://gallery-maxmalato.netlify.app/",
    codeLink:
      "https://github.com/maxmalato/desafio-galeria-de-imagem-frontendfusion",
    HardSkills: [
      { icon: "devicon-javascript-plain colored" },
      { icon: "devicon-react-original colored" },
      { icon: "devicon-tailwindcss-original colored" },
    ],
  },
  {
    title: "Previsão do Tempo",
    description:
      "Pesquise sobre sua cidade para saber como está o seu clima em tempo real.",
    image: previsaTempoImage,
    demoLink: "https://maxmalato.github.io/previsao-tempo/",
    codeLink: "https://github.com/maxmalato/previsao-tempo",
    HardSkills: [
      { icon: "devicon-html5-plain colored" },
      { icon: "devicon-css3-plain colored" },
      { icon: "devicon-javascript-plain colored" },
    ],
  },
];

const ProjectCard = ({
  title,
  description,
  image,
  demoLink,
  codeLink,
  HardSkills,
}) => {
  return (
    <article className="flex flex-col pt-3 px-2 max-w-[350px] bg-slate-200 rounded-lg transition transform drop-shadow-lg hover:-translate-y-2 dark:bg-slate-600">
      <img className="rounded-md w-[90%] mx-4" src={image} alt={title} />
      <div className="flex flex-col h-full mt-5 gap-3">
        <div>
          <h3 className="text-2xl text-center font-bold mt-3 dark:text-white">
            {title}
          </h3>
          <p className="text-center mt-3 dark:text-white">{description}</p>
        </div>
        <div className="flex gap-10 justify-center dark:text-white">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Acessar: ${title}`}
          >
            <i className="bx bx-link-alt bx-md bx-tada-hover"></i>
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Acessar: ${title}`}
          >
            <i className="bx bxl-github bx-md bx-tada-hover"></i>
          </a>
        </div>
        <div className="border-t-2 border-gray-300 dark:border-gray-700">
          <ul className="flex justify-center gap-3 p-2">
            {HardSkills &&
              HardSkills.map((skill, index) => (
                <div key={index} className="my-2">
                  <i
                    className={`${skill.icon} text-2xl dark:bg-white border p-1 rounded-md`}
                  ></i>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-24">
      <h2 className="font-bold text-5xl drop-shadow-md text-center mb-8 dark:text-white">
        Meus projetos
      </h2>
      <div className="flex flex-wrap gap-6 justify-center lg:grid lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
