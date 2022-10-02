import Note from "../../components/Note/Note";
import { selectNoteById } from "../../store/modules/notes/selectors";
import { useSelector } from '../../store/hook/useSelector';
import { useDispatch } from "../../store/hook/useDispatch";
import { deleteNote } from "../../store/modules/notes/actions";


const NoteContainer = ({noteId}) => {
    console.log("The Note container was rendered");

    // С помощью useSelector производится извлечение необходимых данных ГС, а так же подписка
    // на их изменение. То есть компонент будет перерендерен только в случае изменения данных,
    // полученных из useSelector или перерендера родительского компонента.
    const {id, title, content} = useSelector(state => selectNoteById(state, noteId))

    // С помощью useDispatch и указанного в нём действия производится изменение ГС:
    const dispatch = useDispatch();
    const delNote = id => dispatch(deleteNote(id))

    return (
        <Note delNote={delNote} id={id} title={title} content={content}/>
    )
}

export default NoteContainer;