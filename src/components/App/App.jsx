import AdditionForm from '../AdditionForm/AdditionForm';
import Notes from '../Notes/Notes';
import AdditionFormContainer from '../../containers/AdditionForm/AdditionFormContainer';
import NotesContainer from '../../containers/Notes/NotesContainer';

import { StoreProvider } from '../../store/components/StoreProvider/StoreProvider';

import style from './style.module.sass';

const App = () => {
    console.log("The App component was rendered");
    return (
        <div className={style.container}>
            <StoreProvider>
                <NotesContainer/>
                <AdditionFormContainer/>
            </StoreProvider>
        </div>
    )
}

export default App;