import { useState } from "react";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

function Todo({ todo }) {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
        dispatch(updateTodo(todo._id, text));
    };

    return (
        <li
            className={`list-group-item d-flex justify-content-between align-items-center ${todo?.done ? 'text-muted' : ''}`}
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                backgroundColor: 'white', 
                color: 'black',          
            }}
            data-testid="todo-test"
        >
            <span style={{ display: editing ? 'none' : '' }}>{todo?.data}</span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
                className="w-75"
            >
                <input
                    type="text"
                    value={text}
                    className="form-control"
                    onChange={(e) => setText(e.target.value)}
                    style={{ backgroundColor: 'white', color: 'black' }} 
                />
            </form>

            <div>
                <button
                    className="btn btn-link text-danger p-0"
                    onClick={(e) => {
                        e.stopPropagation();
                        dispatch(deleteTodo(todo._id));
                    }}
                >
                    <i className="fas fa-trash" />
                </button>
                <button
                    className="btn btn-link p-0"
                    onClick={(e) => {
                        e.stopPropagation();
                        setEditing(prevState => !prevState);
                    }}
                >
                    <i className="fas fa-pen" />
                </button>
            </div>
        </li>
    );
}

export default Todo;
