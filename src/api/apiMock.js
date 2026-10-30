const BASE_URL = "http://localhost:3000/mockTodos";

export const api = {
    fetchTodos: async () => {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch todos");
        }
        return response.json();
    },
    addTodo: async (text) => {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text, complited: false }),
        });
        if (!response.ok) {
            throw new Error("Failed to add todo");
        }
        return response.json();
    },
    toggleTodo: async ({ id, complited }) => {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ complited: !complited }),
        });
        if (!response.ok) {
            throw new Error("Failed to toggle todo");
        }
        return response.json();
    },
    deleteTodo: async (id) => {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete todo");
        }
        return response.json();
    }
}