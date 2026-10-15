import Card from "./Card.jsx";
import { useState } from "react";
// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).
const cards = [
    { name: "Add", type: "Demónio", attack: 23, defense: 15 },
    { name: "Bee", type: "Demónio", attack: 3, defense: 3 },
    { name: "Cif", type: "Demónio", attack: 9, defense: 4 },
    { name: "Lev", type: "Demónio", attack: 6, defense: 8 },
    { name: "Gray", type: "Humano", attack: 2, defense: 3 }
];





function App() {

const [filter, setFilter] = useState("Todas");
const [luckyCard, setCard] = useState(null);
const [search, setSearch] = useState("");

const visible = cards.filter(
    (card) => {const filtro = filter === "Todas" || card.type === filter
    const matchSearch = card.name.toLowerCase().includes(search);
    return filtro && matchSearch;
    }
  );  

function takeCard() {
  const index = Math.floor(Math.random() * cards.length)
  setCard(cards[index])
}
  return (
    
    

    <main>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <button onClick={() => setFilter("Demónio")}>
        Só demónios
      </button>
      <button onClick={() => setFilter("Humano")}>
        Só humanos
      </button>
      <button onClick={() => setFilter("Todas")}>
        Todas
      </button>
      <button onClick={takeCard}> Lucky Card </button>
      {luckyCard && (
        <div>
          <h2>Lucky Card: </h2>
          <Card card={luckyCard}/>
        </div>
      )}

     

      


      <h1>Eu tenho {visible.length} cartas</h1>

      {visible.map((card, index) => (
        <Card key={index} card={card}/>
      ))}
    </main>
  );
}

export default App;
