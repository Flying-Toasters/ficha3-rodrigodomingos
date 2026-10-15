import { useState } from "react";

function Card({name, type, attack}) {
  return (
    <li className="card">
      {name}, tipo: {type}, ataque: {attack} {attack >= 6 && <span>forte</span>}
    </li>
  );
}

export default Card;