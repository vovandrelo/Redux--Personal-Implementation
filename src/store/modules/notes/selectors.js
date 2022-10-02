//============================================= SELECTORS =============================================\\

// В файле selectors.js описываются функции(selector-ы), которые позволяют извлекать данные из ГС,
// относящиеся к данному модулю.

// Извлечение из ГС той части, которая отвечает за данный модуль (заметки):
export const selectNotes = state => state.notes;

// Извлекаем все id-шки существующих заметок:
export const selectNotesIds = state => Object.keys(selectNotes(state));

// Извлекаем по указанному id заметки всю инофрмацию о заметке 
export const selectNoteById = (state, id) => selectNotes(state)[id];

// ... Аналогично реализуются и другие selector-ы модуля ...