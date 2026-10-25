const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="italic text-center text-sm mt-10 py-4 border-t-2 border-slate-200 dark:border-slate-600">
      <p>
        Copyright © {currentYear} Maxjannyfer Malato. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
