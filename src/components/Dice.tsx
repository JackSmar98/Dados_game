import React, { useEffect, useState } from "react";
import { DiceProps } from "../types";

export const Dice: React.FC<DiceProps> = ({ value, rolling }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (rolling) {
      setAnimationClass("rolling");

      // Eliminar la clase después de que termine la animación
      const timer = setTimeout(() => {
        setAnimationClass("");
      }, 800); // Debe coincidir con la duración de la animación en CSS

      return () => clearTimeout(timer);
    }
  }, [rolling]);

  const dots = [];

  // Configuración de los puntos según el valor del dado
  switch (value) {
    case 1:
      dots.push(<div key="center" className="dot center"></div>);
      break;
    case 2:
      dots.push(<div key="top-right" className="dot top-right"></div>);
      dots.push(<div key="bottom-left" className="dot bottom-left"></div>);
      break;
    case 3:
      dots.push(<div key="top-right" className="dot top-right"></div>);
      dots.push(<div key="center" className="dot center"></div>);
      dots.push(<div key="bottom-left" className="dot bottom-left"></div>);
      break;
    case 4:
      dots.push(<div key="top-left" className="dot top-left"></div>);
      dots.push(<div key="top-right" className="dot top-right"></div>);
      dots.push(<div key="bottom-left" className="dot bottom-left"></div>);
      dots.push(<div key="bottom-right" className="dot bottom-right"></div>);
      break;
    case 5:
      dots.push(<div key="top-left" className="dot top-left"></div>);
      dots.push(<div key="top-right" className="dot top-right"></div>);
      dots.push(<div key="center" className="dot center"></div>);
      dots.push(<div key="bottom-left" className="dot bottom-left"></div>);
      dots.push(<div key="bottom-right" className="dot bottom-right"></div>);
      break;
    case 6:
      dots.push(<div key="top-left" className="dot top-left"></div>);
      dots.push(<div key="top-right" className="dot top-right"></div>);
      dots.push(<div key="middle-left" className="dot middle-left"></div>);
      dots.push(<div key="middle-right" className="dot middle-right"></div>);
      dots.push(<div key="bottom-left" className="dot bottom-left"></div>);
      dots.push(<div key="bottom-right" className="dot bottom-right"></div>);
      break;
    default:
      break;
  }

  return <div className={`dice ${animationClass}`}>{dots}</div>;
};
