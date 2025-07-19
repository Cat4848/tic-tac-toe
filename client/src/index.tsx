import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/index";
import Game from "./components/Game";
import { ToastContainer } from "react-toastify";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Game />
    <ToastContainer theme="dark" />
  </>
);
