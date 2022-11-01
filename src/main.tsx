import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="bg-primaryDark text-white">
    <div className="bg-primaryDark min-h-screen max-w-6xl lg:max-w-7xl  mx-auto">
      <App />
    </div>
    </div>
 </React.StrictMode>
);
