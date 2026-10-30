import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/apiMock";

const Mock = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const currentQueryClient = useQueryClient();

  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: api.fetchTodos,
    saleTime: 1000 * 60 * 5, // Данные считаются "свежими" 5 минут (не делать повторных запросов)
    retry: 1, // Количество попыток при ошибке
  });

  const addTodoMutation = useMutation({
    mutationFn: api.addTodo,
    onSuccess: () => {
      currentQueryClient.invalidateQueries({ queryKey: ["todos"] });
      setNewTodoText("");
    },
  });

  const toggleTodoMutation = useMutation({
    mutationFn: api.toggleTodo,
    onSuccess: () => {
      currentQueryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: api.deleteTodo,
    onSuccess: () => {
      currentQueryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodoText) return;
    addTodoMutation.mutate(newTodoText);
  };

  if (isLoading) return <div style={styles.center}>Загрузка задач...</div>;
  if (isError) return <div style={styles.center}>Ошибка: {error.message}</div>;

  return (
    <div style={styles.container}>
      <h2>Мой список задач</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="What to do?"
          disabled={addTodoMutation.isPending}
          style={styles.input}
        />
        <button
          type="submit"
          disabled={addTodoMutation.isPending}
          style={styles.button}
        >
          {addTodoMutation.isPending ? "Добавление..." : "Добавить"}
        </button>
      </form>

      <ul style={styles.list}>
        {todos?.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span
              style={{
                ...styles.todoText,
                textDecoration: todo.complited ? "line-through" : "none",
                opacity: todo.complited ? 0.5 : 1,
              }}
              onClick={() =>
                toggleTodoMutation.mutate({
                  id: todo.id,
                  complited: todo.complited,
                })
              }
            >
              {todo.complited ? "✅ " : "⬜ "}
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodoMutation.mutate(todo.id)}
              style={styles.deleteButton}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  },
  form: { display: "flex", gap: "10px", marginBottom: "20px" },
  input: {
    flex: 1,
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "8px 16px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  list: { listStyle: "none", padding: 0 },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
  todoText: { cursor: "pointer", flex: 1 },
  deleteButton: {
    padding: "4px 8px",
    background: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  center: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
};

export default Mock;
