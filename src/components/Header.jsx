const Header = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <img
        src="https://avatars.githubusercontent.com/u/128427626?v=4"
        alt="Foto de Maxjannyfer Malato"
        width={256}
        height={256}
        fetchPriority="high"
        className="w-64 drop-shadow-lg rounded-full"
      />
      <p className="text-slate-700 my-4 text-xl dark:text-white">Olá! 👋 me chamo</p>
      <h1 className="font-bold text-5xl drop-shadow-md mb-3 tracking-wide">Maxjannyfer Malato</h1>
      <p className="text-brand font-semibold text-xl drop-shadow-sm">Desenvolvedor Fullstack</p>
    </div>
  );
};

export default Header;
