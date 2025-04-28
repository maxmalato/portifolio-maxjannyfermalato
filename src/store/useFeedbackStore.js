import { create } from 'zustand';
import { toast } from 'react-hot-toast';

export const useFeedbackStore = create((set, get) => {
    const initialUserId = sessionStorage.getItem('currentUser') || String(Date.now());
    sessionStorage.setItem('currentUser', initialUserId);

    return {
        feedbacks: [],
        userId: initialUserId,

        fetchFeedbacks: async () => {
            try {
                const response = await fetch("https://backend-portifolio-production.up.railway.app/feedbacks");
                const data = await response.json();
                set({ feedbacks: data });
            } catch (error) {
                console.error("Erro ao buscar feedbacks", error);
            }
        },

        addFeedback: async (feedback) => {
            const newFeedback = {
                userId: initialUserId,
                name: feedback.name,
                comment: feedback.comment,
            };

            try {
                const response = await fetch("https://backend-portifolio-production.up.railway.app/feedbacks", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newFeedback),
                });

                const data = await response.json();
                set((state) => ({ feedbacks: [...state.feedbacks, data] }));
            } catch (error) {
                console.error("Erro ao adicionar feedback", error);
            }

            toast.success("Comentário adicionado com sucesso!");
        },

        editFeedback: async (updatedFeedback) => {
            if (initialUserId !== updatedFeedback.userId) {
                toast.error("Você não tem permissão para editar esse comentário.");
                return;
            }

            try {
                const response = await fetch(
                    `https://backend-portifolio-production.up.railway.app/feedbacks/${updatedFeedback.id}`,
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ ...updatedFeedback, userId: initialUserId }),
                    }
                );

                const data = await response.json();
                set((state) => ({
                    feedbacks: state.feedbacks.map((fb) =>
                        fb.id === data.id ? data : fb
                    ),
                }));
            } catch (error) {
                console.error("Erro ao editar feedback", error);
            }
            
            toast.success("Comentário editado com sucesso!");
        },

        deleteFeedback: async (feedbackId) => {
            const isFeedbackOwner = (get().feedbacks.find((f) => f.id === feedbackId)?.userId === initialUserId);
            if (!isFeedbackOwner) {
                toast.error("Você não tem permissão para excluir esse comentário.");
                return;
            }

            try {
                await fetch(
                    `https://backend-portifolio-production.up.railway.app/feedbacks/${feedbackId}`,
                    {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ userId: initialUserId }),
                    }
                );

                set((state) => ({
                    feedbacks: state.feedbacks.filter((fb) => fb.id !== feedbackId),
                }));
            } catch (error) {
                console.error("Erro ao deletar feedback", error);
            }

            toast.success("Comentário excluído com sucesso!");
        },
    };
});
