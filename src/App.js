import { useState } from "react";
import "./App.css";
import AuthContextProvider from "./context/AuthContextProvider";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <AuthContextProvider>
      <Home />
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default App;
