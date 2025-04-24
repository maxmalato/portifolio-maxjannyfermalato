import { HfInference } from "@huggingface/inference";

const client = new HfInference(import.meta.env.VITE_HUGGING_FACE_API_KEY);

export const getChatCompletion = async (messages) => {
  try {
    const chatCompletion = await client.chatCompletion({
      model: "mistralai/Mistral-7B-Instruct-v0.3",
      messages,
      provider: "together",
      max_tokens: 500,
    });

    return chatCompletion.choices[0].message;
  } catch (error) {
    console.error("Erro ao chamar a API:", error);
    return { role: "system", content: "Desculpe, ocorreu um erro ao processar sua solicitação." };
  }
};