import React, { useState, useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { TodoReducer, initialState } from "./reducers/todo-reducer";

function App() {
  const [todoState, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <div className="App">
      <TodoList todoState={todoState} dispatch={dispatch} />
      <TodoForm todoState={todoState} dispatch={dispatch} />
    </div>
  );
}

export default App;
