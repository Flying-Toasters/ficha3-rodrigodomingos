import { useState } from "react";

function Card({card}) {
  return (
    <li className="card">
      {card.name}, tipo: {card.type}, ataque: {card.attack} {card.attack >= 6 && <span>forte</span>}
    </li>
  );
}

export default Card;