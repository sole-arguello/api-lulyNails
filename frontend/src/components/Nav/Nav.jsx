import { Link } from "react-router-dom";
import logo from "../../assets/logo-lu.jpeg";

const Nav = () => {
  return (
    <header className="shadow-sm container-fluid fixed-top px-5 bg-primary">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img
            className="navBar__logo img-fluid"
            src={logo}
            alt=""
            width="100"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarSupportedContent"
          className="collapse navbar-collapse justify-content-end"
        >
          <ul className="navbar-nav">
            <li className="nav-item fs-4 px-4">
              <Link to="/">
                <a className="nav-link fw-bold" href="">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item fs-4 px-4">
              <Link to="/services" className="nav-link fw-bold">
                Services
              </Link>
            </li>
            <li className="nav-item fs-4 px-4">
              <Link to="/us" className="nav-link fw-bold">
                Us
              </Link>
            </li>
            <li className="nav-item fs-4 px-4">
              <Link to="/gallery" className="nav-link fw-bold">
                Gallery
              </Link>
            </li>
            <li className="nav-item fs-4 px-4">
              <Link to="/contact" className="nav-link fw-bold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
