//============================================== ACTIONS ==============================================\\

// В файле actions.js описываются действия, которые могут изменять состояния данного модуля.

// Создание возможных типов действий, которые способен обрабатывать данный модуль:
export const NOTES_ACTIONS = {
    AddNote: "NOTES_ACTIONS/ADD_NOTE",
    DeleteNote: "NOTES_ACTIONS/DELETE_NOTE"

    // ... Аналогично описываются и другие типы действий ...
};
  
// Создание действий(Action-ов) - в них указывается тип действия(type) и данные(payload), с которыми происходит
// взаимодействие:

// Добавление заметки:
export const addNote = newNote => ({
    type: NOTES_ACTIONS.AddNote,
    payload: newNote,
});

// Удаление заметки:
export const deleteNote = noteId => ({
    type: NOTES_ACTIONS.DeleteNote,
    payload: noteId,
});

// ... Аналогично реализуются и другие действия модуля ...