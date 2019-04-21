interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todo: Todo = {
  id: 1,
  text: "Buy milk",
  completed: false
};

function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type TodoId = Todo["id"];

const id = prop(todo, "id");
const dueDate = prop(todo, "dueDate");
