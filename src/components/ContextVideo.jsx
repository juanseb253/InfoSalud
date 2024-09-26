import "../styles/ContextVideo.css";

const ContextVideo = ({ handlerContenedor, handlerContext }) => {
  const handleClick = (id) => {
    handlerContenedor(false);
    handlerContext(id);
  };
  return (
    <div className="flotante">
      <h4>Elija uno de los siguientes videos como contexto</h4>
      <div className="url-container">
        <span>
          <div className="sep-url">
            <a href="https://www.youtube.com/watch?v=g8UnFD3lmzk">
              1. Tips para la prevencion y control del colera.
            </a>
            <button className="context" onClick={() => handleClick(1)}>
              Usar
            </button>
          </div>
          <div className="sep-url">
            <a href="https://www.youtube.com/watch?v=k8J6wEsKDSk">
              2. Cómo empezó (COVID-19)
            </a>
            <button className="context" onClick={() => handleClick(2)}>
              Usar
            </button>
          </div>
          <div className="sep-url">
            <a href="https://www.youtube.com/watch?v=xmk_ZrKDwJs">
              3. Etapas del VIH
            </a>
            <button className="context" onClick={() => handleClick(3)}>
              Usar
            </button>
          </div>
          <div className="sep-url">
            <a href="https://www.youtube.com/watch?v=hgcQflt1kgw">
              4. La plaga de nuestro tiempo
            </a>
            <button className="context" onClick={() => handleClick(4)}>
              Usar
            </button>
          </div>
          <div className="sep-url">
            <a href="https://www.youtube.com/watch?v=4DJtjyB1gvE">
              5. Pandemia del COVID-19 (Documental)
            </a>
            <button className="context" onClick={() => handleClick(5)}>
              Usar
            </button>
          </div>
          <div className="sep-url">
            <a href="https://www.youtube.com/watch?v=Be4GLTiawrQ">
              6. ¿Cómo funcionan las vacunas mRNA?
            </a>
            <button className="context" onClick={() => handleClick(6)}>
              Usar
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};
export default ContextVideo;
