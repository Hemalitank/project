import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addNewTodo(text));
            setText('');
        }
    };

    const onInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        <form className="d-flex mb-3" onSubmit={onFormSubmit}>
            <input  
                type="text"
                placeholder="Enter new todo..."
                className="form-control me-2"
                onChange={onInputChange}
                value={text}
                style={{ backgroundColor: 'white', color: 'black' }} 
            />
            <button type="submit" className="btn btn-outline-dark">
                Add Todo
            </button>
        </form>
    );
}

export default TodoForm;
