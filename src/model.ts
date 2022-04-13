

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}





// import { useReducer } from "react";
// import { type } from '@testing-library/user-event/dist/type';




// type Actions =
//     | { type: "add"; payload: string }
//     | { type: "remove"; payload: number }
//     | { type: "done"; payload: number };

// const TodouReducer = (state: Todo[], action: Actions) => {

//     switch (action.type) {
//         case "add":
//             return [
//                 ...state,
//                 { id: Date.now(), todo: action.payload, isDone: false },
//             ];

//         case "remove":
//             return state.filter((todo) => todo.id !== action.payload);

//         case "done":
//             return state.map((todo) =>
//                 todo.id !== action.payload ? { ...todo, isDone: !todo.isDone }
//             );

//         default:
//             return state;
//     }
// }


// const ReducerExemplo = () => {

//     const [state, dispatch] = useReducer(TodouReducer, [])

//     return (
//         <div>model < /div>
//     )

// }

// export default ReducerExemplo;