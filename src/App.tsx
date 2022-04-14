import React, { useState } from "react";
import "./App.css";
import CampoDeEntrada from "./components/CampoDeEntrada";
import ListaDeTarefas from "./components/ListaDeTarefas";
import { Todo } from "./models/model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log(result);

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todos,
      complete = completoTodos;

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }


    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setCompletoTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">
          Gerenciador de Atividades e Tarefas
        </span>
        <CampoDeEntrada todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

        <ListaDeTarefas
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
