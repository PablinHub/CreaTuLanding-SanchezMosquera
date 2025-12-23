import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4 py-3">
      <a className="navbar-brand fw-bold fs-3 glow" href="#">
        HUBS
      </a>

      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
          <li className="nav-item">
            <a className="nav-link text-white fw-semibold" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fw-semibold" href="#">
              Entornos VR
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fw-semibold" href="#">
              Contacto
            </a>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;