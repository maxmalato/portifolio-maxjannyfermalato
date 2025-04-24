import { useState, useEffect, useRef } from "react";
import responses from "../responses.json";
import { getChatCompletion } from "../services/chatBot";

// Função para remover acentos e normalizar texto
const normalizeText = (text) => {
  return text
    .normalize("NFD") // Separa letras de acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
    .toLowerCase();
};

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatbotRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, user: true };

    // Adiciona a mensagem do usuário ao estado
    setMessages((prev) => [...prev, userMessage]);

    // Verifica se a pergunta é sobre o currículo
    const botReplyText = await getBotReply(input);
    const botMessage = { text: botReplyText, user: false };

    // Adiciona a mensagem do bot ao estado
    setMessages((prev) => [...prev, botMessage]);

    setInput("");
  };

  const getBotReply = async (input) => {
    const normalizedInput = normalizeText(input);

    // Verifica se a pergunta é sobre o currículo
    if (
      normalizedInput.includes("habilidade pessoal") ||
      normalizedInput.includes("habilidades pessoais") ||
      normalizedInput.includes("pessoais") ||
      normalizedInput.includes("pessoal") ||
      normalizedInput.includes("soft skill") ||
      normalizedInput.includes("soft skills")
    ) {
      return `🌟 Minhas habilidades pessoais incluem: ${responses.skills.softSkills.join(
        ", "
      )}.`;
    }
    if (
      normalizedInput.includes("habilidade tecnológica") ||
      normalizedInput.includes("habilidade tecnologica") ||
      normalizedInput.includes("habilidades tecnológicas") ||
      normalizedInput.includes("habilidades tecnologicas") ||
      normalizedInput.includes("tecnologias") ||
      normalizedInput.includes("tecnologia") ||
      normalizedInput.includes("habilidade") ||
      normalizedInput.includes("habilidades") ||
      normalizedInput.includes("hard skill") ||
      normalizedInput.includes("hard skill")
    ) {
      return `⚡ Minhas habilidades incluem: ${responses.skills.hardSkills.join(
        ", "
      )}.`;
    }
    if (
      normalizedInput.includes("experiencia") ||
      normalizedInput.includes("experiencias") ||
      normalizedInput.includes("experiência") ||
      normalizedInput.includes("experiência")
    ) {
      return `💼 Minha experiência inclui: ${responses.experience
        .map(
          (exp) =>
            `${exp.position} na ${exp.company} (${exp.start_date} - ${exp.end_date})`
        )
        .join(", ")}.`;
    }
    if (
      normalizedInput.includes("educacao") ||
      normalizedInput.includes("educação")
    ) {
      return `🎓 Minha educação inclui: ${responses.education
        .map(
          (edu) =>
            `${edu.degree} pela ${edu.institution} (${edu.completion_year})`
        )
        .join(", ")}.`;
    }
    if (
      normalizedInput.includes("projetos") ||
      normalizedInput.includes("projeto") ||
      normalizedInput.includes("project") ||
      normalizedInput.includes("projects")
    ) {
      return responses.projects
        .map(
          (project) =>
            `🔧 ${project.title}: ${project.description} - [Demo](${project.demoLink}) - [Código](${project.codeLink})`
        )
        .join("\n\n");
    }
    if (
      normalizedInput.includes("contato") ||
      normalizedInput.includes("contatos") ||
      normalizedInput.includes("contacts") ||
      normalizedInput.includes("contact")
    ) {
      return `📩 Você pode me contatar pelo e-mail: ${responses.contact}`;
    }
    if (
      normalizedInput.includes("resumo") ||
      normalizedInput.includes("summary")
    ) {
      return `📄 Resumo: ${responses.summary}`;
    }
    if (
      normalizedInput.includes("telefone") ||
      normalizedInput.includes("phone")
    ) {
      return `📞 Meus telefones são: ${responses.phone.join(", ")}`;
    }
    if (
      normalizedInput.includes("email") ||
      normalizedInput.includes("e-mail")
    ) {
      return `📧 Meu e-mail é: ${responses.email}`;
    }
    if (normalizedInput.includes("linkedin")) {
      return `🔗 Meu LinkedIn: ${responses.linkedin}`;
    }
    if (normalizedInput.includes("github")) {
      return `🔗 Meu GitHub: ${responses.github}`;
    }
    if (
      normalizedInput.includes("portfolio") ||
      normalizedInput.includes("portfólio")
    ) {
      return `🌐 Meu portfólio: ${responses.portfolio}`;
    }
    if (
      normalizedInput.includes("responsabilidade") ||
      normalizedInput.includes("responsabilidades") ||
      normalizedInput.includes("atividades") ||
      normalizedInput.includes("atividade")
    ) {
      const company = responses.experience.find((exp) =>
        normalizedInput.includes(normalizeText(exp.company))
      );
      if (company) {
        return `As responsabilidades de Max na empresa ${company.company} são: ${company.responsibilities}.`;
      }
    }

    // Se a pergunta não for específica do currículo, chama a API da Hugging Face
    const botReply = await getChatCompletion([
      {
        role: "system",
        content:
          "Você é um assistente que responde perguntas sobre o currículo de Maxjannyfer Segtowyck Malato.",
      },
      { role: "user", content: input },
    ]);
    return botReply.content;
  };

  const handleClickOutside = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50" ref={chatbotRef}>
      {isOpen ? (
        <div className="w-80 h-96 border rounded-lg shadow-lg bg-white flex flex-col">
          <div className="flex-1 overflow-y-scroll border-b border-gray-300 p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-${msg.user ? "right" : "left"} mb-2 border-b p-1`}
              >
                <strong>{msg.user ? "Você" : "Bot"}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between p-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Em que posso ajudar?"
              className="w-full p-2 rounded-lg focus:outline-none"
            />
            <button
              onClick={handleSend}
            >
              <i className="bx bxs-send bx-tada-hover bg-orange-600 p-3 rounded-lg text-white"></i>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 bg-orange-600 text-white rounded-xl dark:bg-slate-100 dark:text-orange-600"
        >
          <i className="bx bx-bot bx-tada-hover bx-sm"></i>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
