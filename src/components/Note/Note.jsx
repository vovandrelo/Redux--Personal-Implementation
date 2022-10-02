import style from './style.module.sass';

const Note = ({delNote, id, title, content}) => {
    console.log("The Note component was rendered");
    return (
        <li className={style.noteItem}>
            <span className={style.noteTitle}>{title}</span>
            <div className={style.noteContent}>{content}</div>
            <span onClick={() => delNote(id)} className={style.noteDelete}>Удалить</span>
        </li>
    )
}

export default Note;