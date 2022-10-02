import { NOTES_ACTIONS } from "./actions";
//============================================== REDUCER ==============================================\\

// В файле reducer.js описывается reducer модуля, который предназначен для изменения той части ГС,
// которая относится только к данному модулю.

// Начальное внутреннее состояние данного модуля имеет вид:
const initialState = {};

// При использовании внутреннего reducer-а в качестве аргументов передаётся текущее состояние данного
// модуля и действие, которое указывает каким образом это состояние должно быть изменено. При первом
// вызове reducer-а он использует в качестве состояния начальное, а действие равняется undefine. 
export const notesReducer = (state = initialState, action) => {
  switch (action?.type) {
    case NOTES_ACTIONS.AddNote:
      const { id } = action.payload;
      return {...state, [id]: {...action.payload}};
    case NOTES_ACTIONS.DeleteNote:
      const newState = {...state};
      delete newState[action.payload];
      return newState;
    
    // ... Аналогично описываются и другие варианты изменения ГС ...

    // В том случае, если действие не относится к данному reducer-у, или reducer вызывается первый раз, то
    // возвращается неизменённая часть подсостояния:
    default:
      return state;
  }
};