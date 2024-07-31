//Initial state => estado inicial

const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: 2,
    todo: "Learn about React",
    done: true,
  },
  {
    id: 3,
    todo: "Meet friend for lunch",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "ADD_TODO") {
    return [...state, action.payload];
  }

  return state; // siempre debe retornar un estado
};

let todos = todoReducer();

//Añadir un nuevo elemento

//❌ Esto es algo que nunca debemos de hacer. No mutar al estado. Es una mala práctica en react

// todos.push({
//   id: 4,
//   todo: "Recolectar la piedra del poder",
//   done: false,
// });

//✅ lo correcto es mandar una acción al estado y esta acción le dirá como va a modificarse
const newTodo = {
  id: 4,
  todo: "Recolectar la piedra del poder",
  done: false,
};

// Se debe mantener el siguientes estándar para las acciones
const addTodo = {
  type: "ADD_TODO",
  payload: newTodo,
};

todos = todoReducer(todos, addTodo);

console.log({ state: todos });
