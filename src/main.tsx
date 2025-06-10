import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./navbar";
import Home from "./home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Home />
  </StrictMode>
);
