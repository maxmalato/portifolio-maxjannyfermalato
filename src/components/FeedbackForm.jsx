import { useState, useEffect } from "react";
import { useFeedbackStore } from "../store/useFeedbackStore";
import { toast } from "react-hot-toast";

const FeedbackForm = ({ editingFeedback, setEditingFeedback }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const addFeedback = useFeedbackStore((state) => state.addFeedback);
    const editFeedback = useFeedbackStore((state) => state.editFeedback);

    useEffect(() => {
        if (editingFeedback) {
            setName(editingFeedback.name);
            setComment(editingFeedback.comment);
        }
    }, [editingFeedback]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingFeedback) {
            editFeedback({
                ...editingFeedback,
                name,
                comment,
                updatedAt: new Date().toISOString(),
            });
        } else {
            addFeedback({ name, comment });
        }

        toast.success("Comentário criado com sucesso!")

        setName("");
        setComment("");
        setEditingFeedback(null);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 dark:bg-slate-700 dark:text-slate-100">
            <h2 className="font-bold text-3xl text-center">
                {editingFeedback ? "Editar Comentário" : "Adicionar Comentário"}
            </h2>
            <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border rounded-lg dark:bg-slate-800 dark:border-slate-600"
                required
            />
            <textarea
                placeholder="Seu comentário"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="p-2 border rounded-lg dark:bg-slate-800 dark:border-slate-600"
                required
            />
            <button type="submit" className="p-2 rounded-lg bg-orange-600 text-white w-80 font-semibold self-center cursor-pointer hover:bg-orange-500 transition-colors duration-300">
                {editingFeedback ? "Salvar" : "Enviar"}
            </button>
        </form>
    );
};

export default FeedbackForm;
