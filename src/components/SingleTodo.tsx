import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import TodoList from "./TodoList";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ index, todo, todos, setTodos }) => {
  const [editar, setEditar] = useState<boolean>(false);
  const [editarTodo, setEditarTodo] = useState<string>(todo.todo);



  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };



  const handleEditar = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editarTodo } : todo))
    );
    setEditar(false);
  };


  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editar]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEditar(e, todo.id)}>
      {editar ? (
        <input
          ref={inputRef}
          value={editarTodo}
          onChange={(e) => setEditarTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!editar && !todo.isDone) {
              setEditar(!editar);
            }
          }}
        >
          <AiFillEdit />
        </span>

        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>

        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
