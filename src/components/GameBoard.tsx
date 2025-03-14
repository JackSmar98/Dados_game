import React, { useState } from "react";
import { Dice } from "./Dice";
import { GameState } from "../types";

export const GameBoard: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    dice1: 1,
    dice2: 1,
    total: 2,
    rolls: 0,
    rolling: false,
    history: [],
  });

  const rollDice = () => {
    // Prevenir múltiples tiradas mientras los dados están girando
    if (gameState.rolling) return;

    // Reproducir sonido de dados (efecto opcional)
    // const diceSound = new Audio('/dice-sound.mp3');
    // diceSound.play();

    setGameState((prev) => ({
      ...prev,
      rolling: true,
    }));

    // Simular la animación de tirada de dados
    setTimeout(() => {
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      const newTotal = dice1 + dice2;

      setGameState((prev) => ({
        dice1,
        dice2,
        total: prev.total + newTotal,
        rolls: prev.rolls + 1,
        rolling: false,
        history: [...prev.history, { dice1, dice2, total: newTotal }],
      }));
    }, 800); // Coincide con la duración de la animación
  };

  const resetGame = () => {
    setGameState({
      dice1: 1,
      dice2: 1,
      total: 0,
      rolls: 0,
      rolling: false,
      history: [],
    });
  };

  return (
    <div className="game-board">
      <h1>Juego de Dados</h1>

      <div className="dice-container">
        <Dice value={gameState.dice1} rolling={gameState.rolling} />
        <Dice value={gameState.dice2} rolling={gameState.rolling} />
      </div>

      <div className="controls">
        <button onClick={rollDice} disabled={gameState.rolling}>
          {gameState.rolling ? "Tirando..." : "Tirar Dados"}
        </button>
        <button onClick={resetGame} disabled={gameState.rolling}>
          Reiniciar Juego
        </button>
      </div>

      <div className="stats">
        <p>
          <strong>Tiradas:</strong> {gameState.rolls}
        </p>
        <p>
          <strong>Total acumulado:</strong> {gameState.total}
        </p>
        <p>
          <strong>Última tirada:</strong>{" "}
          {gameState.rolling ? "-" : gameState.dice1 + gameState.dice2}
        </p>
      </div>

      {gameState.history.length > 0 && (
        <div className="history">
          <h2>Historial de Tiradas</h2>
          <ul>
            {gameState.history.map((roll, index) => (
              <li key={index}>
                Tirada {index + 1}: {roll.dice1} + {roll.dice2} = {roll.total}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
