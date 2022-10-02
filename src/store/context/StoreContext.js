import React from "react";

// Для предоставления доступа всему приложению к общему источнику истинности создаётся
// пользовательский контекст "StoreContext", реализованный на основе обычного контекста:
export const StoreContext = React.createContext();