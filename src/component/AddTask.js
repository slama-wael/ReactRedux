import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTask} from "../js/action/action"

const AddTask = () => {
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    const handleChange=(e) => {
        e.preventDefault();
        if (text.trim()){
            dispatch(addTask({id:Math.random(), text:text,isDone:false}));
            setText("");
        }else{
            alert("empty text")
        }
    }

    return (
        <div>
            <input placeholder='add task ' onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={handleChange}>add</button>
            
        </div>
    )
}

export default AddTask