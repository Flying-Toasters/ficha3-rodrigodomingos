function Card({name, attack}) {
  return (
    <li className="card">
      {name}, ataque: {attack} {attack >= 6 && <span>forte</span>}
    </li>
  );
}

export default Card;