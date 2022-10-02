import AdditionForm from "../../components/AdditionForm/AdditionForm";
import { useDispatch } from "../../store/hook/useDispatch";
import { addNote } from "../../store/modules/notes/actions";

const AdditionFormContainer = () => {
    console.log("The AdditionForm container was rendered");

    // С помощью useDispatch и указанного в нём действия производится изменение ГС:
    const dispatch = useDispatch();
    const addItem = newNote => dispatch(addNote(newNote));

    return (
        <AdditionForm addItem={addItem}/>
    )
}

export default AdditionFormContainer;