function Card({name, attack}) {
  return (
    <li className="card">
      {name}, ataque: {attack}
    </li>
  );
}

export default Card;