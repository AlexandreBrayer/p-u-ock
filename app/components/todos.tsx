type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export type TodosProps = {
  resolvedTodos?: Todo[];
};

export const Todos = ({ resolvedTodos }: TodosProps) => {
  return (
    <div>
      <h2>Todos</h2>
      {!resolvedTodos || resolvedTodos.length === 0 ? (
        <p>Aucune todo à afficher</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {resolvedTodos.map((todo) => (
            <li
              key={todo.id}
              style={{
                padding: "8px 0",
                borderBottom: "1px solid #eee",
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#999" : "#000",
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                disabled
                style={{ marginRight: 8 }}
              />
              {todo.todo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
