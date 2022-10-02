import Notes from '../../components/Notes/Notes';
import { useSelector } from '../../store/hook/useSelector';
import { selectNotesIds } from '../../store/modules/notes/selectors';

const NotesContainer = () => {
    console.log("The Notes container was rendered");

    // С помощью useSelector производится извлечение необходимых данных ГС, а так же подписка
    // на их изменение. То есть компонент будет перерендерен только в случае изменения данных,
    // полученных из useSelector или перерендера родительского компонента.
    const noteIds = useSelector(selectNotesIds);

    return (
        <Notes noteIds={noteIds}/>
        
    )
}


export default NotesContainer;