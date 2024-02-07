import React from "react";
import Footer from "../components/Footer/Footer";
import uñas3 from "../assets/gallery/unias3.jpeg";
import uñas4 from "../assets/gallery/unias4.jpeg";
import uñas5 from "../assets/gallery/unias5.jpeg";
import uñas6 from "../assets/gallery/unias6.jpeg";
import uñas2 from "../assets/gallery/unias2.jpeg";
import uñas7 from "../assets/gallery/unias7.jpeg";
import uñas8 from "../assets/gallery/unias8.jpeg";
import uñas9 from "../assets/gallery/unias9.jpeg";

const Gallery = () => {
  return (
    <div>
      <main className="galeria py-5">
        <h1 className="galeria__title text-center">Nuestros trabajos</h1>
        <section className="galeria__box row justify-content-center">
          <div className="galeria__box--img col-sm-12 col-md-5 col-xl-3 pb-5">
            <img
              className="galeria__box--img-img"
              src={uñas3}
              alt="trabajos realizados"
            />
          </div>
          <div className="galeria__box--img col-sm-12 col-md-5 col-xl-3 pb-5">
            <img
              className="galeria__box--img-img"
              src={uñas4}
              alt="trabajos realizados"
            />
          </div>
          <div className="galeria__box--img col-sm-12 col-md-5 col-xl-3 pb-5">
            <img
              className="galeria__box--img-img"
              src={uñas5}
              alt="trabajos realizados"
            />
          </div>
          <div className="galeria__box--img col-sm-12 col-md-5 col-xl-3 pb-5">
            <img
              className="galeria__box--img-img"
              src={uñas6}
              alt="trabajos realizados"
            />
          </div>
          <div className="galeria__box--img col-sm-12 col-md-5 col-xl-3 pb-5">
            <img
              className="galeria__box--img-img"
              src={uñas2}
              alt="trabajos realizados"
            />
          </div>
          <div className="galeria__box--img col-sm-12 col-md-5 col-xl-3 pb-5">
            <img
              className="galeria__box--img-img"
              src={uñas7}
              alt="trabajos realizados"
            />
          </div>
          <div className="galeria__box--img col-sm-12 col-md-5 col-xl-3 pb-5">
            <img
              className="galeria__box--img-img"
              src={uñas8}
              alt="trabajos realizados"
            />
          </div>
          <div className="galeria__box--img col-sm-12 col-md-5 col-xl-3 pb-5">
            <img
              className="galeria__box--img-img"
              src={uñas9}
              alt="trabajos realizados"
            />
          </div>
          <div className="galeria__box--img col-sm-12 col-md-5 col-xl-3 pb-5">
            <img
              className="galeria__box--img-img"
              src={uñas6}
              alt="trabajos realizados"
            />
          </div>
          <div className="galeria__box--img col-sm-12 col-md-5 col-xl-3 pb-5">
            <img
              className="galeria__box--img-img"
              src={uñas4}
              alt="trabajos realizados"
            />
          </div>
        </section>
      </main>
      {
        //FOOTER
      }
      <Footer />
    </div>
  );
};

export default Gallery;
