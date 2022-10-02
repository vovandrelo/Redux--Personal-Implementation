import { nanoid } from 'nanoid';
import { useState } from 'react';
import style from './style.module.sass';

const AdditionForm = ({addItem}) => {
    console.log("The AdditionForm component was rendered");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        addItem({title, content, id: nanoid()})
        setTitle("")
        setContent("")
    }

    return (
        <form className={style.form}>
            <input
                onChange={e => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Заголовок"
                className={style.input}/>
            <textarea
                onChange={e => setContent(e.target.value)}
                value={content}
                style={{width: "100%", height: 270}}
                placeholder="Заметка"
                className={style.input}/>
            <button
                onClick={onSubmit}
                className={style.addNote}>Сохранить</button>
        </form>
    )
}

export default AdditionForm;