import "./Banner.css";

function Banner() {
  return (
    <main className="Banner">
      <div className="container">
        <div className="Banner-text">
          <h2>
            Baja California Sur, <br /> Los Cabos
          </h2>
          <p>
            Explora las playas, paisajes y aventuras de Los Cabos. 
            Disfruta del sol, el mar y actividades únicas que harán de tu viaje 
            una experiencia inolvidable.
          </p>
          <div className="buttons">
            <button className="btn-primary">Explorar Destinos</button>
            <button className="btn-secondary">Más Información</button>
          </div>
        </div>

        <div className="Banner-image">
          <img
            src="\src\img\Tomaragua.jpg"
            alt="Decor"
          />
        </div>
      </div>
    </main>
  );
}

export default Banner;
