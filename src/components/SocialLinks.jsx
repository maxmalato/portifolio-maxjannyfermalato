import curriculo from "../assets/documents/curriculo-maxjannyfer.pdf";
import { socialLinks } from "../data/socialLinks";

const SocialLinks = () => {
  return (
    <section aria-label="Currículo e redes sociais" className="my-8">
      <a
        className="p-2 bg-brand rounded-lg text-white text-lg font-semibold hover:bg-orange-500"
        href={curriculo}
        target="_blank"
        rel="noopener noreferrer"
      >
        Currículo
      </a>
      <div className="flex gap-5 justify-center pt-4 mt-2">
        {socialLinks.map(({ label, href, icon, color }) => {
          const isExternal = href.startsWith("http");

          return (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              <i className={`${icon} bx-md bx-tada-hover ${color}`}></i>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default SocialLinks;
