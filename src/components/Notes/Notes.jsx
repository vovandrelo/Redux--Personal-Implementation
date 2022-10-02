import NoteContainer from '../../containers/Note/NoteContainer';

import style from './style.module.sass';

const Notes = ({noteIds}) => {
    console.log("The Notes component was rendered");
    return (
        <ul className={style.notesContainer}>
            {noteIds.map(noteId => <NoteContainer key={noteId} noteId={noteId}/>)}
        </ul>
    )
}

export default Notes;