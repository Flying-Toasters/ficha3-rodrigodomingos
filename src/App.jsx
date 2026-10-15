import Card from "./Card.jsx";
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
  return (
    <main>
      <h1>Eu tenho {cards.length} cartas</h1>
      {cards.map((card) => (
        <Card key={card.name} {...card}/>
      ))}
    </main>
  );

}

export default App;
