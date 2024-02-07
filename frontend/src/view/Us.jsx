import React from "react";
import Footer from "../components/Footer/Footer";
import persona1 from "../assets/us/persona1.jpg";
import persona2 from "../assets/us/persona2.jpg";
import persona3 from "../assets/us/persona3.jpg";
import video from "../assets/us/VideoLulyNails2.mp4";

const Us = () => {
  return (
    <main className="nosotros">
      <section className="nosotros__team py-5 text-center">
        <h1 className="nosotros__team--title py-5 fw-semibold">Team</h1>
        <div className="nosotros__team--container row row-cols-1 row-cols-md-3 g-4">
          <article className="nosotros__team--container-card col">
            <div className="nosotros__card card h-100">
              <img
                src={persona1}
                className="nosotros__card--img card-img-top"
                alt="equipo de trabajo"
              />
              <div className="nosotros__card--info card-body">
                <h5 className="nosotros__card--info-name card-title fw-bold fst-italic">
                  Lourdes
                </h5>
              </div>
            </div>
          </article>
          <article className="nosotros__team--container-card col">
            <div className="nosotros__card card h-100">
              <img
                src={persona2}
                className="nosotros__card--img card-img-top"
                alt="equipo de trabajo"
              />
              <div className="nosotros__card--info card-body">
                <h5 className="nosotros__card--info-name card-title fw-bold fst-italic">
                  Valentina
                </h5>
              </div>
            </div>
          </article>
          <article className="nosotros__team--container-card col">
            <div className="nosotros__card card h-100">
              <img
                src={persona3}
                className="nosotros__card--img card-img-top"
                alt="equipo de trabajo"
              />
              <div className="nosotros__card--info card-body">
                <h5 className="nosotros__card--info-name card-title fw-bold fst-italic">
                  Estefania
                </h5>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="nosotros__somos row py-5">
        <div className="nosotros__somos--container col-xl-7">
          <p className="nosotros__somos--container-title">Quien Somos</p>
          <p className="nosotros__somos--container-text">
            Cortas o largas, cuadradas o redondas, naturales o pintadas, las
            uñas hablan por sí solas y dicen mucho sobre la personalidad de la
            mujer. Creemos que el cuidado de las uñas ha tomado auge en los
            últimos años y lo consideramos un accesorio fundamental de la moda.
            Por ese motivo nos especializamos y profesionalizamos para ser
            líderes en el cuidado de manos y pies
          </p>
        </div>
        <video className="nosotros__somos--video col-xl-5" controls autoPlay>
          <source src={video} type="video/mp4" />
        </video>
      </section>
      <Footer />
    </main>
  );
};

export default Us;
