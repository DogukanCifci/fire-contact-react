import { useState } from "react";
import "./App.css";
import AuthContextProvider from "./context/AuthContextProvider";
import Home from "./pages/Home";

function App() {
  return (
    <AuthContextProvider>
      <Home />
    </AuthContextProvider>
  );
}

export default App;
