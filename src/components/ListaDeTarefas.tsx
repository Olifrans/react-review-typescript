import React from "react";
import { Todo } from "../models/model";
import { Droppable } from "react-beautiful-dnd";
import RealizarTarefas from "./RealizarTarefas";

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;

  setCompletoTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completoTodos: Array<Todo>;
}

const ListaDeTarefas: React.FC<Props> = ({
  todos,
  setTodos,

  completoTodos,
  setCompletoTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Tarefas Ativa</span>
            {todos?.map((todo, index) => (
              <RealizarTarefas
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos__heading">Tarefas Completa</span>
            {completoTodos?.map((todo, index) => (
              <RealizarTarefas
                index={index}
                todo={todo}
                todos={completoTodos}
                key={todo.id}
                setTodos={setCompletoTodos}
              />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ListaDeTarefas;
