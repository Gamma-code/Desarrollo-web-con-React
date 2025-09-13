import "./Navbar.css";

function Navbar() {
  return (
    <header className="Navbar">
      <div className="container">
        <h1 className="logo">Turismo</h1>
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Destinos</a>
          <a href="#">Actividades</a>
          <a href="#">Galeria</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;