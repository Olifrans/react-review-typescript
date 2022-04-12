import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value) }
        placeholder="Entre com os dados.."
        className="input__box"
      />
      <button
        type="submit"
        placeholder="Entre com os dados.."
        className="input_submit"
      >
        GO
      </button>
    </form>
  );
};

export default InputFeild;
