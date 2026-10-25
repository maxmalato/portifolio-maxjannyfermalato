import signatureImage from "../assets/images/signature.png";
import galleryImage from "../assets/images/gallery.png";
import montiImage from "../assets/images/monti.png";
import duoRicoImage from "../assets/images/duo-rico.png";
import ongGabrielImage from "../assets/images/ong-gabriel.png";
import dgtImage from "../assets/images/dgt.png";
import screenSoundImage from "../assets/images/screensound.png";
import duoRicoProImage from "../assets/images/duorico-pro.png";
import atmosImage from "../assets/images/atmos.png";

const techs = {
  blazor: { name: "Blazor", icon: "devicon-blazor-original colored" },
  bootstrap: { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  csharp: { name: "C#", icon: "devicon-csharp-plain colored" },
  docker: { name: "Docker", icon: "devicon-docker-plain colored" },
  dotnet: { name: ".NET", icon: "devicon-dotnetcore-plain colored" },
  javascript: { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  nextjs: { name: "Next.js", icon: "devicon-nextjs-plain colored" },
  postgresql: { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  prisma: { name: "Prisma", icon: "devicon-prisma-original colored" },
  react: { name: "React", icon: "devicon-react-original colored" },
  sqlserver: { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain colored" },
  tailwind: { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  typescript: { name: "TypeScript", icon: "devicon-typescript-plain colored" },
};

export const projects = [
  {
    title: "Duo Rico Pro",
    description: "Novo aplicativo de finanças pessoais para controle de gastos.",
    image: duoRicoProImage,
    demoLink: "https://github.com/maxmalato/DuoRico.Pro",
    codeLink: "https://github.com/maxmalato/DuoRico.Pro",
    techs: [techs.csharp, techs.dotnet, techs.blazor, techs.postgresql, techs.docker],
  },
  {
    title: "ScreenSound",
    description:
      "Gestão de catálogos musicais, avaliação de artistas e classificação de gêneros.",
    image: screenSoundImage,
    demoLink: "https://github.com/maxmalato/ScreenSound",
    codeLink: "https://github.com/maxmalato/ScreenSound",
    techs: [techs.csharp, techs.dotnet, techs.sqlserver, techs.blazor],
  },
  {
    title: "DGT",
    description: "Central de ferramenta para geração e consulta de dados.",
    image: dgtImage,
    demoLink: "https://dgt-data.netlify.app/",
    codeLink: "https://github.com/maxmalato/dev-tools",
    techs: [techs.react, techs.typescript, techs.tailwind],
  },
  {
    title: "ONG Gabriel",
    description:
      "Plataforma de atendimento psicológico para pacientes (Em desenvolvimento).",
    image: ongGabrielImage,
    demoLink: "https://onggabriel.com/",
    codeLink: "https://github.com/usrmaia/ong-gabriel",
    techs: [techs.typescript, techs.nextjs, techs.tailwind, techs.prisma],
  },
  {
    title: "Duo Rico",
    description: "Aplicativo de finanças pessoais para controle de gastos.",
    image: duoRicoImage,
    demoLink: "https://github.com/maxmalato/DuoRico",
    codeLink: "https://github.com/maxmalato/DuoRico",
    techs: [techs.csharp, techs.dotnet, techs.bootstrap, techs.postgresql],
  },
  {
    title: "Assinatura Digital",
    description: "Crie uma assinatura digital para o seu e-mail.",
    image: signatureImage,
    demoLink: "https://assinatura-digital.netlify.app/",
    codeLink: "https://github.com/maxmalato/assinatura-digital",
    techs: [techs.javascript, techs.react, techs.tailwind],
  },
  {
    title: "Monti.",
    description: "Uma loja virtual simples, mas com grandes recursos.",
    image: montiImage,
    demoLink: "https://monti-ecommerce.vercel.app/",
    codeLink: "https://github.com/maxmalato/monti",
    techs: [techs.typescript, techs.nextjs, techs.tailwind],
  },
  {
    title: "Gallery",
    description:
      "Buscar imagens e salvar fotos favoritas de forma prática e personalizada.",
    image: galleryImage,
    demoLink: "https://gallery-maxmalato.netlify.app/",
    codeLink: "https://github.com/maxmalato/desafio-galeria-de-imagem-frontendfusion",
    techs: [techs.javascript, techs.react, techs.tailwind],
  },
  {
    title: "Atmos",
    description:
      "Pesquise sobre sua cidade para saber como está o seu clima em tempo real.",
    image: atmosImage,
    demoLink: "https://v0-previsao-do-tempo-app.vercel.app/",
    codeLink: "https://github.com/maxmalato/atmos",
    techs: [techs.typescript, techs.nextjs, techs.tailwind],
  },
];
