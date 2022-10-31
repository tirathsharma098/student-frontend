import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className="main-content">
    <App />
  </div>
);
