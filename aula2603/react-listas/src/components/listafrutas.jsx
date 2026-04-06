const frutas = [
  { id: 1, nome: 'Uva', preco: 15.60 },
  { id: 2, nome: 'Abacaxi', preco: 10 },
  { id: 3, nome: 'Amora', preco: 19 },
  { id: 4, nome: 'Melancia', preco: 20.50 },
];

export default function ListaFrutas({ titulo }) {
  const listaFrutas = frutas.map((fruta) => {
    return (
      <li key={fruta.id}>
        <h3>{fruta.nome}</h3>
        <p>{`R$ ${fruta.preco.toFixed(2)} por kg`}</p>
      </li>
    );
  });

  return (
    <>
      <h1>{titulo}</h1>
      <ul>
        {listaFrutas}
      </ul>
    </>
  );
}