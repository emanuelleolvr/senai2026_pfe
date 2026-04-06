import { useContext } from "react";
import { ContextoTema } from "../contexts/temaContexto";

export default function Noticias() {
  const { tema } = useContext(ContextoTema);

  const noticias = [
  {
    titulo: "Inteligência Artificial avança",
    descricao: "Novas IAs estão revolucionando o mercado de trabalho.",
    imagem: "https://via.placeholder.com/300"
  },
  {
    titulo: "Clima em alerta",
    descricao: "Temperaturas batem recordes em várias regiões.",
    imagem: "https://via.placeholder.com/300"
  },
  {
    titulo: "Novo smartphone lançado",
    descricao: "Empresa apresenta tecnologia inovadora.",
    imagem: "https://via.placeholder.com/300"
  }
];

  return (
    <section className={`noticias-${tema}`}>
      <h2>Notícias</h2>

      <div className="cards">
        {noticias.map((noticia, index) => (
          <div key={index} className="card">
            <img src={noticia.imagem} alt="" />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}