const defaultTodos = [
  { text: "eat", completed: true },
  { text: "sleep", completed: false },
  { text: "work", completed: false },
  { text: "workout", completed: true },
  { text: "working", completed: false },
];

const TodoList = ({ todos = defaultTodos }) => {
  return (
    <div>
      {todos
        .filter((todo) => !todo.completed)
        .map((todo, index) => (
          <div key={index}>
            <div>
              <span>{todo.text}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
