import { useEffect, useRef, useState } from "react";
import { useFeedbackStore } from "../store/useFeedbackStore";
import FeedbackForm from "./FeedbackForm";
import { toast } from "react-hot-toast";

const FeedbackList = () => {
    const feedbacks = useFeedbackStore((state) => state.feedbacks);
    const fetchFeedbacks = useFeedbackStore((state) => state.fetchFeedbacks);
    const deleteFeedback = useFeedbackStore((state) => state.deleteFeedback);
    const currentUser = useFeedbackStore((state) => state.userId);

    const [editingFeedback, setEditingFeedback] = useState(null);
    const formRef = useRef(null);

    useEffect(() => {
        fetchFeedbacks();
    }, [fetchFeedbacks]);

    const handleEdit = (feedback) => {
        if (feedback.userId === currentUser) {
            setEditingFeedback(feedback);
            formRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            toast.error("Você não tem permissão para editar esse comentário.");
        }
    };

    const handleDelete = (id) => {
        deleteFeedback(id);
    };

    const formatDate = (dateString) => {
        if (!dateString) return "Data não disponível";
        const date = new Date(dateString);
        return isNaN(date) ? "Data inválida" : date.toLocaleString("pt-BR");
    };

    return (
        <article id="feedbacks" className="pt-24">
            <div className="dark:bg-slate-700 dark:text-slate-100">
                <h2 className="font-bold text-5xl drop-shadow-md text-center dark:text-slate-100">
                    Comentários
                </h2>
                <p className="font-bold text-orange-600 text-center mb-5 tracking-wide">
                    Não esqueça de deixar algum comentário!
                </p>
                <div ref={formRef} className="pt-24">
                    <FeedbackForm
                        editingFeedback={editingFeedback}
                        setEditingFeedback={setEditingFeedback}
                    />
                </div>
                {feedbacks.length === 0 ? (
                    <p className="font-semibold">Nenhum feedback disponível.</p>
                ) : (
                    feedbacks.map((feedback) => (
                        <div key={feedback.id} className="flex flex-col gap-2 border-l-2 border-orange-500 p-2 my-6">
                            <h3 className="text-start text-lg dark:border-slate-600">
                                <span className="font-semibold">Nome: </span>
                                {feedback.name}
                            </h3>
                            <p className="text-start">
                                <span className="font-semibold">Comentário: </span>
                                {feedback.comment}
                            </p>
                            <p className="text-start text-sm italic mt-6">
                                <span className="font-semibold">Criado em:</span> {formatDate(feedback.createdAt)}
                            </p>
                            <p className="text-start text-sm italic">
                                <span className="font-semibold">Atualizado em:</span> {formatDate(feedback.updatedAt)}
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => handleEdit(feedback)}
                                    className="flex gap-1 items-center p-2 rounded-lg bg-orange-600 text-white cursor-pointer hover:bg-orange-500 transition-colors duration-300"
                                >
                                    <i className="bx bxs-edit-alt"></i>
                                    <span>Editar</span>
                                </button>
                                <button
                                    onClick={() => handleDelete(feedback.id)}
                                    className="flex gap-1 items-center p-2 rounded-lg bg-red-500 text-white cursor-pointer hover:bg-red-400 transition-colors duration-300"
                                >
                                    <i className="bx bxs-trash-alt"></i>
                                    <span>Excluir</span>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </article>
    );
};

export default FeedbackList;
