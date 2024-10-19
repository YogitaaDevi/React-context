import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext.tsx";
import EmployeeContext from "./context/EmployeeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <AuthContext>
        <EmployeeContext>
          <App />
        </EmployeeContext>
      </AuthContext>
    </StrictMode>
  </BrowserRouter>
);
