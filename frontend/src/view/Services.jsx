import React from "react";
import semi from "../assets/services/semi.jpg";
import uñas from "../assets/services/unias-gel.jpg";
import capping from "../assets/services/capping.webp";
import belleza from "../assets/services/belleza.webp";
import podologia from "../assets/services/podologia.jpg";
import depilacion from "../assets/services/depilacion.jpg";

const Services = () => {
  return (
    <main className="service py-5">
      <section className="service__manicure pt-5">
        <h1 className="service__manicure--title py-5 text-center fw-semibold">
          Manicure
        </h1>
        <div className="service__manicure--container row justify-content-center mx-0 px-5">
          <article className="service__manicure--container-card col-xl-4 py-3 my-3 border-0">
            <img
              className="card__img"
              src={semi}
              alt="Esmaltado Semipermanente"
            />
            <p className="card__subtitle text-muted mt-3 fw-bold">Esmaltado</p>
            <h5 className="card__title text-center text-uppercase">
              semipermanente
            </h5>
            <hr className="card__line" />
            <p className="card__text">
              Tenemos para ofrecerte una aplia paleta de colores y decoraciones,
              para que tus Uñas se vean brillantes y perfectas de 15 a 20 días.
              Esmaltado Semi-Permanente es retirado con los cuidados y amor que
              tus Uñas merecen.
            </p>
            <div className="card-footer">
              <small className="text-muted fs-5 fst-italic fw-semibold">
                Todos los Servicios incluyen Deco
              </small>
            </div>
          </article>
          <article className="service__manicure--container-card col-xl-4 py-3 my-3 border-0">
            <img className="card__img" src={uñas} alt="uñas esculpidas" />
            <p className="card__subtitle text-muted mt-3 fw-bold">Servicio</p>
            <h5 className="card__title text-center text-uppercase">
              uñas esculpidas
            </h5>
            <hr className="card__line" />
            <p className="card__text">
              Las uñas esculpidas son una gran solución para dejar de dañar tus
              uñas y qué crezcan sanas y fuertes. Se les dá la forma y extensión
              qué el cliente prefiera. Tus manos se verán perfectas y naturales
              instantáneamente.
            </p>
            <div className="card-footer">
              <small className="text-muted fs-5 fst-italic fw-semibold">
                Todos los Servicios incluyen Deco
              </small>
            </div>
          </article>
          <article className="service__manicure--container-card col-xl-4 py-3 my-3 border-0">
            <img className="card__img" src={capping} alt="kapping gel" />
            <p className="card__subtitle text-muted mt-3 fw-bold">Servicio</p>
            <h5 className="card__title text-cente text-uppercase">
              kapping gel
            </h5>
            <hr className="card__line" />
            <p className="card__text">
              Consiste en aplicar una fina capa de gel sobre la uña que actuará
              como una barrera protectora. <br />A diferencia de la Esculpidas
              que "No" alarga la uña natural sino que acompaña el crecimiento de
              la misma y alta duracion.
            </p>
            <div className="card-footer">
              <small className="text-muted fs-5 fst-italic fw-semibold">
                Todos los Servicios incluyen Deco
              </small>
            </div>
          </article>
        </div>
      </section>
      <section className="service__otros">
        <h1 className="service__otros--title py-5 text-center fw-semibold">
          Pedicure y Depilacion
        </h1>
        <div className="service__otros--container row justify-content-center mx-0 px-5">
          <article className="service__otros--container-card col-xl-4 py-3 my-3 border-0">
            <img className="card__img" src={belleza} alt="pedicuria" />
            <p className="card__subtitle text-muted mt-3 fw-bold">Servicio</p>
            <h5 className="card__title text-center text-uppercase">
              Pedicuria
            </h5>
            <hr className="card__line" />
            <p className="card__text">
              – Duración del turno: 50 minutos.
              <br />
              – Las uñas duran 15 días aproximadamente.
              <br />– Pedicure PREMIUM incluye: limado, cutícula, esmaltado,
              exfoliación con exfoliantes naturales y masajes con aceites
              tibios. Utilización del torno para limar impurezas y durezas
            </p>
          </article>
          <article className="service__otros--container-card col-xl-4 py-3 my-3 border-0">
            <img className="card__img" src={podologia} alt="Podologia" />
            <p className="card__subtitle text-muted mt-3 fw-bold">Servicio</p>
            <h5 className="card__title text-center text-uppercase">
              Podologia
            </h5>
            <hr className="card__line" />
            <p className="card__text">
              – Duración del turno: 50 minutos.
              <br />
              – Atencion personalizada, pensamos en la salud de tus pies y que
              esten bellos siempre.
              <br />– PODOESTÉTICA incluye: limado, cutícula y esmaltado.
              Utilización del bisturí para eliminar durezas y terminaciones con
              torno para darle una forma delicada y perfecta.
            </p>
          </article>
          <article className="service__otros--container-card col-xl-4 py-3 my-3 border-0">
            <img
              className="card__img"
              src={depilacion}
              alt="Depilacion Definitiva"
            />
            <p className="card__subtitle text-muted mt-3 fw-bold">Servicio</p>
            <h5 className="card__title text-cente text-uppercase">
              Depilacion Definitiva
            </h5>
            <hr className="card__line" />
            <p className="card__text">
              Consiste en destruir mediante calor las raíces de los vellos para
              que éstos no vuelvan a crecer.
              <br />
              Lo más moderno es método láser, siendo más efectivo, ya que
              permite llegar a temperaturas más altas para tratar los folículos
              pilosos. Dejandondo una piel limpia y delicada.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Services;
