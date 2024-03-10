import { Link } from "react-router-dom";
import manicure2 from "../../assets/home/manicure2.webp";
import pedicure from "../../assets/home/pedicure.jpg";
import esmaltado from "../../assets/home/esmaltados.jpg";
import depi from "../../assets/home/depi.jpg";
import deco from "../../assets/home/dco-y-otros.jpg";

const Articles = () => {
  return (
    <section className="home__service row row-cols-xl-6 row-cols-lg-2 row-cols-md-2 g-4 text-center container-fluid py-5 justify-content-center">
      <article className="home__service--articulo container-fluid pb-md-3">
        <div className="home__service--articulo-card card border-0 h-100">
          <Link className="card__link" to="/services">
            <img src={manicure2} className="card__img" alt="manicure" />
          </Link>
          <div className="card__info card-body">
            <div className="card__info--line"></div>
            <p className="card__info--title fw-bold">Manicure</p>
          </div>
        </div>
      </article>
      <article className="home__service--articulo container-fluid pb-md-3">
        <div className="home__service--articulo-card card border-0 h-100">
          <Link className="card__link" to="/services">
            <img src={pedicure} className="card__img" alt="pedicure" />
          </Link>
          <div className="card__info card-body">
            <div className="card__info--line"></div>
            <p className="card__info--title fw-bold">Pedicure</p>
          </div>
        </div>
      </article>
      <article className="home__service--articulo container-fluid pb-md-3">
        <div className="home__service--articulo-card card border-0 h-100">
          <Link className="card__link" to="/services">
            <img src={esmaltado} className="card__img" alt="esmaltado" />
          </Link>
          <div className="card__info card-body">
            <div className="card__info--line"></div>
            <p className="card__info--title fw-bold">Esmaltado</p>
          </div>
        </div>
      </article>
      <article className="home__service--articulo container-fluid pb-md-3">
        <div className="home__service--articulo-card card border-0 h-100">
          <Link to="/services">
            <img src={depi} className="card__img" alt="depilacion" />
          </Link>
          <div className="card__info card-body">
            <div className="card__info--line"></div>
            <p className="card__info--title fw-bold">Depilacion</p>
          </div>
        </div>
      </article>
      <article className="home__service--articulo container-fluid pb-md-3">
        <div className="home__service--articulo-card card border-0 h-100">
          <Link to="/services">
            <img src={deco} className="card__img" alt="deco y otros" />
          </Link>
          <div className="card__info card-body">
            <div className="card__info--line"></div>
            <p className="card__info--title fw-bold">Deco y Otros</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Articles;
