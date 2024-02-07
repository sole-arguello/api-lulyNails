import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <main
        className="contacto"
        style={{
          backgroundImage:
            "url(depositphotos_317114954-stock-photo-closeup-of-nails-in-uv.webp)",
        }}
      >
        <section className="contacto__form-ubicacion py-5 mt-5 container">
          <h1 className="contacto__form-ubicacion--title pt-5 text-center fw-bold">
            Contacto
          </h1>
          <div className="contacto__form-ubicacion--container row">
            <form className="contacto__form col-lg-7 py-5 pb-md-5">
              <div className="contacto__form--container border border-secondary p-3 rounded-3">
                <div className="contacto__form--container-name mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Nombre y Apellido
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ingrese su nombre"
                  />
                </div>
                <div className="contacto__form--container-email mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="contacto__form--container-mje mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Mensaje
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Ingrese su mensaje"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="contacto__form--container-btn btn btn-outline-secondary px-5"
                >
                  Enviar
                </button>
              </div>
            </form>
            <div className="contacto__ubicacion col-lg-4 d-lg-block d-sm-flex justify-content-between">
              <div className="contacto__ubicacion--container">
                <p className="contacto__ubicacion--container-direction">
                  <i className="fa-solid fa-location-dot mx-3 fs-4 mt-lg-5"></i>
                  Remonda xxx, CORDOBA
                </p>
                <p className="contacto__ubicacion--container-phone">
                  <i className="fa-solid fa-phone mx-3 fs-4"></i>+ 54 9 351
                  213-8337
                </p>
                <p className="contacto__ubicacion--container-email">
                  <i className="fa-solid fa-envelope mx-3 fs-4"></i>
                  lourdesbustos67@gmail.com
                </p>
              </div>

              <iframe
                className="contacto__ubicacion--mapa"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3406.8265825447907!2d-64.17181798485325!3d-31.363764381421742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIxJzQ5LjYiUyA2NMKwMTAnMTAuNyJX!5e0!3m2!1ses!2sar!4v1664076582068!5m2!1ses!2sar"
                width="375"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
        <hr />
        <section className="contacto__preguntas py-5 px-3 container">
          <h2 className="contacto__preguntas--title pb-3 text-center">
            Preguntas frecuentes
          </h2>
          <div
            className="contacto__preguntas--acordeon accordion accordion-flush"
            id="accordionFlushExample"
          >
            <div className="accordion-item bg-transparent">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed text-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  ¿Qué formas de pago reciben?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <p className="mx-5 pt-2">
                  ¡Sí! Recibimos tarjetas de Débito, Crédito o Transferencia
                  bancaria.
                </p>
              </div>
            </div>
            <div className="accordion-item bg-transparent">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed text-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  ¿Cómo se reserva un turno?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <p className="mx-5 pt-2">
                  Las reservas se realizan contactándonos por Instagram,
                  Facebook o WhatsApp (preferentemente).
                </p>
              </div>
            </div>
            <div className="accordion-item bg-transparent">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed text-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  ¿Cuánto dura el turno?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <p className="mx-5 pt-2">
                  Para que tu servicio sea bueno, los turnos duran entre 1:30 a
                  2:00 hs, dependiendo del servicio a realizar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
