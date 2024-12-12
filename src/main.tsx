import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import TodosProvider from "./contexts/TodosContext.tsx";

createRoot(document.getElementById("root")!).render(
  <TodosProvider>
    <App />
  </TodosProvider>
);
