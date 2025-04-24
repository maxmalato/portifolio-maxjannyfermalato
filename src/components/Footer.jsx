const Footer = () => {
    const CurrentYear = new Date().getFullYear()

    return (
        <footer>
            <div className="font-italic text-center text-sm mt-10 py-4 border-t-2 border-slate-200 dark:border-slate-600 dark:text-white">
                <p>Copyright © <span>{CurrentYear}</span> Maxjannyfer Malato. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;