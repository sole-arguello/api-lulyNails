import portadaSalon from "../../assets/home/portada2.jpg";
import portadaDepilacion from "../../assets/home/portada-depi.jpg";
import portadaPodologia from "../../assets/home/portada-podo.webp";
const FrontPage = () => {
  // CARRUSEL
  return (
    <section
      id="carouselExampleDark"
      className="home__portada carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="home__portada--container carousel-inner">
        <div
          className="portada__container carousel-item active"
          data-bs-interval="10000"
        >
          <img
            className="portada__container--img d-block w-100"
            src={portadaSalon}
            alt="Portada Salon de Uñas"
          />
          <div className="portada__container--info carousel-caption d-none d-md-block">
            <h5 className="portada__container--info-title">LulyNalis</h5>
            <p className="portada__container--info-text">Salon de Uñas</p>
          </div>
        </div>
        <div
          className="portada__container carousel-item"
          data-bs-interval="2000"
        >
          <img
            className="portada__container--img d-block w-100"
            src={portadaDepilacion}
            alt="Portada Depilacion"
          />
          <div className="portada__container--info carousel-caption d-none d-md-block">
            <p className="portada__container--info-text">
              Depilacion Definitiva
            </p>
          </div>
        </div>
        <div className="portada__container carousel-item">
          <img
            className="portada__container--img d-block w-100"
            src={portadaPodologia}
            alt="Portada Podologia"
          />
          <div className="portada__container--info carousel-caption d-none d-md-block">
            <p className="portada__container--info-text">
              Podologia y Pedicuria
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
};

export default FrontPage;
