import signatureImage from "../assets/images/signature.png";
import loggieImage from "../assets/images/loggie.jpg";
import cadastroUsuarioImage from "../assets/images/cadastro-usuario.png";
import previsaTempoImage from "../assets/images/previsao-tempo.png";
import galleryImage from "../assets/images/gallery.png";
import montiImage from "../assets/images/monti.png";

const projects = [
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
            { icon: "devicon-nextjs-plain" },
            { icon: "devicon-tailwindcss-original colored" },
        ],
    },
    {
        title: "Gallery",
        description: "Buscar imagens e salvar fotos favoritas de forma prática e personalizada.",
        image: galleryImage,
        demoLink: "https://gallery-maxmalato.netlify.app/",
        codeLink: "https://github.com/maxmalato/desafio-galeria-de-imagem-frontendfusion",
        HardSkills: [
            { icon: "devicon-javascript-plain colored" },
            { icon: "devicon-react-original colored" },
            { icon: "devicon-tailwindcss-original colored" },
        ],
    },
    {
        title: "Loggie",
        description: "Cadastrar usuários com autenticação e acesso restrito a usuários registrados.",
        image: loggieImage,
        demoLink: "https://app-loggie.onrender.com/",
        codeLink: "https://github.com/maxmalato/app-loggie",
        HardSkills: [
            { icon: "devicon-javascript-plain colored" },
            { icon: "devicon-react-original colored" },
            { icon: "devicon-tailwindcss-original colored" },
            { icon: "devicon-axios-plain" },
        ]
    },
    {
        title: "Cadastro de Usuário",
        description: "Cadastro de usuário com nome, e-mail e idade no banco de dados.",
        image: cadastroUsuarioImage,
        demoLink: "https://app-cadastro-usuario.netlify.app/",
        codeLink: "https://github.com/maxmalato/cadastro-usuario",
        HardSkills: [
            { icon: "devicon-javascript-plain colored" },
            { icon: "devicon-react-original colored" },
            { icon: "devicon-nodejs-plain colored" },
            { icon: "devicon-axios-plain" },
            { icon: "devicon-prisma-original" },
            { icon: "devicon-express-original" }
        ]
    },
    {
        title: "Previsão do Tempo",
        description: "Pesquise sobre sua cidade para saber como está o seu clima em tempo real.",
        image: previsaTempoImage,
        demoLink: "https://maxmalato.github.io/previsao-tempo/",
        codeLink: "https://github.com/maxmalato/previsao-tempo",
        HardSkills: [
            { icon: "devicon-html5-plain colored" },
            { icon: "devicon-css3-plain colored" },
            { icon: "devicon-javascript-plain colored" },
        ]
    },
];

const ProjectCard = ({ title, description, image, demoLink, codeLink, HardSkills }) => {
    return (
        <article className="flex flex-col pt-3 px-2 max-w-[350px] bg-slate-200 rounded-lg transition transform drop-shadow-lg hover:-translate-y-2 dark:bg-slate-600">
            <img className="rounded-md w-[90%] mx-4" src={image} alt={title} />
            <div className="flex flex-col h-full mt-5 gap-3">
                <div>
                    <h3 className="text-2xl text-center font-bold mt-3 dark:text-white">{title}</h3>
                    <p className="text-center mt-3 dark:text-white">{description}</p>
                </div>
                <div className="flex gap-10 justify-center dark:text-white">
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" aria-label={`Acessar: ${title}`}>
                        <i className='bx bx-link-alt bx-md bx-tada-hover'></i>
                    </a>
                    <a href={codeLink} target="_blank" rel="noopener noreferrer" aria-label={`Acessar: ${title}`}>
                        <i className='bx bxl-github bx-md bx-tada-hover' ></i>
                    </a>
                </div>
                <div className="border-t-2 border-gray-300 dark:border-gray-700">
                    <ul className="flex justify-center gap-3 p-2">
                        {HardSkills && HardSkills.map((skill, index) => (
                            <div key={index}>
                                <i className={`${skill.icon} text-2xl dark:text-white`}></i>
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
            <h2 className="font-bold text-5xl drop-shadow-md text-center mb-8 dark:text-white">Meus projetos</h2>
            <div className="flex flex-wrap gap-6 justify-center lg:grid lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
