import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

// Хук useDispatch будет предоставлять возможность компоненту изменять глобальное состояние:
export function useDispatch() {
  // Получаем доступ к глобальному состоянию через использование контекста:
  const store = useContext(StoreContext);
  // Возвращаем функцию, которая позволяет изменять глобальное состояние:
  return store.dispatch.bind(store);
}
