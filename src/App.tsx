import React from "react";
import { GameBoard } from "./components/GameBoard"; // Asegúrate de usar llaves para importación nombrada
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <GameBoard />
    </div>
  );
};

export default App;
