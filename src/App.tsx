import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList";
import { Todo } from "./model";
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const [completoTodos, setCompletoTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">
          Dev - ITI-Instituto Tecnológico Inovação
        </span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          completoTodos={completoTodos}
          setCompletoTodos={setCompletoTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
