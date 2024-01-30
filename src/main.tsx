import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QueryProvider } from "./lib/react-query/QueryProvider";
import { AuthProvider } from "./context/AuthContext";

ReactDom.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>
  </BrowserRouter>
);
