import curriculo from "../assets/documents/maxjannyfer.pdf";

const SocialLinks = () => {
    return (
        <article aria-labelledby="Links para Redes Sociais e Curriculo" className="my-8">
            <a className="p-2 bg-orange-600 rounded-lg text-white text-lg font-semibold hover:bg-orange-500" href={curriculo} aria-label="Curriculo - Maxjannyfer" target="_blank">Currículo</a>
            <div className="flex gap-5 justify-center pt-4 mt-2">
                <a href="https://github.com/maxmalato" aria-label="GitHub" target="_blank"><i className='bx bxl-github bx-tada-hover bx-md text-slate-900 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-200'></i></a>
                <a href="https://www.linkedin.com/in/maxmalato/" aria-label="LinkedIn" target="_blank"><i className='bx bxl-linkedin-square bx-md bx-tada-hover text-blue-600 hover:text-blue-500' ></i></a>
                <a href="mailto:max.malato@hotmail.com" aria-label="E-mail" target="_blank"><i className='bx bxs-envelope bx-md bx-tada-hover text-orange-600 hover:text-orange-500' ></i></a>
                <a href="https://wa.me/5598992352127" aria-label="WhatsApp" target="_blank"><i className='bx bxl-whatsapp bx-md bx-tada-hover text-green-700 hover:text-green-600' ></i></a>
            </div>

        </article>
    );
};

export default SocialLinks;